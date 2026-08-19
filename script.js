const slides = [
  {
    title: "Классическая угловая кухня",
    tags: ["угловая", "12,4 м²", "рамочные фасады", "белый / дуб"],
    image: "assets/kitchen-project-01.webp",
    small: "assets/kitchen-project-01-sm.webp",
    alt: "Светлая угловая кухня с рамочными фасадами и деревянной столешницей",
    position: "center 52%",
    width: 1672,
  },
  {
    title: "Светлая кухня с пеналами",
    tags: ["угловая", "13 м²", "МДФ", "слоновая кость / дерево"],
    image: "assets/kitchen-project-02.webp",
    small: "assets/kitchen-project-02-sm.webp",
    alt: "Угловая кухня с высокими пеналами и встроенной черной техникой",
    position: "center 52%",
    width: 1672,
  },
  {
    title: "Кухня с деревянной стеновой панелью",
    tags: ["угловая", "10,8 м²", "рамочные фасады", "белый / натуральный дуб"],
    image: "assets/kitchen-project-03.webp",
    small: "assets/kitchen-project-03-sm.webp",
    alt: "Угловая кухня с белыми фасадами и деревянной стеновой панелью",
    position: "center 52%",
    width: 1672,
  },
  {
    title: "Современная кухня в теплых тонах",
    tags: ["угловая", "9,6 м²", "матовые фасады", "бежевый / дерево"],
    image: "assets/kitchen-project-04.webp",
    small: "assets/kitchen-project-04-sm.webp",
    alt: "Современная угловая кухня с матовыми фасадами и деревянным фартуком",
    position: "center 52%",
    width: 1672,
  },
  {
    title: "Кухня с акцентной плиткой",
    tags: ["угловая", "8,9 м²", "ЛДСП / МДФ", "капучино / дуб"],
    image: "assets/kitchen-project-05.webp",
    small: "assets/kitchen-project-05-sm.webp",
    alt: "Угловая кухня с деревянными нижними фасадами и акцентной плиткой",
    position: "48% 52%",
    width: 1448,
  },
  {
    title: "Компактная кухня с древесными фасадами",
    tags: ["прямая", "7,4 м²", "ЛДСП", "белый / дуб"],
    image: "assets/kitchen-project-06.webp",
    small: "assets/kitchen-project-06-sm.webp",
    alt: "Компактная прямая кухня с древесными верхними фасадами и белым низом",
    position: "center 52%",
    width: 1672,
  },
  {
    title: "Прямая кухня с встроенной техникой",
    tags: ["прямая", "8,2 м²", "матовые фасады", "теплый беж"],
    image: "assets/kitchen-project-07.webp",
    small: "assets/kitchen-project-07-sm.webp",
    alt: "Прямая кухня с бежевыми фасадами и встроенной стиральной машиной",
    position: "50% 52%",
    width: 1448,
  },
  {
    title: "Белая кухня с деревянной столешницей",
    tags: ["прямая", "9,1 м²", "гладкие фасады", "белый / дуб"],
    image: "assets/kitchen-project-08.webp",
    small: "assets/kitchen-project-08-sm.webp",
    alt: "Белая прямая кухня с деревянной столешницей и длинной рабочей зоной",
    position: "center 52%",
    width: 1672,
  },
  {
    title: "Графитовая угловая кухня",
    tags: ["угловая", "9,7 м²", "матовые фасады", "графит / камень"],
    image: "assets/kitchen-project-09.webp",
    small: "assets/kitchen-project-09-sm.webp",
    alt: "Угловая кухня с матовыми графитовыми фасадами и светлой столешницей",
    position: "48% 52%",
    width: 1448,
  },
];

