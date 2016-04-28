$breakTime = 3000;

$height = 300;
$width = 500;

function takeABreak($url) {
	$("#TakeABreakMessage").removeClass("hide");
	setTimeout(function() {
		window.open($url, "_blank", "width=" + $width + ",height=" + $height);
		$("#TakeABreakMessage").addClass("hide");
     }, $breakTime);
}

function snooze($url) {
	window.resizeTo(0, 0);
	window.moveTo(-100000, -100000);
	setTimeout(function() {
		window.resizeTo($height, $width);
		window.open($url, "_blank", "width=" + $width + ",height=" + $height);
		self.close();
     }, $breakTime);
}