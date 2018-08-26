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

/* JS Button scroll */
	$body.on('click', '.js_scroll_button', function(event) {
		event.preventDefault();
		let target = $(this).data('target');

		if(target) {
			let position = $(target).offset().top - 64;  /*64px is header height*/

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

/* particlesJS */
	particlesJS.load('js_hero_bg', '/js/vendor/particlesjs-config.json', function() {
		// console.log('callback - particles.js config loaded');
	});

})(jQuery);