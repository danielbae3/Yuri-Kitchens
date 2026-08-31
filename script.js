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

const materialCategories = [
  {
    id: "facades",
    label: "Фасады",
    items: [
      {
        id: "film",
        name: "МДФ в плёнке",
        image: "assets/material-facade-film.webp",
        alt: "Кухня с матовыми фасадами МДФ в плёнке",
        description: "Практичный вариант с большим выбором цветов и фактур.",
        when: "Когда нужен современный внешний вид в разумном бюджете.",
        budget: "Часто позволяет не переходить к более дорогой окраске.",
      },
      {
        id: "ldsp",
        name: "ЛДСП",
        image: "assets/material-facade-ldsp.webp",
        alt: "Кухня с фасадами ЛДСП под светлое дерево",
        description: "Доступный материал с большим выбором древесных и однотонных декоров.",
        when: "Когда важны практичность и рациональная стоимость.",
        budget: "Один из наиболее доступных вариантов фасадов.",
      },
      {
        id: "plastic",
        name: "Пластик",
        image: "assets/material-facade-plastic.webp",
        alt: "Кухня с гладкими пластиковыми фасадами",
        description: "Износостойкое покрытие с современными цветами и фактурами.",
        when: "Когда кухня будет активно использоваться каждый день.",
        budget: "Стоит сравнить с МДФ в плёнке под конкретный проект.",
      },
      {
        id: "painted",
        name: "Крашеные",
        image: "assets/material-facade-painted.webp",
        alt: "Кухня с ровными крашеными матовыми фасадами",
        description: "Подходят для проектов, где особенно важен определённый цвет и поверхность.",
        when: "Когда нужен конкретный оттенок или визуальный эффект.",
        budget: "Обычно дороже готовых декоративных покрытий.",
      },
    ],
  },
  {
    id: "countertops",
    label: "Столешницы",
    items: [
      {
        id: "hpl",
        name: "HPL / пластик",
        image: "assets/material-countertop-hpl.webp",
        alt: "Кухонная столешница HPL под светлый камень",
        description: "Практичная рабочая поверхность с большим выбором декоров.",
        when: "Когда нужна функциональная столешница без лишней переплаты.",
        budget: "Можно подобрать варианты под камень или дерево дешевле искусственного камня.",
      },
      {
        id: "stone",
        name: "Искусственный камень",
        image: "assets/material-countertop-stone.webp",
        alt: "Светлая столешница из искусственного камня",
        description: "Выразительное решение для проектов, где важна именно каменная поверхность.",
        when: "Когда внешний вид и свойства материала оправдывают более высокий бюджет.",
        budget: "Перед выбором стоит сравнить с качественными вариантами HPL.",
      },
    ],
  },
];

const materialState = {
  activeCategory: "facades",
  activeMaterial: "film",
};

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
  figure.setAttribute("role", "group");
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

function initReviewScroller() {
  const grid = qs(".review-grid");
  const dots = qs("[data-review-dots]");
  const cards = qsa(".review-card");
  if (!grid || !dots || cards.length < 2) return;

  let reviewTicking = false;

  const setActiveDot = () => {
    const gridLeft = grid.getBoundingClientRect().left;
    const activeIndex = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - gridLeft);
        return distance < closest.distance ? { distance, index } : closest;
      },
      { distance: Infinity, index: 0 }
    ).index;

    qsa(".review-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === activeIndex);
      dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
    });
  };

  dots.innerHTML = "";
  cards.forEach((card, index) => {
    const dot = document.createElement("button");
    dot.className = "review-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Показать отзыв ${index + 1}`);
    dot.addEventListener("click", () => {
      grid.scrollTo({
        left: card.offsetLeft - grid.offsetLeft,
        behavior: "smooth",
      });
    });
    dots.append(dot);
  });

  grid.addEventListener(
    "scroll",
    () => {
      if (reviewTicking) return;
      reviewTicking = true;
      requestAnimationFrame(() => {
        setActiveDot();
        reviewTicking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", setActiveDot);
  setActiveDot();
}

function initProcessScroller() {
  const scroller = qs(".steps");
  const dots = qs("[data-process-dots]");
  const cards = qsa(".steps article");
  if (!scroller || !dots || cards.length < 2) return;

  let ticking = false;

  const setActiveDot = () => {
    const scrollerLeft = scroller.getBoundingClientRect().left;
    const activeIndex = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(card.getBoundingClientRect().left - scrollerLeft);
        return distance < closest.distance ? { distance, index } : closest;
      },
      { distance: Infinity, index: 0 }
    ).index;

    qsa(".process-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === activeIndex);
      dot.setAttribute("aria-current", index === activeIndex ? "true" : "false");
    });
  };

  dots.innerHTML = "";
  cards.forEach((card, index) => {
    const dot = document.createElement("button");
    dot.className = "process-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Показать этап ${index + 1}`);
    dot.addEventListener("click", () => {
      scroller.scrollTo({
        left: card.offsetLeft - scroller.offsetLeft,
        behavior: "smooth",
      });
    });
    dots.append(dot);
  });

  scroller.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setActiveDot();
        ticking = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", setActiveDot);
  setActiveDot();
}

