const ClassBody = document.querySelector('body');
const ClassOpenbtn = document.querySelector('.openbtn');
const ClassNavigation = document.querySelector('.navigation');
const ClassClosebtn = document.querySelector('.closebtn');

// iOSでスクロールを禁止にする関数
function disableScroll(event) {
    event.preventDefault();
}


function ClickOpenbtn() {
    ClassOpenbtn.classList.add('active');
    ClassNavigation.classList.add('panelactive');
    ClassBody.classList.add('body_active');
    ClassClosebtn.style.display = 'block';
    // ↓今回の例では分かりやすいようにクローズボタンに黄色のスタイルを当てている
    // ClassClosebtn.style.background = 'yellow';
    document.addEventListener('touchmove', disableScroll, {
        passive: false
    });
}
ClassOpenbtn.onclick = ClickOpenbtn;

function ClickClosebtn() {
    ClassOpenbtn.classList.remove('active');
    ClassNavigation.classList.remove('panelactive');
    ClassBody.classList.remove('body_active');
    ClassClosebtn.style.display = 'none';
    document.removeEventListener('touchmove', disableScroll, {
        passive: false
    });
}
ClassClosebtn.onclick = ClickClosebtn;


// もし、 ボトムナビゲーションなど、 他の箇所を押した際のパネルが閉じる仕様の時は、
// 以下の記述もしておく。

Icon = document.querySelector('.icon');

function ClickIcon() {
    ClassOpenbtn.classList.remove('active');
    ClassNavigation.classList.remove('panelactive');
    ClassBody.classList.remove('body_active');
    ClassClosebtn.style.display = 'none';
    document.removeEventListener('touchmove', disableScroll, {
        passive: false
    });
}
Icon.onclick = ClickIcon;
