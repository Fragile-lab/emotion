$(document).ready(function () {
    $('.header__burger').click(function(e) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.frame3__button a').hover(function(e) {
        $('.frame3__tip').addClass('open');
    })
});