function getActiveMaterial() {
  const category = materialCategories.find((item) => item.id === materialState.activeCategory) || materialCategories[0];
  const material = category.items.find((item) => item.id === materialState.activeMaterial) || category.items[0];
  return { category, material };
}

function renderMaterialTabs() {
  const root = qs("[data-materials]");
  if (!root) return;
  const categoryTabs = root.querySelector("[data-material-categories]");
  const materialTabs = root.querySelector("[data-material-tabs]");
  const { category } = getActiveMaterial();

  categoryTabs.innerHTML = materialCategories
    .map((item) => {
      const selected = item.id === materialState.activeCategory;
      return `<button class="tab ${selected ? "active" : ""}" id="material-category-${item.id}" type="button" role="tab" tabindex="${selected ? "0" : "-1"}" aria-selected="${selected}" aria-controls="materialsPanel" data-material-category="${item.id}">${item.label}</button>`;
    })
    .join("");

  materialTabs.innerHTML = category.items
    .map((item) => {
      const selected = item.id === materialState.activeMaterial;
      return `<button class="material-tab ${selected ? "active" : ""}" id="material-tab-${item.id}" type="button" role="tab" tabindex="${selected ? "0" : "-1"}" aria-selected="${selected}" aria-controls="materialsPanel" data-material-item="${item.id}">${item.name}</button>`;
    })
    .join("");
}

function renderMaterial() {
  const root = qs("[data-materials]");
  if (!root) return;
  const panel = root.querySelector("[data-material-panel]");
  const image = root.querySelector("[data-material-image]");
  const title = root.querySelector("[data-material-title]");
  const text = root.querySelector("[data-material-text]");
  const when = root.querySelector("[data-material-when]");
  const budget = root.querySelector("[data-material-budget]");
  const categoryLabel = root.querySelector("[data-material-category-label]");
  const { category, material } = getActiveMaterial();

  panel.id = "materialsPanel";
  panel.setAttribute("aria-labelledby", `material-tab-${material.id}`);
  panel.classList.add("is-changing");

  window.setTimeout(() => {
    image.src = material.image;
    image.alt = material.alt;
    title.textContent = material.name;
    text.textContent = material.description;
    when.textContent = material.when;
    budget.textContent = material.budget;
    categoryLabel.textContent = category.label;
    panel.classList.remove("is-changing");
  }, 120);
}

