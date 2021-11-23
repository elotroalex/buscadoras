


jQuery(function($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');

    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);

      // Items that are "above the fold"
			if (($animatable.offset().top + $animatable.height() + 50) < offset) {

        // Item previously wasn't marked as "above the fold": mark it now
        if (!$animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-out').css('top', $animatable.css('top')).addClass('animate-in');
        }

			}

      // Items that are "below the fold"
      else if (($animatable.offset().top + $animatable.height() + 50) > offset) {

        // Item previously wasn't marked as "below the fold": mark it now
        if ($animatable.hasClass('animate-in')) {
          $animatable.removeClass('animate-in').css('top', $animatable.css('top')).addClass('animate-out');
        }

      }

    });

	};

  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});







$(document).ready(function() {



/*
  $('.nav-menu li').click(function() {
    var elementClicked = $(this).attr('href');
    if (elementClicked=="#home") {
      var destination =0;
    } else {
      var destination = $(elementClicked).offset().top;
    }
    $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination}, 700);
    return false;
  });
*/







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


/* ************+
  var turn = 1;
  $('.hamburger').click(function() {
      $(this).toggleClass("activo");
      if (turn==1) {
        $(".nav-menu").fadeToggle(200, function(){
          $(".nav-p, #bus").hide();
          $("sidebar").animate({
            width: "60px",
          }, 600, function(){
            turn=0;
          });
        });

      } else {
        $("sidebar").animate({
          width: "280px",
        }, 600, function(){
          $(".nav-menu").fadeToggle(600, function(){
            turn=1;
            $(".nav-p, #bus").fadeIn(600);
          });
        });
      }
  });
  ************* */



});
