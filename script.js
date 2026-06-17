const translations = {
  zh: {
    "meta.title": "電子名片 | 星野澪",
    "nav.brand": "星野澪",
    "nav.about": "關於",
    "nav.works": "事蹟",
    "nav.contact": "聯絡",
    "hero.eyebrow": "互動敘事設計師 / 前端魔法師",
    "hero.name": "星野 澪",
    "hero.lead": "用程式、聲音與奇想，把一張普通名片變成會呼吸的微型宇宙。",
    "hero.tag1": "遊戲 UI",
    "hero.tag2": "電子音樂",
    "hero.tag3": "星圖收藏",
    "hero.tag4": "咖啡因研究",
    "hero.cta": "聯絡我",
    "hero.secondary": "查看事蹟",
    "hero.stat1": "完成專案",
    "hero.stat2": "靈感指數",
    "hero.stat3": "夜間創作",
    "about.kicker": "Profile Archive",
    "about.title": "關於我",
    "about.cardTitle": "虛構人物簡介",
    "about.body": "星野澪是一位住在台北的互動敘事設計師，擅長把前端動效、遊戲化介面與音景設計混在一起。她相信每個按鈕都該有個性，每段資料都能被編排成一場小型演出。",
    "about.roleLabel": "職稱",
    "about.role": "Creative Frontend Engineer",
    "about.locationLabel": "基地",
    "about.location": "台北 / 遠端銀河辦公室",
    "about.toolsLabel": "工具",
    "about.tools": "HTML, CSS, JS, GSAP, Web Audio",
    "about.mottoLabel": "座右銘",
    "about.motto": "資料也可以跳舞。",
    "works.kicker": "Achievement Log",
    "works.title": "關於我 - 事蹟",
    "works.item1Title": "星塵履歷系統",
    "works.item1Body": "打造會根據觀看者互動改變排列的履歷網頁，讓面試官在 90 秒內看到最相關的能力節點。",
    "works.item2Title": "月面市集 UI 套件",
    "works.item2Body": "設計一套霓虹、低延遲、可鍵盤操作的電商介面元件，獲得虛構設計獎金賞。",
    "works.item3Title": "聲音記憶地圖",
    "works.item3Body": "把城市採樣聲轉換成互動式地圖，使用者能用游標混音自己的散步路線。",
    "skills.kicker": "Signal Matrix",
    "skills.title": "能力矩陣",
    "contact.kicker": "Contact Channel",
    "contact.title": "聯絡我",
    "contact.email": "電子郵件",
    "footer.copy": "© 2026 星野澪。這是一份使用假資料製作的電子名片。"
  },
  en: {
    "meta.title": "Digital Card | Mio Hoshino",
    "nav.brand": "Mio Hoshino",
    "nav.about": "About",
    "nav.works": "Wins",
    "nav.contact": "Contact",
    "hero.eyebrow": "Interactive Story Designer / Frontend Enchanter",
    "hero.name": "Mio Hoshino",
    "hero.lead": "I turn code, sound, and odd sparks of imagination into tiny digital universes that breathe.",
    "hero.tag1": "Game UI",
    "hero.tag2": "Electronic Music",
    "hero.tag3": "Star Maps",
    "hero.tag4": "Caffeine Studies",
    "hero.cta": "Contact Me",
    "hero.secondary": "See Wins",
    "hero.stat1": "Projects",
    "hero.stat2": "Idea Index",
    "hero.stat3": "Night Builds",
    "about.kicker": "Profile Archive",
    "about.title": "About Me",
    "about.cardTitle": "Fictional Bio",
    "about.body": "Mio Hoshino is a Taipei-based interactive story designer who blends frontend motion, game-like interfaces, and soundscape design. She believes every button deserves a personality and every dataset can become a small performance.",
    "about.roleLabel": "Role",
    "about.role": "Creative Frontend Engineer",
    "about.locationLabel": "Base",
    "about.location": "Taipei / Remote Galaxy Office",
    "about.toolsLabel": "Tools",
    "about.tools": "HTML, CSS, JS, GSAP, Web Audio",
    "about.mottoLabel": "Motto",
    "about.motto": "Even data can dance.",
    "works.kicker": "Achievement Log",
    "works.title": "Achievements",
    "works.item1Title": "Stardust Resume System",
    "works.item1Body": "Built a resume site that rearranges itself through viewer interaction, surfacing the most relevant skill nodes in 90 seconds.",
    "works.item2Title": "Lunar Market UI Kit",
    "works.item2Body": "Designed a neon, low-latency, keyboard-friendly ecommerce component system that won a fictional design gold prize.",
    "works.item3Title": "Sound Memory Map",
    "works.item3Body": "Turned urban field recordings into an interactive map where visitors remix their walking route with the cursor.",
    "skills.kicker": "Signal Matrix",
    "skills.title": "Skill Matrix",
    "contact.kicker": "Contact Channel",
    "contact.title": "Contact Me",
    "contact.email": "Email",
    "footer.copy": "© 2026 Mio Hoshino. This digital card uses fictional profile data."
  }
};

