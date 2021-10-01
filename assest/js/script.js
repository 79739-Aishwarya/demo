$('.banner_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay:false,
    fade:true,
    speed:1000,
    autoplayspeed:1000,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $('.gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay:true,
    autoplayspeed:1000,
    dots:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });            