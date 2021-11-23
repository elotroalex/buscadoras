


$(document).ready(function() {


    var pos_a = $('#directorio').offset().top - 100;
  	var pos_b = $('#mapas').offset().top - 100;


    $('a.scroll').click(function() {

    		var elementClicked = $(this).attr('href');

    		if (elementClicked=="#home") {
    			var destination =0;
    		} else {
    			var destination = $(elementClicked).offset().top;
    		}
        $('html:not(:animated),body:not(:animated)').animate({ scrollTop: destination}, 700);
    		return false;
      });


});
