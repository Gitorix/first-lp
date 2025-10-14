console.log("JS loaded ✅"); // 読み込み確認用ログ

// ページが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("changeColorBtn");
  
  if (!button) {
    console.warn("⚠️ ボタンが見つかりません（idを確認してください）");
    return;
  }

  console.log("ボタンを検出しました 🎯");

  button.addEventListener("click", () => {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    console.log("背景色を変更しました →", color);
  });
const hero = document.getElementById("hero");
if (hero) {
  hero.classList.add("opacity-100", "translate-y-0");
  console.log("ヒーローをフェードインしました ✨");
} else {
  console.warn("⚠️ ヒーロー要素が見つかりません（#hero）");
}



// ランダムな色を作る関数
function getRandomColor() {
  const colors = ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
// スクロールボタンの動き
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollBtn");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const aboutSection = document.getElementById("about");
      aboutSection.scrollIntoView({ behavior: "smooth" });
      console.log("✅ スクロール実行");
    });
  } else {
    console.warn("⚠️ scrollBtn が見つかりません。index.html の id を確認してね。");
  }
});


