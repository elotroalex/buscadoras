
jQuery(function($) {

var doAnimations = function() {
  var offset = $(window).scrollTop() + $(window).height(),
  $animatables = $('.animatable');
  $animatables.each(function(i) {
    var $animatable = $(this);
    if (($animatable.offset().top + $animatable.height() - 200) < offset) {
      if (!$animatable.hasClass('animate-in')) {
        $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
      }
		} else if (($animatable.offset().top + $animatable.height() - 200) > offset) {
      if ($animatable.hasClass('animate-in')) {
        $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
      }
    }
  });
  var scroll = $(window).scrollTop();
  if (scroll >= 750) {
    $('#top').fadeIn();
  } else {
    $('#top').fadeOut();
  }
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


$('.start').click(function() {
  $("html:not(:animated),body:not(:animated)").animate({ scrollTop: 800}, 800);
  return false;
});






$('#top').click(function(){
  $("html:not(:animated),body:not(:animated)").animate({scrollTop:0}, 500);
  return false;
});



}); /* DOCUMENT READY */






$(window).scroll(function() {
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  var scroll = $window.scrollTop() + ($window.height() / 3);
  $panel.each(function () {
    var $this = $(this);
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
      $body.addClass('color-' + $(this).data('color'));
    }
  });
}).scroll();
