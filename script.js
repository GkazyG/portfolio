(function($) {
	"use strict";

	// Parallax
	function scrollBanner() {
		$(document).on('scroll', function() {
			var scrollPos = $(this).scrollTop();
			$('.parallax-fade-top').css({
				'top': (scrollPos / 2) + 'px',
				'opacity': 1 - (scrollPos / 700)
			});
			$('.parallax-00').css({
				'top': (scrollPos / -3.5) + 'px'
			});
			$('.parallax-01').css({
				'top': (scrollPos / -2.8) + 'px'
			});
			$('.parallax-top-shadow').css({
				'top': (scrollPos / -2) + 'px'
			});
		});
	}
	scrollBanner();

	// Page cursors
	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");

	document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
		t.style.left = n.clientX + "px",
		t.style.top = n.clientY + "px",
		e.style.left = n.clientX + "px",
		e.style.top = n.clientY + "px",
		i.style.left = n.clientX + "px",
		i.style.top = n.clientY + "px"
	});

	var t = document.getElementById("cursor"),
		e = document.getElementById("cursor2"),
		i = document.getElementById("cursor3");

	function addHoverClass() {
		e.classList.add("hover");
		i.classList.add("hover");
	}

	function removeHoverClass() {
		e.classList.remove("hover");
		i.classList.remove("hover");
	}

	removeHoverClass();

	var hoverTargets = document.querySelectorAll(".hover-target");
	for (var a = hoverTargets.length - 1; a >= 0; a--) {
		addMouseOverListener(hoverTargets[a]);
	}

	function addMouseOverListener(target) {
		target.addEventListener("mouseover", addHoverClass);
		target.addEventListener("mouseout", removeHoverClass);
	}

	// Scroll back to top
	$(document).ready(function() {
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').addClass('active-arrow');
			} else {
				jQuery('.scroll-to-top').removeClass('active-arrow');
			}
		});
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({
				scrollTop: 0
			}, duration);
			return false;
		});
	});

	// Page transition
	$(document).ready(function() {
		$('.transition-page').on('click', function(e) {
			e.preventDefault();
			var url = this.getAttribute("href");
			if (url != "#") {
				$(".transition-overlay").toggleClass("show");
				setTimeout(function() {
					window.location = url;
				}, 1000);
			}
		});
	});

	// Preloader
	$(window).on('load', function() {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function() {
				$(this).remove();
			});
		}
	});

	// Portfolio filter
	$(window).on('load', function() {
		if ($('.portfolio-container').length) {
			var $container = $('.portfolio-container');
			$container.isotope({
				filter: '*',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
			$('.portfolio-filter').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$container.isotope({
					filter: filterValue
				});
				$('.portfolio-filter button').removeClass('active');
				$(this).addClass('active');
			});
		}
	});

	// Portfolio popup
	$(document).ready(function() {
		$('.portfolio-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out'
			}
		});
	});

	// Testimonials carousel
	$(document).ready(function() {
		$('.testimonials-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: false,
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				}
			}
		});
	});

	// Clients carousel
	$(document).ready(function() {
		$('.clients-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: false,
		});
	});

	document.querySelector('hamburger').addEventListener('click', () => {
		document.querySelector('.nav-links').classList.toggle('show');
	});
	function toggleTheme() {
    if (document.body.classList.contains("white"))
        document.body.classList.remove("white");
    else
        document.body.classList.add("white");
}
$(document).ready(function() {
    $('nav a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800); // Adjust the duration (in milliseconds) for slower or faster scroll
      }
    });
  });
// ---
})(jQuery);
