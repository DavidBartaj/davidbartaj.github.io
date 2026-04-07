import { initWorkTime } from './scripts/work_time.js';
import { initBurgerMenu } from './scripts/burger_menu.js';
import { initTariffsScroll } from './scripts/tarifs_scroll.js';
import { initModal } from './scripts/modal.js';
import { initHero } from './scripts/hero.js';

document.addEventListener("DOMContentLoaded", function() {
    // Тільки один запуск тут!
    initWorkTime();
    initBurgerMenu();
    initTariffsScroll();
    initModal();
    initHero();

    console.log("Всі модулі ініціалізовано");
});