const materialData = {
  fronts: {
    title: "МДФ в эмали",
    text: "Премиальное покрытие с гладкой матовой поверхностью. Устойчиво к влаге, подходит для минималистичных интерьеров.",
    image: "assets/material-facade.jpg",
    alt: "Матовая фасадная панель",
    colors: ["#f6f5f1", "#ddd9d3", "#aaa99c", "#263240", "#837b75", "#191919"],
  },
  countertops: {
    title: "Кварц и HPL compact",
    text: "Практичные поверхности для ежедневной нагрузки: не боятся влаги, легко очищаются и держат строгую геометрию кухни.",
    image: "assets/kitchen-01.png",
    alt: "Светлая столешница кухни",
    colors: ["#f2eee7", "#d5c9bb", "#b9b0a4", "#62665f", "#3d4144", "#1f2020"],
  },
  case: {
    title: "Корпус повышенной плотности",
    text: "Используем влагостойкие плиты и точную кромку, чтобы шкафы сохраняли форму при активной эксплуатации.",
    image: "assets/kitchen-02.png",
    alt: "Корпус кухни в светлом интерьере",
    colors: ["#ffffff", "#eee9df", "#c7beb2", "#a28d78", "#6b6259", "#303235"],
  },
  hardware: {
    title: "Фурнитура с плавным ходом",
    text: "Петли, направляющие и подъемные механизмы подбираются под вес фасадов и сценарий хранения.",
    image: "assets/kitchen-03.png",
    alt: "Фурнитура современной кухни",
    colors: ["#f9f9f7", "#d9d9d5", "#a6a5a0", "#707476", "#383d40", "#17191a"],
  },
};

const formatRub = (value) =>
  new Intl.NumberFormat("ru-RU", {
    maximumFractionDigits: 0,
  }).format(Math.round(value / 100) * 100) + " ₽";

let currentSlide = 0;
let carouselLocked = false;
let carouselTouchStart = 0;
let carouselTouchDelta = 0;

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => [...document.querySelectorAll(selector)];
const carousel = qs(".kitchen-carousel");
const carouselStage = qs("[data-carousel-stage]");
const carouselTrack = qs("[data-carousel-track]");
const carouselDots = qs("[data-carousel-dots]");

function createCarouselCard(slide, index) {
  const figure = document.createElement("figure");
  figure.className = "carousel-card";
  figure.setAttribute("aria-roledescription", "slide");
  figure.setAttribute("aria-label", `${index + 1} из ${slides.length}`);

  const image = document.createElement("img");
  image.src = slide.image;
  image.srcset = `${slide.small} 900w, ${slide.image} ${slide.width || 1680}w`;
  image.sizes = "(max-width: 560px) calc(100vw - 24px), (max-width: 820px) calc(100vw - 32px), min(100vw - 64px, 1180px)";
  image.alt = slide.alt;
  image.decoding = "async";
  image.loading = index === 0 ? "eager" : "lazy";
  image.fetchPriority = index === 0 ? "high" : "auto";
  image.style.objectPosition = slide.position || "center center";

  figure.append(image);
  return figure;
}

function renderCarouselStructure() {
  carouselTrack.innerHTML = "";
  carouselDots.innerHTML = "";

  slides.forEach((slide, index) => {
    carouselTrack.append(createCarouselCard(slide, index));

    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Показать проект ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    carouselDots.append(dot);
  });
}

function updateCarousel(animate = true) {
  if (!animate) {
    carouselTrack.style.transition = "none";
  }

  carouselTrack.style.transform = `translate3d(${-currentSlide * 100}%, 0, 0)`;

  qsa(".carousel-card").forEach((card, index) => {
    card.classList.toggle("is-active", index === currentSlide);
    card.setAttribute("aria-hidden", index === currentSlide ? "false" : "true");
  });

  qsa(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
    dot.setAttribute("aria-current", index === currentSlide ? "true" : "false");
  });

  const slide = slides[currentSlide];
  qs("[data-slide-title]").textContent = slide.title;
  const tags = qs("[data-slide-tags]");
  tags.innerHTML = "";
  slide.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.className = "slide-tag";
    item.textContent = tag;
    tags.append(item);
  });

  if (!animate) {
    requestAnimationFrame(() => {
      carouselTrack.style.transition = "";
    });
  }
}

