$( document ).ready(function() {
  // MOBILE MENU
  var menuButton = $('.menu-button'),
      iconBtn = $('.fa-bars'),
      mobileMenu = $('.navMenu');
  
  $(menuButton).click(function(){
    
    if( !$(this).hasClass('is-open') ) {
      $(this).addClass('is-open');
      $(iconBtn).addClass('fa-times');
      $(mobileMenu).addClass('active'); 
    } else {
      $(this).removeClass('is-open');
      $(mobileMenu).removeClass('active');
      $(iconBtn).addClass('fa-bars');
      $(iconBtn).removeClass('fa-times');
    }
    return false;
  });
});