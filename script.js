// ボタンを取得
const button = document.getElementById("changeColorBtn");

// ボタンがクリックされたときの動きを設定
button.addEventListener("click", function() {
  // ページ全体の背景色を変更
  document.body.style.backgroundColor = getRandomColor();
});

// ランダムな色を作る関数
function getRandomColor() {
  const colors = ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
