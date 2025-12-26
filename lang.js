(function () {
  const FR_SUFFIX = "-fr";
  const STORAGE_KEY = "site_lang"; // "en" or "fr"

  function isFrenchPage(pathname) {
    return pathname.endsWith(FR_SUFFIX + ".html");
  }

  function toFrenchPath(pathname) {
    if (!pathname.endsWith(".html")) return pathname;
    if (isFrenchPage(pathname)) return pathname;
    return pathname.replace(/\.html$/, FR_SUFFIX + ".html");
  }

  function toEnglishPath(pathname) {
    if (!pathname.endsWith(".html")) return pathname;
    return pathname.replace(FR_SUFFIX + ".html", ".html");
  }

  function desiredLang() {
    return localStorage.getItem(STORAGE_KEY) || "en";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  function redirectIfNeeded() {
    const lang = desiredLang();
    const path = window.location.pathname;

    if (!path.endsWith(".html")) return;

    const onFR = isFrenchPage(path);

    if (lang === "fr" && !onFR) {
      window.location.replace(toFrenchPath(path));
    } else if (lang === "en" && onFR) {
      window.location.replace(toEnglishPath(path));
    }
  }

  // Auto-redirect at load based on saved preference
  redirectIfNeeded();

  // Button behavior
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  function refreshButtonLabel() {
    btn.textContent = isFrenchPage(window.location.pathname) ? "EN" : "FR";
  }

  refreshButtonLabel();

  btn.addEventListener("click", function () {
    const path = window.location.pathname;
    const onFR = isFrenchPage(path);

    if (onFR) {
      setLang("en");
      window.location.href = toEnglishPath(path);
    } else {
      setLang("fr");
      window.location.href = toFrenchPath(path);
    }
  });
})();
