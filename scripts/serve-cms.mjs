import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.resolve(process.env.SITE_DIR || path.join(here, '..'));
const port = Number(process.env.PORT || 4873);
const host = process.env.HOST || '127.0.0.1';
const mime = new Map([
  ['.html', 'text/html; charset=utf-8'], ['.css', 'text/css; charset=utf-8'], ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'], ['.txt', 'text/plain; charset=utf-8'], ['.xml', 'application/xml; charset=utf-8'],
  ['.png', 'image/png'], ['.jpg', 'image/jpeg'], ['.jpeg', 'image/jpeg'], ['.woff2', 'font/woff2'],
  ['.webp', 'image/webp'], ['.avif', 'image/avif'], ['.svg', 'image/svg+xml; charset=utf-8'], ['.ico', 'image/x-icon']
]);
const contentPath = path.join(siteDir, 'cms', 'content.json');
const historyDir = path.join(siteDir, 'cms', 'history');
const uploadsDir = path.join(siteDir, 'uploads');
const cmsUser = process.env.CMS_USER || 'admin';
const cmsPassword = process.env.CMS_PASSWORD || '';
const authEnabled = Boolean(cmsPassword);
const allowLocalWithoutPassword = !authEnabled && ['127.0.0.1', 'localhost'].includes(host) && process.env.NODE_ENV !== 'production';
const securityHeaders = {
  'Content-Security-Policy': "default-src 'self'; img-src 'self' data: blob: https://*.yandex.ru https://*.yandex.net; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; frame-src https://yandex.ru https://*.yandex.ru; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; object-src 'none'",
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

function responseHeaders(extra = {}) {
  return { ...securityHeaders, ...extra };
}

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  let clean = decoded || '/';
  if (clean === '/' || clean === '/admin' || clean === '/admin/') clean = '/index.html';
  if (clean === '/terms') clean = '/terms/';
  if (clean === '/privacy') clean = '/privacy/';
  const joined = path.resolve(siteDir, '.' + clean);
  if (!joined.startsWith(siteDir)) return null;
  return joined;
}

async function readBody(req, limit = 25 * 1024 * 1024) {
  const chunks = [];
  let total = 0;
  for await (const chunk of req) {
    total += chunk.length;
    if (total > limit) throw Object.assign(new Error('Payload too large'), { status: 413 });
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

function sendJson(res, status, body) {
  res.writeHead(status, responseHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }));
  res.end(JSON.stringify(body));
}

function isAuthorized(req) {
  if (allowLocalWithoutPassword) return true;
  if (!authEnabled) return false;
  const header = req.headers.authorization || '';
  if (!header.startsWith('Basic ')) return false;
  const decoded = Buffer.from(header.slice(6), 'base64').toString('utf8');
  const splitAt = decoded.indexOf(':');
  const user = splitAt >= 0 ? decoded.slice(0, splitAt) : '';
  const password = splitAt >= 0 ? decoded.slice(splitAt + 1) : '';
  return user === cmsUser && password === cmsPassword;
}

function requireAuth(req, res) {
  if (isAuthorized(req)) return true;
  res.writeHead(401, responseHeaders({
    'WWW-Authenticate': 'Basic realm="Visual CMS"',
    'Cache-Control': 'no-store',
    'Content-Type': 'text/plain; charset=utf-8',
  }));
  res.end('CMS auth required');
  return false;
}

