//sider
$(document).ready(function () {
  
  $('.frame3 .slider').slick({
    arrows: false,
    dots: false,
    rows: 1,
    adaptiveHeight: true,
    infinite: true,
    slidesToShow: 4,
    autoplay: false,
    speed: 500,
    easing: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1090, settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768, settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 570, settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.frame9 .slider').slick({
    arrows: false,
    dots: true,
    rows: 1,
    infinite: false,
    slidesToShow: 1,
    autoplay: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    autoplaySpeed: 5000,
    speed: 1000,
    easing: 'ease-in-out',
  });
});
$('.frame11 .slider').slick({
  arrows: true,
  rows: 1,
  infinite: false,
  slidesToShow: 2,
  autoplay: false,
  adaptiveHeight: true,
  speed: 1000,
  easing: 'ease-in-out',
  responsive: [
    {
      breakpoint: 768, settings: {
        slidesToShow: 1,
      }
    },
  ]
})
;
//tango
$('.slick-next').empty();
$('.slick-prev').empty();
$('.slick-next').addClass('fa fa-angle-right');
$('.slick-prev').addClass('fa fa-angle-left');