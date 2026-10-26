const body = document.body;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const themeButton = document.querySelector("[data-theme-toggle]");
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);

async function loadPartials() {
  const targets = [...document.querySelectorAll("[data-partial]")];
  await Promise.all(
    targets.map(async (target) => {
      try {
        const response = await fetch(target.dataset.partial);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        target.innerHTML = await response.text();
      } catch (error) {
        target.dataset.partialError = "true";
        console.error(`Unable to load ${target.dataset.partial}`, error);
      }
    }),
  );
}

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  mobileMenu.classList.toggle("is-open", open);
  body.classList.toggle("menu-open", open);
}

function initNavigation() {
  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const setActiveLink = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
    const current = sections.findLast(
      (section) => section.offsetTop <= window.scrollY + 220,
    );
    links.forEach((link) => {
      link.classList.toggle(
        "is-active",
        current && link.hash === `#${current.id}`,
      );
    });
  };

  window.addEventListener("scroll", setActiveLink, { passive: true });
  setActiveLink();
}

function initTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const systemLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;
  document.documentElement.dataset.theme =
    savedTheme || (systemLight ? "light" : "dark");

  themeButton.addEventListener("click", () => {
    const next =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("portfolio-theme", next);
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  items.forEach((item) => observer.observe(item));
}

function initDialogs() {
  document.querySelectorAll("[data-dialog]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      document.getElementById(trigger.dataset.dialog)?.showModal();
    });
  });

  document.querySelectorAll(".case-dialog").forEach((dialog) => {
    dialog
      .querySelector("[data-dialog-close]")
      .addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      const bounds = dialog.getBoundingClientRect();
      const outside =
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom;
      if (outside) dialog.close();
    });
  });
}

async function initPortfolio() {
  await loadPartials();
  initNavigation();
  initTheme();
  initReveal();
  initDialogs();
}

initPortfolio();
