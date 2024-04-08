$(document).ready(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.frame3__button').hover(function (e) {
        $('.frame3__button').addClass('open');
    });
});