function initMaterials() {
  const root = qs("[data-materials]");
  if (!root) return;

  renderMaterialTabs();
  renderMaterial();

  root.addEventListener("click", (event) => {
    const categoryTab = event.target.closest("[data-material-category]");
    if (categoryTab) {
      const nextCategory = materialCategories.find((item) => item.id === categoryTab.dataset.materialCategory);
      if (!nextCategory || nextCategory.id === materialState.activeCategory) return;
      materialState.activeCategory = nextCategory.id;
      materialState.activeMaterial = nextCategory.items[0].id;
      renderMaterialTabs();
      renderMaterial();
      return;
    }

    const materialTab = event.target.closest("[data-material-item]");
    if (!materialTab || materialTab.dataset.materialItem === materialState.activeMaterial) return;
    materialState.activeMaterial = materialTab.dataset.materialItem;
    renderMaterialTabs();
    renderMaterial();
  });

  root.addEventListener("keydown", (event) => {
    if (!event.target.matches('[role="tab"]') || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    const tablist = event.target.closest('[role="tablist"]');
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    if (!tabs.length) return;
    event.preventDefault();
    const current = tabs.indexOf(event.target);
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (current + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    tabs[next].click();
  });
}

const quizSteps = [
  {
    key: "type",
    kind: "image",
    title: "Какой тип кухни интересует?",
    note: "Выберите ближайший вариант планировки. Если точной идеи нет, поможем подобрать.",
    image: "assets/quiz-types.webp",
    options: [
      { value: "linear", label: "Прямая", position: "0% 50%" },
      { value: "corner", label: "Угловая", position: "25% 50%" },
      { value: "uShape", label: "П-образная", position: "50% 50%" },
      { value: "island", label: "С островом", position: "75% 50%" },
      { value: "unknown", label: "Не знаю", position: "100% 50%" },
    ],
  },
  {
    key: "style",
    kind: "image",
    title: "В каком стиле вы хотите кухню?",
    note: "Это поможет точнее подобрать фасады, фурнитуру и оттенки.",
    image: "assets/quiz-styles.webp",
    options: [
      { value: "classic", label: "Классика", position: "0% 50%" },
      { value: "modern", label: "Модерн", position: "25% 50%" },
      { value: "minimal", label: "Минимализм", position: "50% 50%" },
      { value: "scandi", label: "Скандинавский", position: "75% 50%" },
      { value: "unknown", label: "Не знаю, нужна помощь", position: "100% 50%" },
    ],
  },
  {
    key: "term",
    kind: "radio",
    title: "Когда планируете установить кухню?",
    options: [
      { value: "asap", label: "Как можно быстрее" },
      { value: "oneThree", label: "В течение 1–3 месяцев" },
      { value: "fourSix", label: "В течение 4–6 месяцев" },
      { value: "research", label: "Пока присматриваюсь, узнаю цены" },
    ],
  },
  {
    key: "budget",
    kind: "radio",
    title: "Какой ориентировочный бюджет вы закладываете?",
    options: [
      { value: "100-250", label: "От 100 тыс. до 250 тыс." },
      { value: "250-400", label: "От 250 тыс. до 400 тыс." },
      { value: "400-600", label: "От 400 тыс. до 600 тыс." },
      { value: "600+", label: "От 600 тыс. и выше" },
    ],
  },
  {
    key: "contact",
    kind: "contact",
    title: "Куда прислать результат?",
    note: "Оставьте телефон, и мы свяжемся удобным способом для уточнения деталей.",
  },
];

const quizInstances = [];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function initQuizScroller(root) {
  const wrap = root.querySelector("[data-quiz-scroll-wrap]");
  const scroller = root.querySelector("[data-quiz-options]");
  if (!wrap || !scroller) return;

  const updateState = () => {
    const maxScroll = scroller.scrollWidth - scroller.clientWidth - 2;
    wrap.classList.toggle("can-scroll-prev", scroller.scrollLeft > 8);
    wrap.classList.toggle("can-scroll-next", scroller.scrollLeft < maxScroll);
  };

  wrap.querySelectorAll("[data-quiz-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.dataset.quizScroll === "prev" ? -1 : 1;
      const firstOption = scroller.querySelector(".quiz-option");
      const step = firstOption ? firstOption.getBoundingClientRect().width + 12 : scroller.clientWidth * 0.7;
      scroller.scrollBy({ left: direction * step, behavior: "smooth" });
    });
  });

  scroller.addEventListener("scroll", () => requestAnimationFrame(updateState), { passive: true });
  scroller.scrollTo({ left: 0 });
  window.setTimeout(updateState, 0);
}

