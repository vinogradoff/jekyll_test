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
	particlesJS('js_hero_bg', {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#7c7d7d"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.68,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#7c7d7d",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
  },
  "retina_detect": true
});

})(jQuery);