function goToSlide(index) {
  if (carouselLocked) return;
  const nextSlide = (index + slides.length) % slides.length;
  if (nextSlide === currentSlide) return;

  carouselLocked = true;
  currentSlide = nextSlide;
  updateCarousel(true);

  const unlock = () => {
    carouselLocked = false;
    carouselTrack.removeEventListener("transitionend", unlock);
  };

  carouselTrack.addEventListener("transitionend", unlock, { once: true });
  window.setTimeout(unlock, 720);
}

function moveSlide(direction) {
  goToSlide(currentSlide + direction);
}

function initKitchenCarousel() {
  if (!carousel || !carouselTrack || !carouselDots || !carouselStage) return;

  renderCarouselStructure();
  updateCarousel(false);

  qs("[data-carousel-prev]")?.addEventListener("click", () => moveSlide(-1));
  qs("[data-carousel-next]")?.addEventListener("click", () => moveSlide(1));

  carouselStage.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".circle-btn")) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    carouselTouchStart = event.clientX;
    carouselTouchDelta = 0;
    carouselStage.setPointerCapture?.(event.pointerId);
  });

  carouselStage.addEventListener("pointermove", (event) => {
    if (!carouselTouchStart) return;
    carouselTouchDelta = event.clientX - carouselTouchStart;
  });

  carouselStage.addEventListener("pointerup", () => {
    if (Math.abs(carouselTouchDelta) > 52) {
      moveSlide(carouselTouchDelta < 0 ? 1 : -1);
    }
    carouselTouchStart = 0;
    carouselTouchDelta = 0;
  });

  carouselStage.addEventListener("pointercancel", () => {
    carouselTouchStart = 0;
    carouselTouchDelta = 0;
  });
}

function renderMaterial(key) {
  const material = materialData[key];
  qs("[data-material-title]").textContent = material.title;
  qs("[data-material-text]").textContent = material.text;
  qs("[data-material-image]").src = material.image;
  qs("[data-material-image]").alt = material.alt;
  const swatches = qs("[data-swatches]");
  swatches.innerHTML = "";
  material.colors.forEach((color) => {
    const item = document.createElement("span");
    item.style.background = color;
    swatches.append(item);
  });
}

const calcLabels = {
  type: {
    linear: "Линейная",
    corner: "Угловая",
    uShape: "П-образная",
    island: "С островом",
  },
  front: {
    mdf: "МДФ",
    enamel: "МДФ эмаль",
    veneer: "Шпон",
    solid: "Массив",
  },
  appliances: {
    yes: "Да",
    no: "Нет",
  },
};

const calcConfig = {
  type: {
    linear: 1,
    corner: 1.22,
    uShape: 1.48,
    island: 1.72,
  },
  front: {
    mdf: 0,
    enamel: 18500,
    veneer: 34000,
    solid: 52000,
  },
  countertop: {
    hpl: 0,
    quartz: 26000,
    stone: 36000,
  },
};

function calculateKitchen() {
  const form = qs("#kitchenCalc");
  const data = new FormData(form);
  const width = Number(data.get("width")) || 3000;
  const height = Number(data.get("height")) || 2500;
  const lengthMeters = Math.max(width / 1000, 1.6);
  const type = data.get("type");
  const front = data.get("front");
  const countertop = data.get("countertop");
  const appliances = data.get("appliances");
  const softClose = data.get("softClose");

  const heightExtra = Math.max(height - 2500, 0) * 18;
  const base = lengthMeters * 24000 * calcConfig.type[type];
  const total =
    base +
    heightExtra +
    calcConfig.front[front] +
    calcConfig.countertop[countertop] +
    (appliances === "yes" ? 6500 : 0) +
    (softClose === "yes" ? 3100 : 0);

  qs("[data-result-type]").textContent = calcLabels.type[type];
  qs("[data-result-size]").textContent = `${width} × ${height} мм`;
  qs("[data-result-front]").textContent = calcLabels.front[front];
  qs("[data-result-appliances]").textContent = calcLabels.appliances[appliances];
  qs("[data-result-price]").textContent = formatRub(total);
}

