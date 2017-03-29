// Responsive menu code here...
(function($){

	'use strict';

	const $body = $('body');
	const $btn = $('.btn-menu');

	$btn.click(function(){
		$body.toggleClass('show-mobile-menu');
	});
		
	
})(jQuery);