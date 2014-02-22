$jQuery ->
	$('#buttonId').on('touchstart click', function(e){
		e.stopPropogation(); e.preventDefault();
		console.log("test")
	});

