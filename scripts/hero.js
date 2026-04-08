export function initHero() {
    // Шукаємо тільки слайди
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    const slideInterval = 10000; // 10 секунд

    if (!slides.length) return; // Захист, якщо на сторінці немає слайдера

    function showSlide(index) {
        slides.forEach(s => {
            if (s.classList.contains('active')) {
                s.classList.remove('active');
                s.classList.add('exit'); // Додаємо клас відходу для плавного з'їзду
                setTimeout(() => s.classList.remove('exit'), 800); // Прибираємо його після завершення анімації
            }
        });

        // Активуємо наступний слайд
        if (slides[index]) {
            slides[index].classList.add("active");
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Автоперемикання кожні 6 секунд
    setInterval(nextSlide, slideInterval);

    // Ініціалізація іконок Lucide для контенту всередині слайдів
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    console.log("Hero slider initialized (No dots mode)");
}