function createQuiz(root, instanceIndex) {
  const state = {
    index: 0,
    locked: false,
    submitted: false,
    answers: {},
    contact: {
      phone: "",
      method: "MAX",
      comment: "",
    },
  };
  const titleId = root.classList.contains("modal-quiz-card") ? "requestQuizTitle" : "quizTitle";
  const formId = `quizContactForm${instanceIndex + 1}`;

  function render() {
    const body = root.querySelector("[data-quiz-body]");
    const stepLabel = root.querySelector("[data-quiz-step]");
    const progress = root.querySelector("[data-quiz-progress]");
    const back = root.querySelector("[data-quiz-back]");
    const next = root.querySelector("[data-quiz-next]");
    const footer = root.querySelector(".quiz-footer");
    const footerText = root.querySelector(".quiz-footer p");
    if (!body || !stepLabel || !progress || !back || !next || !footer || !footerText) return;

    const step = quizSteps[state.index];
    const isFirstStep = state.index === 0;
    const isContactStep = step.kind === "contact";
    const hasAnswer = !isContactStep && Boolean(state.answers[step.key]);
    stepLabel.textContent = `Шаг ${state.index + 1} / ${quizSteps.length}`;
    progress.style.width = `${((state.index + 1) / quizSteps.length) * 100}%`;
    back.disabled = state.submitted || isFirstStep;
    back.hidden = false;
    next.disabled = state.submitted ? true : isContactStep ? false : !hasAnswer;
    next.textContent = isContactStep ? "Отправить заявку" : "Далее";
    next.type = isContactStep ? "submit" : "button";
    next.classList.toggle("is-hidden", false);
    next.classList.toggle("is-contact-submit", isContactStep);
    if (isContactStep) {
      next.setAttribute("form", formId);
    } else {
      next.removeAttribute("form");
    }
    root.classList.toggle("is-contact-step", isContactStep);
    body.classList.toggle("is-options-step", !isContactStep);
    footer.classList.toggle("is-contact-step", isContactStep);
    footer.hidden = false;
    footerText.textContent =
      isContactStep
        ? "Заполните телефон, чтобы отправить заявку."
        : hasAnswer
        ? "Ответ сохранён. Можно изменить выбор или продолжить."
        : "Выберите вариант, и квиз перейдет дальше автоматически.";

    const note = step.note ? `<p>${step.note}</p>` : "";
    let content = `<div class="quiz-question"><h2 id="${titleId}">${step.title}</h2>${note}</div>`;

    if (step.kind === "image") {
      const options = step.options
        .map(
          (option, index) => `
            <button class="quiz-option ${state.answers[step.key] === option.label ? "selected" : ""}" type="button" data-quiz-option="${option.value}" style="--i: ${index}; --quiz-image: url('${step.image}'); --quiz-pos: ${option.position};">
              <span class="quiz-option-media" aria-hidden="true"></span>
              <strong>${option.label}</strong>
            </button>`
        )
        .join("");
      content += `
        <div class="quiz-scroll-wrap" data-quiz-scroll-wrap>
          <button class="quiz-scroll-hint prev" type="button" aria-label="Показать предыдущие варианты" data-quiz-scroll="prev">
            <span aria-hidden="true">‹</span>
          </button>
          <div class="quiz-options image" data-quiz-options>${options}</div>
          <button class="quiz-scroll-hint next" type="button" aria-label="Показать следующие варианты" data-quiz-scroll="next">
            <span aria-hidden="true">›</span>
          </button>
        </div>`;
    }

    if (step.kind === "radio") {
      const options = step.options
        .map(
          (option, index) => `
            <button class="quiz-option ${state.answers[step.key] === option.label ? "selected" : ""}" type="button" data-quiz-option="${option.value}" style="--i: ${index};">
              <span class="quiz-radio"><strong>${option.label}</strong></span>
            </button>`
        )
        .join("");
      content += `<div class="quiz-options radio">${options}</div>`;
    }

    if (step.kind === "contact") {
      content += `
        <form class="quiz-contact ${state.submitted ? "is-success" : ""}" id="${formId}" data-quiz-contact novalidate>
          <div class="quiz-contact-row">
            <label class="quiz-contact-field">
              <span>Телефон *</span>
              <input name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="18" data-phone-mask placeholder="+7 (___) ___-__-__" value="${escapeHtml(state.contact.phone)}" required />
            </label>
            <fieldset class="quiz-contact-method">
              <legend>Как связаться?</legend>
              <div class="quiz-contact-methods">
                <button class="quiz-option ${state.contact.method === "MAX" ? "selected" : ""}" type="button" data-quiz-method="MAX" aria-pressed="${state.contact.method === "MAX"}">MAX</button>
                <button class="quiz-option ${state.contact.method === "Звонок" ? "selected" : ""}" type="button" data-quiz-method="Звонок" aria-pressed="${state.contact.method === "Звонок"}">Звонок</button>
              </div>
            </fieldset>
          </div>
          <label class="quiz-contact-field">
            <span>Комментарий <small>необязательно</small></span>
            <textarea name="comment" autocomplete="off" placeholder="Размеры, пожелания, удобное время">${escapeHtml(state.contact.comment)}</textarea>
          </label>
          <p class="quiz-error" data-quiz-error aria-live="polite"></p>
          <p class="quiz-success ${state.submitted ? "visible" : ""}" data-quiz-success aria-live="polite">Спасибо, заявка принята. Мы свяжемся с вами для уточнения расчета.</p>
        </form>`;
    }

    body.innerHTML = content;
    initPhoneMasks(body);
    initQuizScroller(root);
  }

  function goToStep(index) {
    const body = root.querySelector("[data-quiz-body]");
    state.locked = true;
    state.index = Math.max(0, Math.min(index, quizSteps.length - 1));
    if (!body) {
      render();
      state.locked = false;
      return;
    }
    body.classList.add("is-switching");
    window.setTimeout(() => {
      render();
      body.classList.remove("is-switching");
      state.locked = false;
    }, 160);
  }

  function reset() {
    if (state.submitted) return;
    state.index = 0;
    state.locked = false;
    state.answers = {};
    state.contact = {
      phone: "",
      method: "MAX",
      comment: "",
    };
    render();
  }

  const body = root.querySelector("[data-quiz-body]");
  const back = root.querySelector("[data-quiz-back]");
  const next = root.querySelector("[data-quiz-next]");
  if (!body || !back || !next) return null;

  render();

  back.addEventListener("click", () => {
    if (!state.locked) goToStep(state.index - 1);
  });

  next.addEventListener("click", () => {
    const step = quizSteps[state.index];
    if (!state.locked && step.kind !== "contact" && state.answers[step.key]) {
      goToStep(state.index + 1);
    }
  });

  body.addEventListener("click", (event) => {
    if (state.locked || state.submitted) return;
    const method = event.target.closest("[data-quiz-method]");
    if (method && root.contains(method)) {
      state.contact.method = method.dataset.quizMethod;
      method.closest(".quiz-contact-methods").querySelectorAll("[data-quiz-method]").forEach((item) => {
        const selected = item === method;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      return;
    }

    const option = event.target.closest("[data-quiz-option]");
    if (!option || !root.contains(option)) return;
    const step = quizSteps[state.index];
    const selected = step.options?.find((item) => item.value === option.dataset.quizOption);
    if (!selected) return;

    state.answers[step.key] = selected.label;
    root.querySelectorAll(".quiz-option").forEach((item) => item.classList.remove("selected"));
    option.classList.add("selected");
    state.locked = true;
    window.setTimeout(() => goToStep(state.index + 1), 190);
  });

  body.addEventListener("input", (event) => {
    if (event.target.name === "phone") state.contact.phone = event.target.value;
    if (event.target.name === "comment") state.contact.comment = event.target.value;
  });

  body.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-quiz-contact]");
    if (!form || !root.contains(form)) return;
    event.preventDefault();
    const error = form.querySelector("[data-quiz-error]");
    const success = form.querySelector("[data-quiz-success]");
    state.contact.phone = form.elements.phone.value.trim();
    state.contact.comment = form.elements.comment.value.trim();

    if (!validatePhone(state.contact.phone)) {
      error.textContent = "Введите номер полностью: +7 (___) ___-__-__.";
      success.classList.remove("visible");
      form.elements.phone.setAttribute("aria-invalid", "true");
      form.elements.phone.focus();
      return;
    }

    error.textContent = "";
    form.elements.phone.removeAttribute("aria-invalid");
    form.classList.add("is-success");
    success.classList.add("visible");
    state.submitted = true;
    back.disabled = true;
    next.disabled = true;
  });

  return { root, reset };
}

