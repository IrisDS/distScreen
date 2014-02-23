$(document).ready(function() {
	window.ondevicemotion = function(event) {
		var x = event.accelerationIncludingGravity.x;
		return x;
	}
	
	$(document).on("click","#fullPage",function(){
		if (window.ondevicemotion > 200) {
			alert("The device can't be oriented in this position";
		}
		else {
			alert("pewpew");
		}
	});
});
