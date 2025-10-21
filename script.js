// <html class="no-js"> を js に置換（JSが動いている証）
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

window.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded ✅');

  const hero = document.getElementById('hero');
  if (!hero) {
    console.warn('#hero が見つかりません 🚨');
    return;
  }

  // 一番安定する発火タイミング
  requestAnimationFrame(() => {
    hero.classList.add('is-shown');
    console.log('ヒーローをフェードインしました ✨');
  });
});
