
import {initWorkTime} from './scripts/work_time.js';
import {initBurgerMenu} from './scripts/burger_menu.js';
import {initTariffsScroll} from './scripts/tarifs_scroll.js';
import {initModal} from './scripts/modal.js';
import {initHero} from './scripts/hero.js';
import {initComponentsLoader} from './scripts/header_footer.js';
import {initPreloader} from "./scripts/preloader.js";
import {initCookieBanner} from "./scripts/cookie.js";
import {initChannels} from "./scripts/channels.js";



document.addEventListener("DOMContentLoaded", async function () {
    // Тільки один запуск тут!

   await initComponentsLoader();
    initPreloader();


    initWorkTime();
    initCookieBanner();
    initBurgerMenu();
    initTariffsScroll();
    initModal();
    initHero();
    initChannels();




    console.log("Всі модулі ініціалізовано");
});




