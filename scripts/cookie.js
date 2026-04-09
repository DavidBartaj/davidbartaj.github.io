// export function initCookieBanner() {
//     const banner = document.getElementById('cookie-banner');
//     const acceptBtn = document.getElementById('cookie-accept'); // Шукаємо кнопку по ID
//     const declineBtn = document.getElementById('cookie-decline');
//
//     if (!banner) return;
//
//     if (!localStorage.getItem('cookiesAccepted')) {
//         setTimeout(() => {
//             banner.classList.add('show');
//         }, 2000);
//     }
//
//     // Слухач подій замість onclick у HTML
//     if (acceptBtn) {
//         acceptBtn.addEventListener('click', () => {
//             localStorage.setItem('cookiesAccepted', 'true');
//             banner.classList.remove('show');
//             console.log("Cookies accepted");
//         });
//     }
//
//     if (declineBtn) {
//         declineBtn.addEventListener('click', () => {
//             banner.classList.remove('show');
//         });
//     }
// }
/**
 * Модуль для керування банером файлів cookie та згодою Google Analytics
 */
export function initCookieBanner() {
    const banner = document.getElementById('cookie-banner');
    const overlay = document.getElementById('cookie-overlay');
    const acceptBtn = document.getElementById('cookie-accept');
    const declineBtn = document.getElementById('cookie-decline');

    if (!banner || !overlay) return;

    // 1. Якщо згода вже була надана раніше, оновлюємо статус для Google Analytics відразу
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        updateGoogleConsent(true);
    } else {
        // Якщо вибору ще немає — показуємо банер через 1.5 сек
        setTimeout(() => {
            banner.classList.add('show');
            overlay.classList.add('show');
            document.body.style.overflow = 'hidden'; // Блокуємо скрол
        }, 1500);
    }

    /**
     * Функція для передачі статусу згоди в Google Analytics
     */
    function updateGoogleConsent(isGranted) {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': isGranted ? 'granted' : 'denied'
            });
            console.log(`Google Analytics status: ${isGranted ? 'Granted' : 'Denied'}`);
        }
    }

    function hideEverything() {
        banner.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = ''; // Повертаємо скрол

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }

    // Обробка кнопки "Прийняти"
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookiesAccepted', 'true');
            updateGoogleConsent(true); // Активуємо аналітику
            hideEverything();
        });
    }

    // Обробка кнопки "Закрити" (відхилити)
    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            // Можна додати localStorage.setItem('cookiesAccepted', 'false'),
            // якщо не хочеш показувати банер знову тим, хто відмовився
            updateGoogleConsent(false);
            hideEverything();
        });
    }
}