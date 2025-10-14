console.log("JS loaded ✅");

// ページが読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  // 背景色変更ボタン
  const button = document.getElementById("changeColorBtn");
  if (!button) {
    console.warn("⚠️ changeColorBtn が見つかりません（idを確認）");
  } else {
    button.addEventListener("click", () => {
      const color = getRandomColor();
      document.body.style.backgroundColor = color;
      console.log("背景色を変更しました →", color);
    });
  }

  // ヒーローをフェードイン
  const hero = document.getElementById("hero");
  if (hero) {
    // CSSの .is-shown を付与してふわっと表示
    hero.classList.add("is-shown");
    console.log("ヒーローをフェードインしました ✨");
  } else {
    console.warn("⚠️ ヒーロー要素（#hero）が見つかりません");
  }
});

// ランダムな色を作る関数
function getRandomColor() {
  const colors = ["#ffdad4", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
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
