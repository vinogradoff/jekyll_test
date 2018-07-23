(($) => {

	let $body = $('body')
		, $menuButton = $('.toggle-menu-button')
		, menuShowClass = 'is-menu-show';

/* init menu open */
	$menuButton.on('click', function() {
		$body.toggleClass(menuShowClass);
	});

	$(document).click( function(event){
		if( $(event.target).closest('.header').length )
			return;
		$body.removeClass(menuShowClass);
	});


/* Scroll HERO block */
	$body.on('click', '#hero_scroll', function(event) {
		event.preventDefault();
		let scrollHeight = $(this).parents('.hero').innerHeight();
		window.scroll({top: scrollHeight, behavior: 'smooth'});
	});

/* scroll revel blocks*/
	console.log('test');

	window.sr = ScrollReveal();
	sr.reveal('.bottom-reveal', {
		viewOffset: { top: 64 },
		duration: 800
	});

	sr.reveal('.left-reveal', {
		origin: 'left',
		viewOffset: { top: 64 },
		duration: 800
	});

	sr.reveal('.right-reveal', {
		origin: 'right',
		viewOffset: { top: 64 },
		duration: 800
	});

})(jQuery);