


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




  if($(window).width() < 640){
    var view = "80%";
  } else { view = "280px" }


  var turn = 1;
  $('.hamburger').click(function() {
      $(this).toggleClass("activo");
      if (turn==1) {
        $(".nav-menu").fadeToggle("slow", function(){
          $(".nav-p, #bus").hide();
          $("sidebar").animate({
            width: "80px",
          }, 1200, function(){
            turn=0;
          });
        });

      } else if (turn==0) {
        $("sidebar").animate({
          width: "view",
        }, 900, function(){
          $(".nav-menu").fadeToggle("slow", function(){
            turn=1;
            $(".nav-p, #bus").fadeIn(600);
          });
        });
      }
  }); /* / hamburger */



});
