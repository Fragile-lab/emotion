$(document).ready(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
//general