function historyName() {
  return `${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
}

async function backupContent() {
  const current = await fs.readFile(contentPath, 'utf8').catch(() => null);
  if (!current) return;
  await fs.mkdir(historyDir, { recursive: true });
  await fs.writeFile(path.join(historyDir, historyName()), current);
  const files = (await fs.readdir(historyDir).catch(() => [])).filter(name => name.endsWith('.json')).sort();
  for (const name of files.slice(0, Math.max(0, files.length - 30))) {
    await fs.unlink(path.join(historyDir, name)).catch(() => {});
  }
}

async function latestHistoryFile() {
  const files = (await fs.readdir(historyDir).catch(() => [])).filter(name => name.endsWith('.json')).sort();
  const latest = files.at(-1);
  return latest ? path.join(historyDir, latest) : null;
}

function safeHistoryId(id) {
  const name = path.basename(String(id || ''));
  if (!/^[0-9TZa-zA-Z._-]+\.json$/.test(name)) return null;
  return name;
}

async function readHistoryItems() {
  const files = (await fs.readdir(historyDir).catch(() => [])).filter(name => name.endsWith('.json')).sort().reverse();
  const items = [];
  for (const name of files.slice(0, 50)) {
    const filePath = path.join(historyDir, name);
    const stat = await fs.stat(filePath).catch(() => null);
    let updatedAt = null;
    let itemCount = 0;
    try {
      const json = JSON.parse(await fs.readFile(filePath, 'utf8'));
      updatedAt = json.updatedAt || null;
      itemCount = Object.keys(json.items || {}).length;
    } catch {}
    items.push({
      id: name,
      savedAt: stat?.mtime?.toISOString?.() || null,
      updatedAt,
      itemCount,
      size: stat?.size || 0,
    });
  }
  return items;
}

function safeFileName(name) {
  const ext = path.extname(name || '').toLowerCase().replace(/[^.\w-]/g, '');
  const base = path.basename(name || 'image', ext).toLowerCase().replace(/[^a-z0-9а-яё_-]+/giu, '-').replace(/^-+|-+$/g, '').slice(0, 60) || 'image';
  return `${Date.now()}-${base}${ext || '.png'}`;
}

const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent((req.url || '/').split('?')[0]);
    const isAdminRoute = pathname === '/admin' || pathname === '/admin/';
    const isProtectedCmsRoute = pathname === '/api/cms/session' || pathname === '/api/cms/history' || pathname === '/api/cms/undo' || pathname === '/api/cms/restore' || (pathname.startsWith('/api/cms/') && req.method !== 'GET');
    if ((isAdminRoute || isProtectedCmsRoute) && !requireAuth(req, res)) return;

    if (req.method === 'GET' && pathname === '/api/cms/session') {
      sendJson(res, 200, { ok: true, user: cmsUser, authEnabled, devOpen: allowLocalWithoutPassword });
      return;
    }

    if (req.method === 'GET' && pathname === '/api/cms/history') {
      sendJson(res, 200, { ok: true, items: await readHistoryItems() });
      return;
    }

    if (req.method === 'POST' && pathname === '/api/cms/undo') {
      const latest = await latestHistoryFile();
      if (!latest) {
        sendJson(res, 409, { ok: false, error: 'no_history' });
        return;
      }
      const previous = await fs.readFile(latest, 'utf8');
      await fs.writeFile(contentPath, previous);
      await fs.unlink(latest).catch(() => {});
      sendJson(res, 200, { ok: true });
      return;
    }

    if (req.method === 'POST' && pathname === '/api/cms/restore') {
      const body = JSON.parse(await readBody(req));
      const id = safeHistoryId(body.id);
      if (!id) {
        sendJson(res, 400, { ok: false, error: 'bad_history_id' });
        return;
      }
      const filePath = path.join(historyDir, id);
      const previous = await fs.readFile(filePath, 'utf8').catch(() => null);
      if (!previous) {
        sendJson(res, 404, { ok: false, error: 'history_not_found' });
        return;
      }
      await backupContent();
      await fs.writeFile(contentPath, previous);
      sendJson(res, 200, { ok: true, restored: id });
      return;
    }

    if (req.method === 'GET' && pathname === '/api/cms/content') {
      const data = await fs.readFile(contentPath, 'utf8').catch(() => '{"version":1,"items":{}}');
      res.writeHead(200, responseHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }));
      res.end(data);
      return;
    }
    if (req.method === 'POST' && pathname === '/api/cms/content') {
      const json = JSON.parse(await readBody(req));
      const safe = {
        version: 1,
        updatedAt: new Date().toISOString(),
        items: json.items && typeof json.items === 'object' ? json.items : {},
      };
      await fs.mkdir(path.dirname(contentPath), { recursive: true });
      await backupContent();
      await fs.writeFile(contentPath, JSON.stringify(safe, null, 2) + '\n');
      sendJson(res, 200, { ok: true });
      return;
    }
    if (req.method === 'POST' && pathname === '/api/cms/upload') {
      const json = JSON.parse(await readBody(req));
      const match = String(json.dataUrl || '').match(/^data:(image\/(?:png|jpe?g|webp|svg\+xml|avif));base64,(.+)$/);
      if (!match) throw Object.assign(new Error('Bad image'), { status: 400 });
      const filename = safeFileName(json.filename || 'image.png');
      await fs.mkdir(uploadsDir, { recursive: true });
      await fs.writeFile(path.join(uploadsDir, filename), Buffer.from(match[2], 'base64'));
      sendJson(res, 200, { ok: true, path: `/uploads/${filename}` });
      return;
    }
    if (req.method === 'POST' && pathname === '/api/orders') {
      req.resume();
      sendJson(res, 200, { ok: true, id: 1, telegram_status: 'local-demo' });
      return;
    }
    if (req.method === 'GET' && pathname === '/api/orders/health') {
      sendJson(res, 200, { ok: true, orders: 0 });
      return;
    }
    let filePath = safePath(req.url || '/');
    if (!filePath) throw Object.assign(new Error('Forbidden'), { status: 403 });
    const stat = await fs.stat(filePath).catch(() => null);
    if (stat?.isDirectory()) filePath = path.join(filePath, 'index.html');
    const data = await fs.readFile(filePath);
    const extension = path.extname(filePath).toLowerCase();
    const cacheControl = extension === '.html' ? 'no-cache' : 'public, max-age=604800, stale-while-revalidate=86400';
    res.writeHead(200, responseHeaders({
      'Content-Type': mime.get(extension) || 'application/octet-stream',
      'Cache-Control': cacheControl,
    }));
    res.end(data);
  } catch (error) {
    res.writeHead(error.status || 404, responseHeaders({ 'Content-Type': 'text/plain; charset=utf-8' }));
    res.end(error.status === 403 ? 'Forbidden' : 'Not found');
  }
});

server.listen(port, host, () => {
  console.log(`Site:  http://${host}:${port}/`);
  console.log(`Admin: http://${host}:${port}/admin`);
  console.log(authEnabled ? `Auth:  ${cmsUser} / CMS_PASSWORD` : 'Auth:  local dev open (set CMS_PASSWORD to protect)');
});
