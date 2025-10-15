console.log("JS loaded ✅");

window.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  if (hero) {
    hero.classList.add("is-shown");
    console.log("ヒーローをフェードインしました ✨");
  } else {
    console.warn("#hero が見つかりません");
  }
});
