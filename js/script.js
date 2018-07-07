(($) => {

	//init menu open
	let $body = $('body')
		, $menuButton = $('.toggle-menu-button')
		, menuShowClass = 'is-menu-show';

	$menuButton.on('click', function() {
		$body.toggleClass(menuShowClass);
	});

	$(document).click( function(event){
		if( $(event.target).closest('.header').length )
			return;
		$body.removeClass(menuShowClass);
	});

	$body.on('click', '#hero_scroll', function(event) {
		event.preventDefault();
		let scrollHeight = $(this).parents('.hero').innerHeight();
		window.scroll({top: scrollHeight, behavior: 'smooth'});
	});

})(jQuery);