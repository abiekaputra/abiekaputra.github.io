const body = document.body;
const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const cursorOrb = document.querySelector(".cursor-orb");
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
  menuButton.addEventListener("click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
  );
  mobileMenu
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
  const updateNavigation = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 35);
    const current = sections.findLast(
      (section) => section.offsetTop <= window.scrollY + 220,
    );
    links.forEach((link) =>
      link.classList.toggle(
        "is-active",
        Boolean(current && link.hash === `#${current.id}`),
      ),
    );
  };
  window.addEventListener("scroll", updateNavigation, { passive: true });
  updateNavigation();
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
    { rootMargin: "0px 0px -7%", threshold: 0.07 },
  );
  items.forEach((item) => observer.observe(item));
}

function initProjectColors() {
  const root = document.documentElement;
  document.querySelectorAll("[data-accent]").forEach((project) => {
    const applyColor = () =>
      root.style.setProperty("--live-accent", project.dataset.accent);
    project.addEventListener("pointerenter", applyColor);
    project.addEventListener("focus", applyColor);
  });
}

function initCursor() {
  if (
    prefersReducedMotion.matches ||
    !window.matchMedia("(pointer: fine)").matches
  )
    return;
  window.addEventListener(
    "pointermove",
    (event) => {
      body.classList.add("has-pointer");
      cursorOrb.style.left = `${event.clientX}px`;
      cursorOrb.style.top = `${event.clientY}px`;
    },
    { passive: true },
  );
  document.querySelectorAll("a, button").forEach((item) => {
    item.addEventListener("pointerenter", () =>
      cursorOrb.classList.add("is-hovering"),
    );
    item.addEventListener("pointerleave", () =>
      cursorOrb.classList.remove("is-hovering"),
    );
  });
}

function initEmailCopy() {
  const button = document.querySelector("[data-copy-email]");
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("abiekapw@gmail.com");
      button.textContent = "copied — now say hi";
    } catch {
      button.textContent = "abiekapw@gmail.com";
    }
  });
}

function initSecret() {
  const toast = document.querySelector("[data-secret-toast]");
  let typed = "";
  document.addEventListener("keydown", (event) => {
    if (event.key.length !== 1) return;
    typed = `${typed}${event.key.toLowerCase()}`.slice(-4);
    if (typed !== "lazy") return;
    toast.classList.add("is-visible");
    window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
  });
}

async function initPortfolio() {
  await loadPartials();
  initNavigation();
  initReveal();
  initProjectColors();
  initCursor();
  initEmailCopy();
  initSecret();
}

initPortfolio();
