const startTime = Date.now();

export async function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    try {
        // Шлях відносно кореня сайту
        const response = await fetch('pages/preloader.html');
        if (!response.ok) throw new Error("File not found");

        const html = await response.text();
        preloader.innerHTML = html;

        // Логіка зникнення
        const minimumDisplayTime = 2000;

        const hideLoader = () => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const remainingTime = Math.max(0, minimumDisplayTime - elapsedTime);

            setTimeout(() => {
                preloader.classList.add('loader-hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 800); // Час має збігатися з transition у CSS
            }, remainingTime);
        };

        if (document.readyState === 'complete') {
            hideLoader();
        } else {
            window.addEventListener('load', hideLoader, { once: true });
        }

    } catch (error) {
        console.warn("Preloader failed to load content:", error);
        preloader.style.display = 'none'; // Ховаємо порожній дів у разі помилки
    }
}