$(document).ready(function () {

    //  // Функція висування модалки після загрузки сторінки
    $(`#modalBankInfo`).animate({
        right: `-39%`
    }, 1000);
    $(`#modalBankInfo`).animate({
        right: `-100%`

    }, 1000);

    setTimeout(ifNewsModalDisplayNone, 1000);  //Функція з документу setTimeoutFunc яка після закриття модалки з новинами запускає
    // мигання кнопки з новими банківськими реквізитами
    // setTimeout() робить затримку виконнаня функції, поки модалка з реквізитами не заїде на місце



    $(`.navWrap li`).mouseover(function () {
        $(this).css({
            background: `#5598a1`,
            transition: `0.25s linear`
        });
        $(this).find(`a`).css({
            color: `#F5F5F5`
        })
    });
    $(`.navWrap li`).mouseout(function () {
        $(this).css({
            background: ``,
            transition: `0.4s linear`
        });
        $(this).find(`a`).css({
            color: ``
        })
    });
    $(`.nawLi a[href="#location"]`).click(function () {
        $(`.mainModalContainer`).css({
            display: `block`
        });
        $(`.menuNameTariffs`).css({
            display: `flex`
        });
    });

    $(`.firstDocksWrapper div a img, .secondDocksWrapper div a img, .thirdDocksWrapper div a img`).mouseover(function () {
        $(this).animate({
            top: 0
        }, 500)

    });
    $(`.firstDocksWrapper div a img, .secondDocksWrapper div a img, .thirdDocksWrapper div a img`).mouseout(function () {
        $(this).animate({
            top: -134
        }, 500)


    });


    // Поява і зникання значка для прокрутки сторінки

    var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
    var delay = 1000; // Задержка прокрутки

    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });


    // Плавний перехід по якроним посиланням

    $('a[href^="#"]').on('click', function (event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({scrollTop: dn}, 2000);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });


    // Переміщення карти при натисканні на назву населеного пункту


    // $(`#yasinya`).click(function () {
    //     initMap(48.259546, 24.345051, 48.259546, 24.345051, 14, `Ясіня`);
    // });
    // $(`#vydrychka`).click(function () {
    //     initMap(48.052979, 24.335715, 48.052979, 24.335715, 14, `Видричка`);
    // });
    // $(`#lazeshchyna`).click(function () {
    //     initMap(48.273194, 24.411629, 48.273194, 24.411629, 14, `Лазещина`);
    // });
    // $(`#roztoky`).click(function () {
    //     initMap(48.067556, 24.298073, 48.067556, 24.298073, 14, `Розтоки`);
    // });
    // $(`#luhy`).click(function () {
    //     initMap(48.063492, 24.437618, 48.063492, 24.437618, 14, `Луги`);
    // });
    // $(`#verVodyane`).click(function () {
    //     initMap(48.005118, 23.962705, 48.005118, 23.962705, 14, `Розтоки`);
    // });
    // $(`#bohdan`).click(function () {
    //     initMap(48.039254, 24.345628, 48.039254, 24.345628, 14, `Розтоки`);
    // });
    // $(`#chTysa`).click(function () {
    //     initMap(48.314448, 24.324257, 48.314448, 24.324257, 14, `Розтоки`);
    // });


    // Клік на кнопку тарифи (біля населеного пункту)

    $(`.tariffs1`).click(function () {
        $(`.mainModalContainer`).css({
            display: `block`
        });
        $(`.menuNameTariffs`).css({
            display: `flex`
        });
    });

    $(`#closeModal`).click(function () {
        $(`.mainModalContainer`).css({
            display: `none`
        });
        $(`.menuNameTariffs`).css({
            display: `none`
        });
        $(`.menuNameTariffs2`).css({
            display: `none`
        });


    });
    $(`.mainModalContainer`).click(function () {
        $(`.menuNameTariffs`).css({
            display: `none`
        });
        $(`.menuNameTariffs2`).css({
            display: `none`
        });
        $(this).css({
            display: `none`
        })
    });


// Кнопка закрити на модалці з банківськими реквізитами
    $(`#closeBankingModal`).click(function () {
        $(`.modalBankInfo`).animate({
            right: `-100%`
        }, 500);
        $(`.buttonShowModal`).animate({
            top: `45%`
        }, 500)
    });
    $(`.buttonShowModal`).click(function () {
        $(this).animate({
            top: `-300px`
        }, 500);
        $(`.modalBankInfo`).animate({
            right: `0px`,
        }, 500)
    });

    //Кнопка закриття модалки з новинами
    $(`#closeNewsModal`).click(function () {
        $(`.modalNewsInfo`).css({
            display: `none`
        });
        $(`.modalNewsInfoWrapper`).css({
            display: `none`
        });
        ifNewsModalDisplayNone();  //Функція з документу setTimeoutFunc яка після закриття модалки з новинами запускає
        // мигання кнопки з новими банківськими реквізитами

    });

    $(`.modalNewsInfoWrapper`).click(function () {
        $(this).css({
            display: `none`
        });
        $(`.modalNewsInfo`).css({
            display: `none`
        });
        ifNewsModalDisplayNone();  //Функція з документу setTimeoutFunc яка після закриття модалки з новинами запускає
        // мигання кнопки з новими банківськими реквізитами
    });

    // Прокрутка кнопки закривання модалки, при наведенні
    $(`#closeBankingModal`).mouseover(function () {
        $(this).animate({deg: 180},
            {
                duration: 500,
                step: function (now) {
                    $(this).css({transform: `rotate(` + now + `deg)`});
                }
            });

    });
    $(`#closeBankingModal`).mouseout(function () {
        $(this).animate({deg: 0},
            {
                duration: 500,
                step: function (now) {
                    $(this).css({transform: `rotate(` + now + `deg)`});
                }
            });

    });

    $(`#closeNewsModal`).mouseover(function () {
        $(this).animate({deg: 180},
            {
                duration: 500,
                step: function (now) {
                    $(this).css({transform: `rotate(` + now + `deg)`});
                }
            });

    });
    $(`#closeNewsModal`).mouseout(function () {
        $(this).animate({deg: 0},
            {
                duration: 500,
                step: function (now) {
                    $(this).css({transform: `rotate(` + now + `deg)`});
                }
            });

    });


    // Рух кнопки "нові реквізити", при наведенні
    $(`.buttonShowModal`).mouseover(function () {
        $(this).animate({
            right: `-189px`
        }, 150)

    });
    $(`.buttonShowModal`).mouseout(function () {
        $(this).animate({
            right: `-195px`
        }, 150)

    });
// Висування меню на мобільній версії сайту
    $(`.phoneMenuButt`).click(function () {

        $(`.socialLinkHeaderPhone, .navWrap`).toggle(200, function () {
        });
        $(`.buttonShowModal`).toggleClass(`buttonShowModalHide`);
    });
    $(`.navListPhoneHeader nav ul li`).click(function () {
        $(`.socialLinkHeaderPhone, .navWrap`).toggle(200, function () {

        })
    });




});




