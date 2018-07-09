$(document).ready(function () {


	$(document).ready(function() {
	   $('.carousel').carousel('pause');
	});

	// set w&h
	var layerWidth = $(window).width();
	var layerHeight = $(window).height();
	$('.fullpage-row').css({
		'width': layerWidth,
		'height': layerHeight
	})

	$('.navbar-toggle').click(function(e){
		$('.row-offcanvas').toggleClass('active')
		$('body').toggleClass('nav-open');
		e.stopPropagation();
	});

	$('.navmenu-nav a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length){
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				$('.navmenu-nav a').parent().removeClass('active');
				$(this).parent().addClass('active');

				return false;
			}
		}
	});

	$('.navmenu-brand').click(function(e){
		e.preventDefault();
		var body = $("html, body");
			body.animate({scrollTop:0}, '1000', function(){
		});
	});

	// to top right away
	if ( window.location.hash ){
		$('body').addClass('nav-open');
		scroll(0,0);
	}
	// void some browsers issue
	setTimeout( function() { scroll(0,0); }, 1);

	// *only* if we have anchor on the url
	if(window.location.hash) {

		// smooth scroll to the anchor id
		$('html, body').animate({
			scrollTop: $(window.location.hash).offset().top
		}, 1000);
		$('.navmenu-nav a').parent().removeClass('active');
		$('a[href$='+window.location.hash+']').parent().addClass('active');
	}

	$(".item img").on('click', function() {
		$(this).closest('.carousel').find('.right.carousel-control').click();
	});

	// make code pretty
	window.prettyPrint && prettyPrint();
});

// Set pixelRatio to 1 if the browser doesn't offer it up.
var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;

// Rather than waiting for document ready, where the images
// have already loaded, we'll jump in as soon as possible.
$(window).on("load", function() {
	if (pixelRatio > 1) {
		$('.navmenu-brand img').each(function() {

			// Very naive replacement that assumes no dots in file names.
			$(this).attr('src', $(this).attr('src').replace(".","@2x."));
		});
	}
});