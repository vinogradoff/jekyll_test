(($) => {

	let $body = $('body')
		, $menuButton = $('.toggle-menu-button')
		, $langSwich = $('.lang_switch')
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

/* init lang_switch open */
	$langSwich.on('click', function() {
		$(this).find('.lang_switch-dropdown').slideToggle()
		.end().toggleClass('is-open');
	});

	$(document).click( function(event){
		if( $(event.target).closest('.lang_switch').length )
			return;
		$langSwich.find('.lang_switch-dropdown').slideUp()
		.end().removeClass('is-open');
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

})(jQuery);