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
});

// ランダムな色を作る関数
function getRandomColor() {
  const colors = ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
