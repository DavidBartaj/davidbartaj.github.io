export const initChannels = async () => {
    const grid = document.getElementById('channelsGrid');
    const searchInput = document.getElementById('channelSearch');
    const tariffContainer = document.getElementById('categoryFilters');
    const genreContainer = document.getElementById('genreFilters');
    const loading = document.getElementById('loading');

    if (!grid || !tariffContainer || !genreContainer) return;

    const GENRE_MAP = {
        "36": "Національні",
        "2": "Кіно",
        "1": "Інформаційні",
        "4": "Спортивні",
        "6": "Дитячі",
        "7": "Розважальні",
        "5": "Пізнавальні",
        "9": "Музичні",
        "39": "Регіональні"
    };

    const GENRES_ORDER = [
        "Усі канали", "Національні", "Кіно", "Інформаційні",
        "Спортивні", "Дитячі", "Розважальні", "Пізнавальні",
        "Музичні", "Регіональні"
    ];

    try {
        const response = await fetch('../data/channels_list.json');
        const data = await response.json();

        let allChannels = [];
        const tariffsSet = new Set();

        Object.values(data).forEach(tariff => {
            if (tariff.name && tariff.name !== "UA:Новини") {
                tariffsSet.add(tariff.name);
                if (tariff.channels) {
                    Object.values(tariff.channels).forEach(ch => {
                        allChannels.push({
                            ...ch,
                            tariffName: tariff.name,
                            genreName: GENRE_MAP[ch.ganre_id] || "Інше"
                        });
                    });
                }
            }
        });

        if (loading) loading.style.display = 'none';

        const sortedTariffs = Array.from(tariffsSet).sort();
        let currentTariff = sortedTariffs[0];
        let currentGenre = "Усі канали";

        // НОВА ЛОГІКА: Оновлення лічильника в блоці tv-main-info
        const updateInfoBlock = (count) => {
            const infoBlock = document.querySelector('.tv-main-info');
            if (!infoBlock) return;

            // Шукаємо заголовок, щоб оновити назву тарифу (якщо треба)
            const title = infoBlock.querySelector('h2') || infoBlock.querySelector('h1');
            if (title) title.textContent = `Тариф "${currentTariff}"`;

            // Шукаємо або створюємо лічильник
            let counterWrapper = infoBlock.querySelector('.channels-stat');
            if (!counterWrapper) {
                counterWrapper = document.createElement('p');
                counterWrapper.className = 'channels-stat';
                infoBlock.appendChild(counterWrapper);
            }

            counterWrapper.innerHTML = `Кількість каналів: <span id="channels-counter">${count}</span>`;
        };

        const renderTariffFilters = () => {
            tariffContainer.innerHTML = '';
            sortedTariffs.forEach(name => {
                const btn = document.createElement('button');
                btn.className = `cat-btn ${name === currentTariff ? 'active' : ''}`;
                btn.textContent = name;
                btn.onclick = () => {
                    currentTariff = name;
                    renderTariffFilters();
                    applyFilters();
                };
                tariffContainer.appendChild(btn);
            });
        };

        const renderGenreFilters = () => {
            genreContainer.innerHTML = '';
            GENRES_ORDER.forEach(genre => {
                const btn = document.createElement('button');
                btn.className = `genre-btn ${genre === currentGenre ? 'active' : ''}`;
                btn.textContent = genre;
                btn.onclick = () => {
                    currentGenre = genre;
                    renderGenreFilters();
                    applyFilters();
                };
                genreContainer.appendChild(btn);
            });
        };

        const renderGrid = (list) => {
            // Оновлюємо лічильник перед малюванням сітки
            updateInfoBlock(list.length);

            if (list.length === 0) {
                grid.innerHTML = '<div class="no-results">Каналів не знайдено</div>';
                return;
            }
            grid.innerHTML = list.map(ch => `
                <div class="channel-card">
                    <div class="channel-logo-wrapper">
                        <img src="${ch.logo}" class="channel-logo" loading="lazy" alt="${ch.name}">
                    </div>
                    <span class="channel-name">
                        ${ch.name} ${ch.hd === "1" ? '<span class="hd-badge">HD</span>' : ''}
                    </span>
                </div>
            `).join('');
        };

        const applyFilters = () => {
            const query = searchInput.value.toLowerCase().trim();

            const filtered = allChannels.filter(ch => {
                const matchesTariff = ch.tariffName === currentTariff;
                const matchesGenre = currentGenre === "Усі канали" || ch.genreName === currentGenre;
                const matchesSearch = ch.name.toLowerCase().includes(query);

                return matchesTariff && matchesGenre && matchesSearch;
            });

            renderGrid(filtered);
        };

        searchInput.oninput = () => applyFilters();

        renderTariffFilters();
        renderGenreFilters();
        applyFilters();

    } catch (error) {
        console.error("Помилка:", error);
        if (loading) loading.textContent = "Помилка завантаження даних.";
    }

    // Кнопка нагору (залишаємо без змін)
    const scrollBtn = document.getElementById("scrollToTop");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add("show");
            } else {
                scrollBtn.classList.remove("show");
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
};

initChannels();