let currentLang = localStorage.getItem("lang") || "zh";
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light" || (!savedTheme && prefersLight)) {
  document.body.classList.add("light");
}

const langToggle = document.querySelector("#langToggle");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector(".theme-icon");

function splitAnimatedText() {
  document.querySelectorAll(".split-text").forEach((node) => {
    const text = node.textContent;
    node.innerHTML = [...text].map((char) => {
      const content = char === " " ? "&nbsp;" : char;
      return `<span class="split-char">${content}</span>`;
    }).join("");
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[lang][key]) {
      node.textContent = translations[lang][key];
    }
  });
  document.title = translations[lang]["meta.title"];
  langToggle.textContent = lang === "zh" ? "EN" : "中";
  localStorage.setItem("lang", lang);
  splitAnimatedText();
  animateIntro();
}

function updateThemeIcon() {
  themeIcon.textContent = document.body.classList.contains("light") ? "☀" : "☾";
}

function animateIntro() {
  if (!window.gsap) return;
  gsap.fromTo(".split-char", {
    y: 70,
    opacity: 0,
    rotateX: -88,
    filter: "blur(10px)"
  }, {
    y: 0,
    opacity: 1,
    rotateX: 0,
    filter: "blur(0px)",
    duration: 0.9,
    ease: "back.out(1.7)",
    stagger: 0.018
  });
  gsap.fromTo(".hero-lead, .hero-tags span, .hero-actions a", {
    y: 24,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.08,
    ease: "power3.out",
    delay: 0.15
  });
}

function initGsapAnimations() {
  if (!window.gsap) return;
  animateIntro();
  gsap.fromTo(".avatar-card", {
    y: 24,
    opacity: 0,
    rotateY: -28
  }, {
    y: 0,
    opacity: 1,
    rotateY: -12,
    duration: 1.2,
    ease: "elastic.out(1, 0.75)"
  });
  gsap.fromTo(".stat-chip", {
    scale: 0.72,
    opacity: 0,
    y: 28
  }, {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "back.out(1.9)",
    delay: 0.35
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      gsap.to(entry.target, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      });
      gsap.fromTo(entry.target.querySelectorAll(".glass-panel"), {
        y: 34,
        opacity: 0,
        rotateX: 18
      }, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.09,
        ease: "power3.out"
      });
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach((section) => {
    gsap.set(section, { y: 34, opacity: 0 });
    observer.observe(section);
  });
}

function initMagneticButtons() {
  document.querySelectorAll(".magnetic").forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
    });
    item.addEventListener("pointerleave", () => {
      item.style.transform = "translate(0, 0)";
    });
  });
}

function initCanvas() {
  const canvas = document.querySelector("#particleCanvas");
  const ctx = canvas.getContext("2d");
  const particles = [];
  const count = Math.min(92, Math.floor(window.innerWidth / 12));
  let width = 0;
  let height = 0;
  let pointer = { x: -9999, y: -9999 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function makeParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55,
      r: Math.random() * 2.4 + 0.7,
      hue: Math.random() > 0.5 ? 186 : 318
    };
  }

  function seed() {
    particles.length = 0;
    for (let i = 0; i < count; i += 1) particles.push(makeParticle());
  }

  function drawLine(a, b, alpha) {
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = `hsla(${a.hue}, 95%, 66%, ${alpha})`;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p, index) => {
      const dx = pointer.x - p.x;
      const dy = pointer.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        p.vx -= dx * 0.00008;
        p.vy -= dy * 0.00008;
      }

      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 95%, 66%, 0.78)`;
      ctx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const gap = Math.hypot(p.x - other.x, p.y - other.y);
        if (gap < 110) drawLine(p, other, (110 - gap) / 520);
      }
    });
    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", () => {
    resize();
    seed();
  });
  window.addEventListener("pointermove", (event) => {
    pointer = { x: event.clientX, y: event.clientY };
  });
  window.addEventListener("pointerleave", () => {
    pointer = { x: -9999, y: -9999 };
  });

  resize();
  seed();
  tick();
}

langToggle.addEventListener("click", () => {
  applyLanguage(currentLang === "zh" ? "en" : "zh");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  updateThemeIcon();
  if (window.gsap) {
    gsap.fromTo("body", { filter: "saturate(1.8) brightness(1.25)" }, { filter: "saturate(1) brightness(1)", duration: 0.45 });
  }
});

window.addEventListener("load", () => {
  applyLanguage(currentLang);
  updateThemeIcon();
  initCanvas();
  initGsapAnimations();
  initMagneticButtons();
});
