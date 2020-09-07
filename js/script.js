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


   // Sticky Nav
   var menu_top_offset = $("header").offset().top;

   $(window).on("scroll", function () {
     var scrollSize = $(window).scrollTop();
 
     if (scrollSize > menu_top_offset) {
       $("header").addClass("sticky-header");
       $("body").css("margin-top", "71px");
     } else {
       $("header").removeClass("sticky-header");
       $("body").css("margin-top", "0");
     }
   });

  // Smooth Scroll
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  
});
