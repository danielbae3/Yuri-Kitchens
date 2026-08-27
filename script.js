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

let quizIndex = 0;
let quizLocked = false;
const quizAnswers = {};
const quizContact = {
  phone: "",
  method: "MAX",
  comment: "",
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

function renderQuiz() {
  const body = qs("[data-quiz-body]");
  const stepLabel = qs("[data-quiz-step]");
  const progress = qs("[data-quiz-progress]");
  const back = qs("[data-quiz-back]");
  const next = qs("[data-quiz-next]");
  const quizCard = qs(".quiz-card");
  const footer = qs(".quiz-footer");
  const footerText = qs(".quiz-footer p");
  if (!body || !stepLabel || !progress || !back || !next || !quizCard || !footer || !footerText) return;

  const step = quizSteps[quizIndex];
  const isFirstStep = quizIndex === 0;
  const isContactStep = step.kind === "contact";
  const hasAnswer = !isContactStep && Boolean(quizAnswers[step.key]);
  stepLabel.textContent = `Шаг ${quizIndex + 1} / ${quizSteps.length}`;
  progress.style.width = `${((quizIndex + 1) / quizSteps.length) * 100}%`;
  back.disabled = isFirstStep;
  back.hidden = false;
  next.disabled = isContactStep ? false : !hasAnswer;
  next.textContent = isContactStep ? "Получить результат" : "Далее";
  next.type = isContactStep ? "submit" : "button";
  next.classList.toggle("is-hidden", false);
  next.classList.toggle("is-contact-submit", isContactStep);
  if (isContactStep) {
    next.setAttribute("form", "quizContactForm");
  } else {
    next.removeAttribute("form");
  }
  quizCard.classList.toggle("is-contact-step", isContactStep);
  body.classList.toggle("is-options-step", !isContactStep);
  footer.classList.toggle("is-contact-step", isContactStep);
  footer.hidden = false;
  footerText.textContent =
    isContactStep
      ? "Заполните телефон, чтобы получить результат под вашу кухню."
      : hasAnswer
      ? "Ответ сохранён. Можно изменить выбор или продолжить."
      : "Выберите вариант, и квиз перейдет дальше автоматически.";

  const note = step.note ? `<p>${step.note}</p>` : "";
  let content = `<div class="quiz-question"><h2 id="quizTitle">${step.title}</h2>${note}</div>`;

  if (step.kind === "image") {
    const options = step.options
      .map(
        (option, index) => `
          <button class="quiz-option ${quizAnswers[step.key] === option.label ? "selected" : ""}" type="button" data-quiz-option="${option.value}" style="--i: ${index}; --quiz-image: url('${step.image}'); --quiz-pos: ${option.position};">
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
          <button class="quiz-option ${quizAnswers[step.key] === option.label ? "selected" : ""}" type="button" data-quiz-option="${option.value}" style="--i: ${index};">
            <span class="quiz-radio"><strong>${option.label}</strong></span>
          </button>`
      )
      .join("");
    content += `<div class="quiz-options radio">${options}</div>`;
  }

  if (step.kind === "contact") {
    content += `
      <form class="quiz-contact" id="quizContactForm" data-quiz-contact novalidate>
        <div class="quiz-contact-row">
          <label class="quiz-contact-field">
            <span>Телефон *</span>
            <input name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="18" data-phone-mask placeholder="+7 (927) 633-21-97" value="${escapeHtml(quizContact.phone)}" required />
          </label>
          <fieldset class="quiz-contact-method">
            <legend>Как связаться?</legend>
            <div class="quiz-contact-methods">
              <button class="quiz-option ${quizContact.method === "MAX" ? "selected" : ""}" type="button" data-quiz-method="MAX" aria-pressed="${quizContact.method === "MAX"}">MAX</button>
              <button class="quiz-option ${quizContact.method === "Звонок" ? "selected" : ""}" type="button" data-quiz-method="Звонок" aria-pressed="${quizContact.method === "Звонок"}">Звонок</button>
            </div>
          </fieldset>
        </div>
        <label class="quiz-contact-field">
          <span>Комментарий <small>необязательно</small></span>
          <textarea name="comment" autocomplete="off" placeholder="Размеры, пожелания, удобное время">${escapeHtml(quizContact.comment)}</textarea>
        </label>
        <p class="quiz-error" data-quiz-error></p>
        <p class="quiz-success" data-quiz-success>Спасибо, заявка принята. Мы свяжемся с вами для уточнения расчета.</p>
      </form>`;
  }

  body.innerHTML = content;
  initPhoneMasks(body);
  initQuizScroller();
}

function initQuizScroller() {
  const wrap = qs("[data-quiz-scroll-wrap]");
  const scroller = qs("[data-quiz-options]");
  if (!wrap || !scroller) return;

  const updateState = () => {
    const maxScroll = scroller.scrollWidth - scroller.clientWidth - 2;
    wrap.classList.toggle("can-scroll-prev", scroller.scrollLeft > 8);
    wrap.classList.toggle("can-scroll-next", scroller.scrollLeft < maxScroll);
  };

  qsa("[data-quiz-scroll]").forEach((button) => {
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

function goToQuizStep(index) {
  const body = qs("[data-quiz-body]");
  quizLocked = true;
  quizIndex = Math.max(0, Math.min(index, quizSteps.length - 1));
  if (!body) {
    renderQuiz();
    quizLocked = false;
    return;
  }
  body.classList.add("is-switching");
  window.setTimeout(() => {
    renderQuiz();
    body.classList.remove("is-switching");
    quizLocked = false;
  }, 160);
}

function initQuiz() {
  const body = qs("[data-quiz-body]");
  const back = qs("[data-quiz-back]");
  const next = qs("[data-quiz-next]");
  if (!body || !back || !next) return;

  renderQuiz();

  back.addEventListener("click", () => {
    if (!quizLocked) goToQuizStep(quizIndex - 1);
  });

  next.addEventListener("click", () => {
    const step = quizSteps[quizIndex];
    if (!quizLocked && step.kind !== "contact" && quizAnswers[step.key]) {
      goToQuizStep(quizIndex + 1);
    }
  });

  body.addEventListener("click", (event) => {
    if (quizLocked) return;
    const method = event.target.closest("[data-quiz-method]");
    if (method) {
      quizContact.method = method.dataset.quizMethod;
      method.closest(".quiz-contact-methods").querySelectorAll("[data-quiz-method]").forEach((item) => {
        const selected = item === method;
        item.classList.toggle("selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      return;
    }

    const option = event.target.closest("[data-quiz-option]");
    if (!option) return;
    const step = quizSteps[quizIndex];
    const selected = step.options.find((item) => item.value === option.dataset.quizOption);
    if (!selected) return;

    quizAnswers[step.key] = selected.label;
    qsa(".quiz-option").forEach((item) => item.classList.remove("selected"));
    option.classList.add("selected");
    quizLocked = true;
    window.setTimeout(() => goToQuizStep(quizIndex + 1), 190);
  });

  body.addEventListener("input", (event) => {
    if (event.target.name === "phone") quizContact.phone = event.target.value;
    if (event.target.name === "comment") quizContact.comment = event.target.value;
  });

  body.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-quiz-contact]");
    if (!form) return;
    event.preventDefault();
    const error = qs("[data-quiz-error]");
    const success = qs("[data-quiz-success]");
    quizContact.phone = form.elements.phone.value.trim();
    quizContact.comment = form.elements.comment.value.trim();

    if (!validatePhone(quizContact.phone)) {
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
    next.disabled = true;
  });
}

function setModalState(modal, open) {
  modal.classList.toggle("open", open);
  modal.setAttribute("aria-hidden", String(!open));
  document.body.classList.toggle("modal-open", qsa(".modal.open").length > 0);
}

function openRequestModal() {
  setModalState(qs("#requestModal"), true);
  setTimeout(() => qs('#requestForm input[name="name"]').focus(), 80);
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
        const formError = input.closest("#requestForm")?.querySelector("[data-form-error]");
        if (formError?.textContent.startsWith("Введите номер полностью")) formError.style.display = "none";
      }
      requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
    });

    input.addEventListener("paste", (event) => {
      event.preventDefault();
      input.value = formatRussianPhone(event.clipboardData.getData("text"));
      input.dispatchEvent(new Event("input", { bubbles: true }));
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
const siteHeader = qs(".site-header");

function setNavState(open) {
  document.body.classList.toggle("nav-open", open);
  if (open) document.body.classList.remove("header-hidden");
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

function initSmartHeader() {
  if (!siteHeader) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const updateHeader = () => {
    const currentY = window.scrollY;
    const isMobile = window.matchMedia("(max-width: 820px)").matches;
    const isLocked =
      document.body.classList.contains("nav-open") ||
      document.body.classList.contains("modal-open") ||
      siteHeader.contains(document.activeElement);

    if (!isMobile || isLocked || currentY < 84) {
      document.body.classList.remove("header-hidden");
      lastScrollY = currentY;
      ticking = false;
      return;
    }

    const delta = currentY - lastScrollY;
    if (Math.abs(delta) > 12) {
      document.body.classList.toggle("header-hidden", delta > 0);
      lastScrollY = currentY;
    }

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateHeader);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateHeader();
}

initSmartHeader();

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

qsa("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", openRequestModal);
});

qsa("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => setModalState(qs("#requestModal"), false));
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
    error.textContent = "Введите номер полностью: +7 (___) ___-__-__.";
    error.style.display = "block";
    form.elements.phone.setAttribute("aria-invalid", "true");
    form.elements.phone.focus();
    return;
  }

  form.elements.phone.removeAttribute("aria-invalid");
  success.style.display = "block";
  form.reset();
});

initKitchenCarousel();
initReviewScroller();
initProcessScroller();
renderMaterial("fronts");
initPhoneMasks();
initQuiz();
setFaq(0);
