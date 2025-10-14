document.addEventListener("DOMContentLoaded", () => {
  console.log("JS loaded ✅");

  // === 背景色ボタン ===
  const colorBtn = document.getElementById("changeColorBtn");
  if (colorBtn) {
    colorBtn.addEventListener("click", () => {
      const colors = ["#ffdada", "#ffd6a5", "#caffbf", "#9bf6ff", "#bdb2ff"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = color;
      console.log("背景色を変更しました →", color);
    });
  } else {
    console.warn("⚠️ changeColorBtn が見つかりません（index.html の id を確認してね）");
  }

  // === ヒーローをフェードイン（#hero がある想定） ===
  const hero = document.getElementById("hero");
  if (hero) {
    hero.classList.add("is-shown");
    console.log("ヒーローをフェードインしました ✨");
  } else {
    console.warn("⚠️ ヒーロー要素（#hero）が見つかりません");
  }

  // === スクロールボタン ===
  const scrollBtn = document.getElementById("scrollBtn");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      const about = document.getElementById("about");
      if (about) {
        about.scrollIntoView({ behavior: "smooth" });
        console.log("✅ スクロール実行");
      } else {
        console.warn("⚠️ #about が見つかりません（id を確認してね）");
      }
    });
  } else {
    console.warn("⚠️ scrollBtn が見つかりません。index.html の id を確認してね。");
  }
}); // ← これで DOMContentLoaded を締める（最後はこれだけ）
