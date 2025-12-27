// lang.js — robust FR/EN switch for pages like:
// index.html <-> index-fr.html
// engineering.html <-> engineering-fr.html
// etc.

(function () {
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  function getCurrentFile() {
    // pathname like "/site/" or "/site/index.html" or "/site/engineering.html"
    const path = window.location.pathname;
    let file = path.split("/").pop();

    // If we're at ".../site/" then file === "" -> assume index.html
    if (!file) file = "index.html";

    return file;
  }

  function isFrenchFile(file) {
    return file.endsWith("-fr.html");
  }

  function toFrenchFile(file) {
    if (file === "index.html") return "index-fr.html";
    if (file.endsWith(".html") && !file.endsWith("-fr.html")) {
      return file.replace(".html", "-fr.html");
    }
    return file; // already FR
  }

  function toEnglishFile(file) {
    if (file === "index-fr.html") return "index.html";
    return file.replace("-fr.html", ".html");
  }

  function buildTargetUrl(targetFile) {
    // Keep same directory + hash (#section)
    const parts = window.location.pathname.split("/");
    parts[parts.length - 1] = targetFile;

    // If original path ended with "/", last part was "" -> we set it to targetFile
    if (parts[parts.length - 1] === "") parts[parts.length - 1] = targetFile;

    const newPath = parts.join("/").replace(/\/+$/, ""); // avoid trailing slashes
    return newPath + window.location.hash;
  }

  function updateButtonLabel() {
    const file = getCurrentFile();
    // If current is EN, show FR (meaning "switch to FR"), and vice versa
    btn.textContent = isFrenchFile(file) ? "EN" : "FR";
    btn.setAttribute("aria-label", "Change language");
  }

  btn.addEventListener("click", () => {
    const file = getCurrentFile();
    const targetFile = isFrenchFile(file) ? toEnglishFile(file) : toFrenchFile(file);
    window.location.href = buildTargetUrl(targetFile);
  });

  updateButtonLabel();
})();
