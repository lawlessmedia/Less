// fade out hero-image after scrolling down a bit
(function($) {
    var header = $(".hero-image");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 50) {
            header.addClass("hero-image-hide");
        } else {
            header.removeClass("hero-image-hide");
        }
    });
}(jQuery));

// fitvids to make all videos full width http://fitvidsjs.com/  
(function($) {
	"use strict";
	$(function() {
		$('.the-content').fitVids();	
	});
}(jQuery));