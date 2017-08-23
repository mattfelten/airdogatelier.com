jQuery( function($) {

	$(window).load( function() {
		$('#work section ul').isotope();
	});

	$('#work nav a').click( function(e) {
		var target = this.hash,
			$target = $(target);

		e.preventDefault();
		window.location.hash = target;

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 400);
	});
});
