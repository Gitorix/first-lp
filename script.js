// ===================================
// ページ読み込み完了時の処理
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS loaded");

  // ------------------------------
  // 背景色変更ボタンの動き
  // ------------------------------
  const button = document.getElementById("changeColorBtn");
  if (button) {
    console.log("🎯 背景色変更ボタンを検出しました");
    button.addEventListener("click", () => {
      const color = getRandomColor();
      document.body.style.backgroundColor = color;
      console.log("🎨 背景色を変更:", color);
    });
  } else {
    console.warn("⚠️ 背景色変更ボタン（id='changeColorBtn'）が見つかりません");
  }

  // ------------------------------
  // ヒーローセクションをフェードイン
  // ------------------------------
  const hero = document.getElementById("hero");
  if (hero) {
    hero.classList.add("is-shown");
    console.log("✨ ヒーローをフェードインしました");
  } else {
    console.warn("⚠️ #hero が見つかりません（index.html を確認）");
  }

  // ------------------------------
  // スクロールボタンの動き
  // ------------------------------
  const scrollBtn = document.getElementById("scrollBtn");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
        console.log("✅ スクロール実行");
      } else {
        console.warn("⚠️ #about が見つかりません（index.html を確認）");
      }
    });
  } else {
    console.warn("⚠️ scrollBtn が見つかりません（index.html を確認）");
  }
});

// ===================================
// ランダムな色を作る関数
// ===================================
function getRandomColor() {
  const colors = ["#ffadad", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
