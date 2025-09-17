$(document).ready(function () {
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







    // Кнопка розгортання списку каналів

    $(`.scrollDown1`).click(function () {
        $(`.contentCTV1`).animate({
            height: `toggle`
        }, 1000);
        $(this).toggleClass(`scrollDown1anim`)
    });
    $(`.scrollDown2`).click(function () {
        $(`.contentCTV2`).animate({
            height: `toggle`
        }, 1000);
        $(this).toggleClass(`scrollDown2anim`)
    });
    $(`.scrollDown3`).click(function () {
        $(`.contentCTV3`).animate({
            height: `toggle`
        }, 1000);
        $(this).toggleClass(`scrollDown3anim`)
    })
});




