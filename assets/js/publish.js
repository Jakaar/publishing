


$(window).load(function(){


	$('.rocket .title').waypoint(function() {
	}, {offset: '60%'});
	
	$('.rocket p').waypoint(function() {
	}, {offset: '60%'});

	$('.rocket .button').waypoint(function() {
	}, {offset: '60%'});



	$('.ani').waypoint(function() {		
		$(this).addClass('animated fadeInUp');
	}, {offset: '70%'});
});







