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