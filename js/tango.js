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
});
//tango