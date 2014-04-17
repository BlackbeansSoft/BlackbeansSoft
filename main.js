$(function () {

  var scroll_function = function() {
    var navbar = $('.navbar');
    var offset = $(window).scrollTop();

    if (offset <= 10  ) {
      navbar.animate({
        top : -86
      }, 20);
    } else {
      navbar.animate({
        top : 0
      }, 200);
    }
  };

  $(window).scroll(scroll_function);
  scroll_function();

  $('.btn-scroll-down').click(function() {
    $('html, body').animate({scrollTop: 672}, 500);
  });
})