// ★★★↓ここがポイント★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
const ClassBody = document.querySelector('body');
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★



const ClassOpenbtn = document.querySelector('.openbtn');
const ClassNavigation = document.querySelector('.navigation');


function ClickOpenbtn() {
    ClassOpenbtn.classList.toggle('active');
    ClassNavigation.classList.toggle('panelactive');
    // ★★★↓ここがポイント★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    ClassBody.classList.toggle('body_active');
    // ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
}
ClassOpenbtn.onclick = ClickOpenbtn;



// ★★★↓ここがポイント★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
// もし、 ボトムナビゲーションなど、 他の箇所を押した際のパネルが閉じる仕様の時は、
// 以下の記述もしておく。

Icon = document.querySelector('.icon');

function ClickIcon() {
    ClassOpenbtn.classList.remove('active');
    ClassNavigation.classList.remove('panelactive');
    ClassBody.classList.remove('body_active')
}
Icon.onclick = ClickIcon;
// ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★