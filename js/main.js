$(document).ready(function(){
  $('.intro-slider').slick({
    arrows: false,
  });

  $('.gallery-slider').slick({
    arrows: false,
    infinite: true,
    fade: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
