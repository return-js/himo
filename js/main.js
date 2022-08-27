$(document).ready(function(){
  $('.bike-slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
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
