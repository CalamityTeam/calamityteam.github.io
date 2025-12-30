const STORAGE_KEY = "calamity-theme";
const DEFAULT_THEME = "devouring";

function getStoredTheme() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);

  document.querySelectorAll(".theme-option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.theme === theme);
  });
}

function initTheme() {
  const stored = getStoredTheme();
  setTheme(stored);

  document.querySelectorAll(".theme-option").forEach((opt) => {
    opt.addEventListener("click", () => setTheme(opt.dataset.theme));
  });

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("no-transitions");
    });
  });
}

document.addEventListener("DOMContentLoaded", initTheme);
