const startTime = Date.now();

export async function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    // Перевіряємо, чи користувач вже бачив прелоадер у цій сесії
    if (sessionStorage.getItem('preloaderShown')) {
        preloader.style.display = 'none'; // Миттєво ховаємо
        return;
    }

    try {
        const response = await fetch('pages/preloader.html');
        if (!response.ok) throw new Error("File not found");

        const html = await response.text();
        preloader.innerHTML = html;

        // Встановлюємо 2 секунди (2000 мс) мінімального часу показу
        const minimumDisplayTime = 2000;

        const hideLoader = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);

            setTimeout(() => {
                preloader.classList.add('loader-hidden');

                // Помічаємо в сесії, що прелоадер вже був показаний
                sessionStorage.setItem('preloaderShown', 'true');

                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800);
            }, remainingTime);
        };

        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader, { once: true });
        }

    } catch (error) {
        console.warn("Preloader failed to load content:", error);
        preloader.style.display = 'none';
    }
}