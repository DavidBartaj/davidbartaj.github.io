
// --- 3. СТАТУС ЧАСУ ---

export function initWorkTime() {

    function updateWorkStatus() {
        const mText = document.getElementById('status-text');
        const mCont = document.getElementById('status-container');
        const fText = document.getElementById('footer-status-text');
        const fCont = document.getElementById('footer-status-container');

        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        const isWorking = (day >= 1 && day <= 5) && (hour >= 9 && hour < 18);

        if (mCont && mText) {
            mCont.className = isWorking ? 'status-container status-online' : 'status-container status-offline';
            mText.innerText = isWorking ? "Зараз працюємо • На зв'язку" : "Зараз неробочий час";
        }
        if (fCont && fText) {
            fCont.className = isWorking ? 'status-mini status-online-footer' : 'status-mini status-offline-footer';
            fText.innerText = isWorking ? "Працюємо" : "Зараз неробочий час";
        }
    }
    updateWorkStatus();
    setInterval(updateWorkStatus, 60000);


    console.log("Work time script loaded");
}
