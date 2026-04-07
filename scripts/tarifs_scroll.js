export function initTariffsScroll() {


// --- 4. СКРОЛ ТАРИФІВ (тільки якщо вони є) ---
    const wrapper = document.getElementById('tariffsWrapper');
    const next = document.getElementById('nextTariff');
    const prev = document.getElementById('prevTariff');

    if (wrapper && next && prev) {
        next.onclick = () => wrapper.scrollBy({left: 350, behavior: 'smooth'});
        prev.onclick = () => wrapper.scrollBy({left: -350, behavior: 'smooth'});
    }

// --- 5. КОПІЮВАННЯ IBAN ---
    const ibanContainer = document.getElementById('copyIbanContainer');
    const ibanValue = document.getElementById('ibanValue');
    const copyHint = document.getElementById('copyHint');

    if (ibanContainer && ibanValue) {
        ibanContainer.addEventListener('click', function () {
            const textToCopy = ibanValue.innerText;

            // Використовуємо сучасний метод копіювання
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Візуальний відгук замість набридливого alert
                const originalHint = copyHint.innerText;
                copyHint.innerText = "✅ Скопійовано!";
                copyHint.style.color = "#2ecc71";
                ibanContainer.style.borderColor = "#2ecc71";

                // Повертаємо як було через 2 секунди
                setTimeout(() => {
                    copyHint.innerText = originalHint;
                    copyHint.style.color = "#64748b";
                    ibanContainer.style.borderColor = "#3498db";
                }, 2000);
            }).catch(err => {
                console.error('Помилка копіювання:', err);
            });
        });
    }
    console.log("Work time script loaded");
}