function initQuiz() {
  document.querySelectorAll("[data-quiz-root]").forEach((root, index) => {
    const instance = createQuiz(root, index);
    if (instance) quizInstances.push(instance);
  });
}

function setModalState(modal, open) {
  if (!modal) return;
  modal.classList.toggle("open", open);
  modal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", qsa(".modal.open").length > 0);
}

function openRequestModal() {
  const modal = qs("#requestModal");
  const modalQuiz = quizInstances.find((instance) => instance.root.closest("#requestModal"));
  if (modalQuiz?.root.dataset.quizResetOnOpen !== undefined) modalQuiz.reset();
  setModalState(modal, true);
  setTimeout(() => modalQuiz?.root.querySelector(".quiz-option, input, textarea, [data-quiz-next]:not([disabled])")?.focus(), 80);
}

function getRussianPhoneDigits(value) {
  let digits = String(value || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (!digits.startsWith("7")) digits = `7${digits}`;
  return digits.slice(0, 11);
}

function formatRussianPhone(value) {
  const digits = getRussianPhoneDigits(value);
  if (!digits) return "";

  const local = digits.slice(1);
  let formatted = "+7";
  if (local.length > 0) formatted += ` (${local.slice(0, 3)}`;
  if (local.length >= 3) formatted += ")";
  if (local.length > 3) formatted += ` ${local.slice(3, 6)}`;
  if (local.length > 6) formatted += `-${local.slice(6, 8)}`;
  if (local.length > 8) formatted += `-${local.slice(8, 10)}`;
  return formatted;
}

function validatePhone(value) {
  return /^7\d{10}$/.test(getRussianPhoneDigits(value));
}

function initPhoneMasks(root = document) {
  root.querySelectorAll("[data-phone-mask]").forEach((input) => {
    if (input.dataset.phoneMaskReady === "true") return;
    input.dataset.phoneMaskReady = "true";

    input.addEventListener("focus", () => {
      if (!input.value) {
        input.value = "+7 (";
        input.setSelectionRange(input.value.length, input.value.length);
      }
    });

    input.addEventListener("input", () => {
      input.value = formatRussianPhone(input.value);
      if (validatePhone(input.value)) {
        input.removeAttribute("aria-invalid");
        const quizError = input.closest("[data-quiz-contact]")?.querySelector("[data-quiz-error]");
        if (quizError) quizError.textContent = "";
        const paramsError = input.closest("#paramsForm")?.querySelector("[data-params-error]");
        if (paramsError?.textContent.startsWith("Введите номер полностью")) paramsError.style.display = "none";
      }
      requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
    });

    input.addEventListener("blur", () => {
      if (getRussianPhoneDigits(input.value) === "7") {
        input.value = "";
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });
  });
}

const menuToggle = qs("[data-menu-toggle]");
const menuClose = qs("[data-menu-close]");
const navLinks = qsa(".nav a");

function setNavState(open) {
  document.body.classList.toggle("nav-open", open);
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
}

menuToggle?.addEventListener("click", () => {
  setNavState(!document.body.classList.contains("nav-open"));
});

menuClose?.addEventListener("click", () => setNavState(false));

navLinks.forEach((link) => {
  link.addEventListener("click", () => setNavState(false));
});

const calculatorConfig = {
  basePrice: 180000,
  minSize: 600,
  maxSize: 7000,
  shapes: {
    linear: { label: "прямая", multiplier: 1 },
    corner: { label: "угловая", multiplier: 1.18 },
    uShape: { label: "П-образная", multiplier: 1.35 },
  },
  fronts: {
    film: { label: "МДФ в плёнке", multiplier: 1 },
    plastic: { label: "МДФ в пластике", multiplier: 1.12 },
    paint: { label: "МДФ в эмали / RAL", multiplier: 1.28 },
  },
  countertops: {
    hpl: { label: "HPL / пластик", multiplier: 1 },
    stone: { label: "Искусственный камень", multiplier: 1.35 },
    quartz: { label: "Кварц", multiplier: 1.5 },
  },
  uppers: {
    standard: { label: "стандартные", multiplier: 1 },
    ceiling: { label: "до потолка", multiplier: 1.15 },
    none: { label: "без верхних шкафов", multiplier: 0.9 },
  },
  appliances: {
    yes: { label: "да", extra: 35000 },
    no: { label: "нет", extra: 0 },
  },
};

const calculatorShapeSides = {
  linear: ["a"],
  corner: ["a", "b"],
  uShape: ["a", "b", "c"],
};

const calculatorState = {
  shape: "linear",
  front: "film",
  countertop: "hpl",
  uppers: "standard",
  appliances: "yes",
  dimensions: {
    a: 3000,
    b: 1800,
    c: 2200,
  },
};

function formatPrice(value) {
  return new Intl.NumberFormat("ru-RU").format(value);
}

function clampCostSize(value) {
  const size = Number(value) || calculatorConfig.minSize;
  return Math.min(calculatorConfig.maxSize, Math.max(calculatorConfig.minSize, size));
}

function getActiveCalculatorSides() {
  return calculatorShapeSides[calculatorState.shape] || calculatorShapeSides.linear;
}

function getCalculatorDimensionsText() {
  const sides = getActiveCalculatorSides();
  const labels = sides.map((side) => side.toUpperCase()).join(" × ");
  const values = sides.map((side) => formatPrice(calculatorState.dimensions[side])).join(" × ");
  return `${labels}: ${values} мм`;
}

function getCalculatorTotalLength() {
  return getActiveCalculatorSides().reduce((total, side) => total + calculatorState.dimensions[side], 0);
}

function getCalculatorSnapshot() {
  const shape = calculatorConfig.shapes[calculatorState.shape];
  const front = calculatorConfig.fronts[calculatorState.front];
  const countertop = calculatorConfig.countertops[calculatorState.countertop];
  const uppers = calculatorConfig.uppers[calculatorState.uppers];
  const appliances = calculatorConfig.appliances[calculatorState.appliances];
  const base = calculatorConfig.basePrice * (getCalculatorTotalLength() / 3000);
  const calculated = base * shape.multiplier * front.multiplier * countertop.multiplier * uppers.multiplier + appliances.extra;
  const rounded = Math.ceil(calculated / 5000) * 5000;
  const priceText = `от ${formatPrice(rounded)} ₽`;
  const rows = [
    ["Форма", shape.label],
    ["Размеры", getCalculatorDimensionsText()],
    ["Фасады", front.label],
    ["Столешница", countertop.label],
    ["Верхние шкафы", uppers.label],
    ["Встроенная техника", appliances.label],
    ["Ориентировочная стоимость", priceText],
  ];

  return { priceText, rows };
}

function initCostCalculator() {
  const calculator = qs("[data-calculator]");
  if (!calculator) return;

  const state = calculatorState;
  const dimensionInputs = calculator.querySelectorAll("[data-calc-dimension]");
  const sideFields = calculator.querySelectorAll("[data-calc-side-field]");
  const price = calculator.querySelector("[data-calc-price]");
  const summary = {
    shape: calculator.querySelector('[data-calc-summary="shape"]'),
    size: calculator.querySelector('[data-calc-summary="size"]'),
    front: calculator.querySelector('[data-calc-summary="front"]'),
    countertop: calculator.querySelector('[data-calc-summary="countertop"]'),
    uppers: calculator.querySelector('[data-calc-summary="uppers"]'),
    appliances: calculator.querySelector('[data-calc-summary="appliances"]'),
  };

  const update = () => {
    const snapshot = getCalculatorSnapshot();
    const summaryValues = Object.fromEntries(snapshot.rows);
    const activeSides = getActiveCalculatorSides();

    calculator.dataset.shape = state.shape;
    price.textContent = snapshot.priceText;
    summary.shape.textContent = summaryValues["Форма"];
    summary.size.textContent = summaryValues["Размеры"];
    summary.front.textContent = summaryValues["Фасады"];
    summary.countertop.textContent = summaryValues["Столешница"];
    summary.uppers.textContent = summaryValues["Верхние шкафы"];
    summary.appliances.textContent = summaryValues["Встроенная техника"];

    sideFields.forEach((field) => {
      const side = field.dataset.calcSideField;
      const isActive = activeSides.includes(side);
      const input = field.querySelector("[data-calc-dimension]");
      field.classList.toggle("is-hidden", !isActive);
      if (input) input.disabled = !isActive;
    });
  };

  calculator.querySelectorAll("[data-calc-group]").forEach((group) => {
    group.addEventListener("click", (event) => {
      const button = event.target.closest("[data-calc-value]");
      if (!button) return;
      state[group.dataset.calcGroup] = button.dataset.calcValue;
      group.querySelectorAll("[data-calc-value]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      update();
    });
  });

  calculator.querySelectorAll("[data-calc-select]").forEach((select) => {
    select.addEventListener("change", () => {
      state[select.dataset.calcSelect] = select.value;
      update();
    });
  });

  dimensionInputs.forEach((input) => {
    input.addEventListener("input", () => {
      state.dimensions[input.dataset.calcDimension] = clampCostSize(input.value);
      update();
    });

    input.addEventListener("change", () => {
      const side = input.dataset.calcDimension;
      state.dimensions[side] = clampCostSize(input.value);
      input.value = state.dimensions[side];
      update();
    });
  });

  update();
}

function setParamsMethod(form, method) {
  form.elements.method.value = method;
  form.querySelectorAll("[data-params-method]").forEach((button) => {
    const selected = button.dataset.paramsMethod === method;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function renderParamsSummary(form) {
  const snapshot = getCalculatorSnapshot();
  const list = form.querySelector("[data-params-summary]");
  const payload = form.querySelector("[data-params-payload]");
  const payloadText = snapshot.rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  if (list) {
    list.innerHTML = snapshot.rows.map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`).join("");
  }
  if (payload) payload.value = payloadText;
}

function resetParamsForm(form) {
  form.reset();
  form.classList.remove("is-success");
  form.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
  const error = form.querySelector("[data-params-error]");
  const success = form.querySelector("[data-params-success]");
  const submit = form.querySelector('button[type="submit"]');
  if (error) {
    error.textContent = "";
    error.style.display = "none";
  }
  if (success) success.style.display = "none";
  if (submit) submit.disabled = false;
  setParamsMethod(form, "MAX");
}

function openParamsModal() {
  const modal = qs("#paramsModal");
  const form = qs("#paramsForm");
  if (!modal || !form) return;
  resetParamsForm(form);
  renderParamsSummary(form);
  setModalState(modal, true);
  setTimeout(() => form.elements.name?.focus(), 80);
}

function initParamsForm() {
  const form = qs("#paramsForm");
  if (!form) return;

  form.querySelectorAll("[data-params-method]").forEach((button) => {
    button.addEventListener("click", () => {
      setParamsMethod(form, button.dataset.paramsMethod);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const error = form.querySelector("[data-params-error]");
    const success = form.querySelector("[data-params-success]");
    const submit = form.querySelector('button[type="submit"]');
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.trim();

    if (error) {
      error.style.display = "none";
      error.textContent = "";
    }
    if (success) success.style.display = "none";
    form.elements.name.removeAttribute("aria-invalid");
    form.elements.phone.removeAttribute("aria-invalid");

    if (!name) {
      if (error) {
        error.textContent = "Введите имя.";
        error.style.display = "block";
      }
      form.elements.name.setAttribute("aria-invalid", "true");
      form.elements.name.focus();
      return;
    }

    if (!validatePhone(phone)) {
      if (error) {
        error.textContent = "Введите номер полностью: +7 (___) ___-__-__.";
        error.style.display = "block";
      }
      form.elements.phone.setAttribute("aria-invalid", "true");
      form.elements.phone.focus();
      return;
    }

    renderParamsSummary(form);
    form.classList.add("is-success");
    if (success) success.style.display = "block";
    if (submit) submit.disabled = true;
  });
}

qsa("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", openRequestModal);
});

qsa("[data-open-params-modal]").forEach((button) => {
  button.addEventListener("click", openParamsModal);
});

qsa("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => setModalState(button.closest(".modal"), false));
});

const faqItems = qsa(".faq-item");

function setFaq(index) {
  faqItems.forEach((item, itemIndex) => {
    const isActive = itemIndex === index;
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    item.classList.toggle("active", isActive);
    button?.setAttribute("aria-expanded", String(isActive));
    if (answer) {
      answer.style.maxHeight = isActive ? `${answer.scrollHeight}px` : "0px";
    }
  });
}

qsa(".faq-question[data-faq]").forEach((button) => {
  button.addEventListener("click", () => {
    setFaq(Number(button.dataset.faq));
  });
});

window.addEventListener("resize", () => {
  qsa(".faq-item.active .faq-answer").forEach((answer) => {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavState(false);
    qsa(".modal.open").forEach((modal) => setModalState(modal, false));
  }
});

qsa('a[href=""]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});

function copyText(value) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.left = "-9999px";
  document.body.append(field);
  field.select();
  document.execCommand("copy");
  field.remove();
  return Promise.resolve();
}

qsa("[data-copy-phone]").forEach((button) => {
  button.addEventListener("click", async () => {
    const originalLabel = button.getAttribute("aria-label") || "Скопировать номер";
    try {
      await copyText(button.dataset.copyPhone);
      button.classList.add("copied");
      button.setAttribute("aria-label", "Скопировано");
      window.setTimeout(() => {
        button.classList.remove("copied");
        button.setAttribute("aria-label", originalLabel);
      }, 1400);
    } catch {
      button.setAttribute("aria-label", "Не удалось скопировать");
    }
  });
});

initKitchenCarousel();
initReviewScroller();
initProcessScroller();
initMaterials();
initCostCalculator();
initPhoneMasks();
initQuiz();
initParamsForm();
setFaq(0);
