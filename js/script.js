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

/* JS Button scroll */
	$body.on('click', '.js-scroll-button', function(event) {
		event.preventDefault();
		let target = $(this).data('target');

		console.log(target);

		if(target) {
			let position = $(target).offset().top - 64;  /*64px is header height*/
			console.log(position);

			$("body, html").animate({
				scrollTop: position
			}, 1000 );
		}
	});


/* scroll revel blocks*/
	window.sr = ScrollReveal();
	sr.reveal('.bottom-reveal', {
		viewOffset: { top: 64 },
		duration: 800
	});

/* init js slider */
	$('.js-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});

})(jQuery);