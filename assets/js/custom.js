(function($) {
	'use strict';
	
	// Интерактив меню
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-navbar').addClass('menu-shrink');
		} else {
			$('.main-navbar').removeClass('menu-shrink');
		}
	});	
	
	$('.navbar-nav li a').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1000);
		e.preventDefault();
	});

	$(document).on('click','.navbar-collapse.show',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});	


})(jQuery);