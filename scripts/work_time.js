
export function initWorkTime() {
    function updateWorkStatus() {
        const mText = document.getElementById('status-text');
        const mCont = document.getElementById('status-container');
        const statusBtn = document.getElementById('status-dot');
        const fText = document.getElementById('footer-status-text');
        const fCont = document.getElementById('footer-status-container');

        // Оголошуємо ці змінні ТІЛЬКИ ОДИН РАЗ тут
        const holidayNote = document.querySelector('.footer-holiday-note');
        const holidayNoteText = holidayNote ? holidayNote.querySelector('.holiday-text') : null;

        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();


        // --- БЛОК НАЛАШТУВАННЯ СВЯТ ---

        // --- 1. СПИСОК СВЯТ (Дати вказувати цифрами) ---
        const holidays = [


            {
                name: "Великдень",
                start: new Date(2026, 3, 13),
                end: new Date(2026, 3, 14)
            },{
                name: "Різдво",
                start: new Date(2026, 11, 25),
                end: new Date(2026, 11, 25)
            },{
                name: "Новий рік",
                start: new Date(2026, 11, 31),
                end: new Date(2026, 0, 1)
            }
        ];

        let isHolidayToday = false;
        let isPreHolidayWeek = false;

        // --- 2. ПОШУК АКТИВНОГО СВЯТА ---
        // Використовуємо .find(), щоб зупинитися на першому ж підходящому святі
        const activeHoliday = holidays.find(h => {
            const startDate = new Date(h.start).setHours(0, 0, 0, 0);
            const endDate = new Date(h.end).setHours(23, 59, 59, 999);
            const preHolidayStart = new Date(startDate - 7 * 24 * 60 * 60 * 1000);

            if (now >= startDate && now <= endDate) {
                isHolidayToday = true;
                return true;
            }
            if (now >= preHolidayStart && now < startDate) {
                isPreHolidayWeek = true;
                return true;
            }
            return false;
        });

        // --- 3. КЕРУВАННЯ ВІДОБРАЖЕННЯМ В HTML ---
        if (holidayNote) {
            if (activeHoliday) {
                // Показуємо блок
                holidayNote.style.display = 'flex';

                if (holidayNoteText) {
                    const s = activeHoliday.start;
                    const e = activeHoliday.end;

                    // Форматуємо дату: додаємо "0", якщо число < 10, і додаємо 1 до місяця
                    const fD = (d) => String(d.getDate()).padStart(2, '0');
                    const fM = (d) => String(d.getMonth() + 1).padStart(2, '0');

                    const startStr = `${fD(s)}.${fM(s)}`;
                    const endStr = `${fD(e)}.${fM(e)}`;

                    // Якщо один день — пишемо одну дату, якщо період — через дефіс
                    const dateText = (startStr === endStr) ? startStr : `${startStr} - ${endStr}`;

                    // Обираємо правильне закінчення:
                    const suffix = (startStr === endStr) ? "вихідний" : "вихідні";

                    // Виводимо фінальний текст, використовуючи змінну suffix
                    holidayNoteText.innerText = `${dateText} — ${suffix}`;
                }
            } else {
                // Ховаємо блок, якщо свят немає
                holidayNote.style.display = 'none';
            }
        }

        // 1. ЛОГІКА ДЛЯ ДНЯ СВЯТА
        if (isHolidayToday) {
            const holidayMessage = "Сьогодні вихідний";
            if (mCont && mText) {
                mCont.className = 'status-container status-offline';
                mText.innerText = holidayMessage;
                if (statusBtn) {
                    statusBtn.style.backgroundColor = "var(--primary-red)";
                    statusBtn.style.boxShadow = "0 0 8px var(--primary-red)";
                }
            }
            if (fCont && fText) {
                fCont.className = 'status-mini status-offline-footer';
                fText.innerText = holidayMessage;
            }
            return;
        }

        // 2. ЗВИЧАЙНИЙ ГРАФІК
        const isWorking = (day >= 1 && day <= 6) && (hour >= 9 && hour < 18);

        if (mCont && mText) {
            mCont.className = isWorking ? 'status-container status-online' : 'status-container status-offline';
            mText.innerText = isWorking ? "Зараз працюємо • На зв'язку" : "Зараз неробочий час";

            if (statusBtn) {
                statusBtn.style.backgroundColor = "";
                statusBtn.style.boxShadow = "";
            }
        }

        if (fCont && fText) {
            fCont.className = isWorking ? 'status-mini status-online-footer' : 'status-mini status-offline-footer';
            fText.innerText = isWorking ? "Працюємо" : "Зараз неробочий час";
        }
    }

    updateWorkStatus();
    setInterval(updateWorkStatus, 60000);
}