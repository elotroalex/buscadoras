



jQuery(function($) {

var doAnimations = function() {
  var offset = $(window).scrollTop() + $(window).height(),
  $animatables = $('.animatable');

	$animatables.each(function(i) {
    var $animatable = $(this);
    if (($animatable.offset().top + $animatable.height() + 50) < offset) {
      if (!$animatable.hasClass('animate-in')) {
        $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
      }
		} else if (($animatable.offset().top + $animatable.height() + 50) > offset) {
      if ($animatable.hasClass('animate-in')) {
        $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
      }
    }
  });



/* ---------------------------- */
if (($('div#quote').offset().top + $('div#quote').height() + 50) < offset) {
  $('div.bg_image').fadeIn(900);
} else {
  $('div.bg_image').fadeOut(300);
}
/* ---------------------------- */


};


$(window).on('scroll', doAnimations);
$(window).trigger('scroll');
});







$(document).ready(function() {


  var turn = 1;
  $('.hamburger').click(function() {
      $(this).toggleClass("activo");
      if (turn==1) {
        $("sidebar").animate({
          height: "100%",
        }, 600, function(){
          $("nav.navbar").fadeIn(200);
          $(".nav-p").fadeIn(400);
          turn=0;
        });
      } else {
        $("nav.navbar, .nav-p").fadeOut(200, function(){
          $("sidebar").animate({
            height: "48px",
          }, 600, function(){
              turn=1;
          });
        });
      }
  });


if ($(window).width()<768) {
      $('ul.nav-menu li a').click(function() {
        $('.hamburger').toggleClass("activo");
        $("nav.navbar, .nav-p").fadeOut(200, function(){
          $("sidebar").animate({
            height: "48px",
          }, 600, function(){
              turn=1;
          });
        });
      });
}










});
