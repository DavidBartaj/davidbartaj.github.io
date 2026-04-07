export function initBurgerMenu() {


// --- 1. БУРГЕР МЕНЮ ---
    const burger = document.getElementById('mobile-menu');
    const nav = document.getElementById('nav-list');
    const body = document.body;

    if (burger && nav) {
        burger.onclick = function () {
            burger.classList.toggle('is-active');
            nav.classList.toggle('active');
            body.classList.toggle('no-scroll');
        };

        nav.querySelectorAll('a').forEach(link => {
            link.onclick = () => {
                burger.classList.remove('is-active');
                nav.classList.remove('active');
                body.classList.remove('no-scroll');
            };
        });
    }
    console.log("Work time script loaded");
}