function setModalState(modal, open) {
  modal.classList.toggle("open", open);
  modal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", qsa(".modal.open").length > 0);
}

function openRequestModal() {
  const width = qs('input[name="width"]')?.value || "";
  const height = qs('input[name="height"]')?.value || "";
  const sizeInput = qs('#requestForm input[name="size"]');
  if (width && height && sizeInput && !sizeInput.value) {
    sizeInput.value = `${width} × ${height} мм`;
  }
  setModalState(qs("#requestModal"), true);
  setTimeout(() => qs('#requestForm input[name="name"]').focus(), 80);
}

function validatePhone(value) {
  return value.replace(/\D/g, "").length >= 10;
}

qsa("[data-material]").forEach((tab) => {
  tab.addEventListener("click", () => {
    qsa("[data-material]").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    renderMaterial(tab.dataset.material);
  });
});

qs("#kitchenCalc").addEventListener("input", calculateKitchen);
qs("#kitchenCalc").addEventListener("change", calculateKitchen);

qsa("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", openRequestModal);
});

qsa("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => setModalState(qs("#requestModal"), false));
});

qsa("[data-open-reviews]").forEach((button) => {
  button.addEventListener("click", () => setModalState(qs("#reviewsModal"), true));
});

qsa("[data-close-reviews]").forEach((button) => {
  button.addEventListener("click", () => setModalState(qs("#reviewsModal"), false));
});

const faqItems = qsa(".faq-item");
const faqPanel = qs(".faq-answer-panel");
const faqTitle = qs("[data-faq-title]");
const faqText = qs("[data-faq-text]");
const faqKicker = qs("[data-faq-kicker]");
const faqData = faqItems.map((item) => ({
  title: item.querySelector(".faq-question span").textContent,
  text: item.querySelector(".faq-mobile-answer p").textContent,
}));

function setFaq(index) {
  faqItems.forEach((item, itemIndex) => {
    const isActive = itemIndex === index;
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-mobile-answer");

    item.classList.toggle("active", isActive);
    button.setAttribute("aria-expanded", String(isActive));
    answer.style.maxHeight = isActive ? `${answer.scrollHeight}px` : "0px";
  });

  faqPanel.classList.remove("is-changing");
  faqTitle.textContent = faqData[index].title;
  faqText.textContent = faqData[index].text;
  faqKicker.textContent = `${String(index + 1).padStart(2, "0")} / ${String(faqData.length).padStart(2, "0")}`;
  requestAnimationFrame(() => faqPanel.classList.add("is-changing"));
}

qsa(".faq-question[data-faq]").forEach((button) => {
  button.addEventListener("click", () => {
    setFaq(Number(button.dataset.faq));
  });
});

window.addEventListener("resize", () => {
  qsa(".faq-item.active .faq-mobile-answer").forEach((answer) => {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    qsa(".modal.open").forEach((modal) => setModalState(modal, false));
  }
});

qsa('a[href=""]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

qs("#requestForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const error = qs("[data-form-error]");
  const success = qs("[data-form-success]");
  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();

  error.style.display = "none";
  success.style.display = "none";

  if (!name) {
    error.textContent = "Укажите имя, чтобы мы знали, как к вам обращаться.";
    error.style.display = "block";
    form.elements.name.focus();
    return;
  }

  if (!validatePhone(phone)) {
    error.textContent = "Укажите телефон в корректном формате.";
    error.style.display = "block";
    form.elements.phone.focus();
    return;
  }

  success.style.display = "block";
  form.reset();
});

initKitchenCarousel();
renderMaterial("fronts");
calculateKitchen();
setFaq(0);
