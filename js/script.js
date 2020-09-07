$(document).ready(function () {
  "use strict";
  
  $(".client-slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    prevArrow: '<i class="fas fa-long-arrow-alt-left arrow arrow-left"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right arrow arrow-right"></i>',
  });
  new WOW().init();
  
});
