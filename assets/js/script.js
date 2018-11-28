$(document).ready(function() {
	$("#stego").hover(function() {
		document.getElementById("stego-sound").play();
	});
	$("#bronto").hover(function() {
		document.getElementById("bronto-sound").play();
	});
	$("#ptero").hover(function() {
		document.getElementById("ptero-sound").play();
	});

	$("#OG").click(function() {
		$(this).toggleClass("rotated");
	});
	$("#orange").click(function() {
		$(this).toggleClass("rotated");
	});
	$("#teriyaki").click(function() {
		$(this).toggleClass("rotated");
	});


});