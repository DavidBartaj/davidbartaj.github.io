// --- 2. МОДАЛКА ---

export function initModal() {

    const modal = document.getElementById("orderModal");

    document.addEventListener('click', function (e) {
        // Перевіряємо, чи натиснули на кнопку тарифу АБО на посилання "Залиште заявку"
        if (
            e.target.closest('.order-btn-border') ||
            e.target.closest('.order-btn-solid') ||
            e.target.classList.contains('open-modal-link')
        ) {
            e.preventDefault(); // Зупиняємо перехід по посиланню
            if (modal) {
                modal.style.display = "flex";
                document.body.classList.add('no-scroll');
            }
        }

        // Закриття
        if (e.target.classList.contains('close-modal') || e.target === modal) {
            if (modal) modal.style.display = "none";
            document.body.classList.remove('no-scroll');
        }
    });
    console.log("Work time script loaded");
}
