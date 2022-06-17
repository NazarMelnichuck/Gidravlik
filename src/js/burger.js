$(document).ready(function () {
    $('.header-burger').click(function (active) {
        $('.header-burger, .header-bottom__nav, .header__top, .header__bottom').toggleClass('active');
        $('body').toggleClass('lock');

        $('.header-burger, .header-bottom__nav, .header__top, .header__bottom').removeClass('hide');
        $('body').removeClass('hide');

    });

    $('.nav-menu').click(function (hide) {
        $('.header-burger, .header-bottom__nav, .header__top, .header__bottom').toggleClass('hide');
        $('body').toggleClass('hide');
        $('body').toggleClass('lock');

        $('.header-burger, .header-bottom__nav, .header__top, .header__bottom').removeClass('active');
        $('body').removeClass('active');
    });
});