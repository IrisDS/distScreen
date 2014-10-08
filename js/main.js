input = document.getElementById('myFileInput');

var id = genID();
var url = "ws://192.168.0.104:9876/ws/screen/" + id
var binaryString

function sendPic() {
	var file = myInput.files[0];
	var fileReader = new FileReader();
	var Socket = new WebSocket(url);

	fileReader.onload = function(readerEvt) {
		binaryString = readerEvt.target.result;
	}

	fileReader.readAsDataURL(file);

	Socket.onopen = function(){
		Socket.send(JSON.stringify({"cmd" : "UPLOAD_IMAGE", "image" :
			binaryString, "width" : (window.innerWidth > 0) ?
			window.innerWidth : screen.width}));
	}

	$("#myFileInput").remove();

	Socket.onmessage = function(message) {
		myData = JSON.parse(message)
		switch (myData.value) {
			case "PLAY":
				var vid = document.getElementById("source_video");
				vid.src = URL;
				break;
			case "PLAY_AT":
				// start/resume playback @
				break;
			case "PAUSE":
				// Pause video
				break;
			case "MAKE_ADMIN":
				// upgrade connection to admin
				break;
		}
	}
}
 
function genID(){
	return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
}
myInput.addEventListener('change', sendPic, false);
