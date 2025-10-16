console.log("JS loaded ✅");

// 失敗検知（CSSが適用されていなければ警告）
(function () {
  const hasLink = !!document.querySelector('link[rel="stylesheet"][href*="style.css"]');
  const fam = getComputedStyle(document.body).fontFamily || "";
  const styled = /Hiragino|Noto|system-ui|Segoe|Roboto/i.test(fam);
  if (!hasLink || !styled) {
    console.error("[CSS CHECK] Stylesheet not applied or missing. Check href path, 404, cache, or Service Worker.");
  }
})();

window.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  if (hero) {
    hero.classList.add("is-shown");
    console.log("ヒーローをフェードインしました ✨");
  } else {
    console.warn("#hero が見つかりません");
  }
});
