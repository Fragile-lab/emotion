$(document).ready(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.frame3__button').hover(function (e) {
        $('.frame3__button').addClass('open');
    });
    $('.frame5__price11').click(function (e) {
        $('.frame5__info11').toggleClass('open');
    });
    $('.frame5__price12').click(function (e) {
        $('.frame5__info12').toggleClass('open');
    });
    $('.slider').slick({
        arrows: false,
        dots: true,
        rows: 2,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 50000,
        speed: 1000,
        easing: 'ease-in-out',
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        responsive: [
            {
                breakpoint: 769, settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});