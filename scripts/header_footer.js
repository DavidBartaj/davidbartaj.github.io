/**
 * Модуль для динамічного завантаження Хедера та Футера
 */
export async function initComponentsLoader() {
    // Визначаємо, чи знаходиться поточна сторінка у підпапці (наприклад, /pages/...)
    const isSubPage = window.location.pathname.includes('/pages/');
    const basePath = isSubPage ? '../' : './';

    const components = [
        {id: 'header-placeholder', file: 'pages/header.html'},
        {id: 'footer-placeholder', file: 'pages/footer.html'},
        {id: 'pay_btn-placeholder', file: 'pages/pay_btn.html'},
        {id: 'modal-placeholder', file: 'pages/modal.html'}
    ];

    for (const component of components) {
        const placeholder = document.getElementById(component.id);
        if (!placeholder) continue;

        try {
            const response = await fetch(basePath + component.file);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            let html = await response.text();

            // Автоматичне виправлення шляхів, якщо ми в підпапці
            if (isSubPage) {
                // 1. Виправляємо посилання на головну та інші сторінки
                html = html.replace(/href="index.html"/g, 'href="../index.html"');
                html = html.replace(/href="#tariffs-light-section"/g, 'href="../index.html#tariffs-light-section"');
                html = html.replace(/href="#coverage"/g, 'href="../index.html#coverage"');
                html = html.replace(/href="pages\/TV\.html"/g, 'href="TV.html"');
                html = html.replace(/href="pages\/pay\.html"/g, 'href="pay.html"');
                html = html.replace(/href="documents\/Oferta_MT\.docx"/g, 'href="../documents/Oferta_MT.docx"');
                html = html.replace(/href="documents\/Oferta_D\.docx"/g, 'href="../documents/Oferta_D.docx"');
                html = html.replace(/href="documents\/Oferta_O\.docx"/g, 'href="../documents/Oferta_O.docx"');
                html = html.replace(/href="documents\/Protocol_vimiruvania_UDCR\.pdf"/g, 'href="../documents/Protocol_vimiruvania_UDCR.pdf"');
                html = html.replace(/href="documents\/zayava_MT\.doc"/g, 'href="../documents/zayava_MT.doc"');

                // 2. Виправляємо шляхи до зображень та іконок

                html = html.replace(/src="img\/Logo_NewDesign\.png/g, 'src="../img/Logo_NewDesign.png');
                html = html.replace(/src="assets\//g, 'src="../assets/');
                html = html.replace(/src="assets\//g, 'src="../assets/');
            }

            placeholder.innerHTML = html;
        } catch (err) {
            console.error(`Помилка завантаження компонента ${component.file}:`, err);
        }
    }

    console.log("Components loaded and paths adjusted.");
}