$(document).ready(function() {
	$("#lift_link").click(function(e) {
		e.preventDefault();
		var lift_offset = $("#lift").offset().top;
		$("html, body").animate({ scrollTop: lift_offset }, 500);
	})

	$("#back_link").click(function(e) {
		e.preventDefault();
		var lift_offset = $("#back").offset().top;
		$("html, body").animate({ scrollTop: lift_offset }, 1000);
	})

	$("#chalk_link").click(function(e) {
		e.preventDefault();
		var lift_offset = $("#chalk").offset().top;
		$("html, body").animate({ scrollTop: lift_offset }, 1500);
	})

	$("#about_link").click(function(e) {
		e.preventDefault();
		var lift_offset = $("#about").offset().top;
		$("html, body").animate({ scrollTop: lift_offset }, 1000);
	})

});