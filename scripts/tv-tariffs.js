async function initTariffCounters() {
    try {
        const response = await fetch('../data/channels_list.json');
        const data = await response.json();

        const getChannelWord = (n) => {
            const l2 = n % 100;
            const l1 = n % 10;
            if (l2 >= 11 && l2 <= 14) return 'каналів';
            if (l1 === 1) return 'канал';
            if (l1 >= 2 && l1 <= 4) return 'канали';
            return 'каналів';
        };

        const getCleanCount = (index) => {
            const tariff = data[index];
            if (!tariff || !tariff.channels) return 0;
            const seen = new Set();
            const filtered = Object.values(tariff.channels).filter(ch => {
                if (ch.ganre_id === "33") return false;
                const name = ch.name.toLowerCase().trim();
                if (seen.has(name)) return false;
                seen.add(name);
                return true;
            });
            return Math.max(0, filtered.length - 10);
        };

        const updateUI = (id, count) => {
            const el = document.getElementById(id);
            if (!el) return;

            const word = getChannelWord(count);

            // Вставляємо структуру один раз максимально жорстко
            el.innerHTML = `${count} <span class="count-label">${word}</span>`;

            // Створюємо спостерігача, який не дасть видалити спан
            const observer = new MutationObserver(() => {
                if (!el.querySelector('.count-label')) {
                    el.innerHTML = `${count} <span class="count-label">${word}</span>`;
                }
            });
            observer.observe(el, { childList: true });
        };

        // Запускаємо
        updateUI('count-ua-efir', getCleanCount("1"));
        updateUI('count-vip-hd', getCleanCount("2"));
        updateUI('count-premium', getCleanCount("3"));

    } catch (e) { console.error(e); }
}

window.addEventListener('load', initTariffCounters);