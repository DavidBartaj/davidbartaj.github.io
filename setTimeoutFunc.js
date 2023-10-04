let i = 0;

function ifNewsModalDisplayNone() {

    let interval = setInterval(function () {
        let modal = document.getElementById(`butModalBank`);

        function modalBankColorRed() {


            modal.className = `buttonShowModalRed`
        }

        modalBankColorRed();

        function modalBankColorNormal() {

            modal.className = `buttonShowModal`;

        }

        setTimeout(modalBankColorNormal, 500);
        i++;
        if (i >= 2) {
            clearInterval(interval)
        }


    }, 1000);

}



