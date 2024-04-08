$(document).ready(function () {
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
