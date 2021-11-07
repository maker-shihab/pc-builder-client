$( document ).ready(function() {
  // MOBILE MENU
  $('.mobile_bars').on('click', function() {
    $(".mobile_header_menu").addClass("open");
    $(".app-header-nav").addClass("open");
  });
  
  $('.mobile_times').on('click', function() {
    $(".mobile_header_menu").removeClass("open");
    $(".app-header-nav").removeClass("open");
  });
});
// Carousel 
$( document ).ready(function() {
  $('.eventSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
});