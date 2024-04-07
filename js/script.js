$(document).ready(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.frame3__button').hover(function (e) {
        $('.frame3__button').addClass('open');
    });
    $(".accordion dd").hide().prev().click(function() {
        $(this).parents(".accordion").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
    $('.slider').slick({
        arrows: false,
        dots: true,
        rows: 2,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 5000,
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