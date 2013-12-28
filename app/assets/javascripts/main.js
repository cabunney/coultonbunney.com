$(document).ready(function() {
	$("#lumo_projects>div").click(function() {
		$(this).parent().find(".active").removeClass("active").addClass("hidden");
		$(this).addClass("active").removeClass("hidden");
		$(this).find(".number small").fadeOut();
		
	});

	$("#links").hover(
		function() {
			  $(this).find(".name").stop(true);
			$(this).find(".name").fadeIn(500).css("display","inline-block");
		}, function() {
			  // $(this).find(".name").stop(true);
			$(this).find(".name").fadeOut(250).css("display","inline-block");
	});

	$("#links #top").click(function() {
		var place = $("#frame1").offset().top ;
		$('html,body').animate({
			scrollTop: place
		}, 1000);
	});

	$("#links #lumo").click(function() {
		var place = $("#frame2").offset().top ;
		$('html,body').animate({
			scrollTop: place +30
		}, 1000);
	});
	$(".right").click(function() {
		var mL = $(this).parent().parent().css("margin-left").replace("px",'').replace("%",'');
		console.log(mL);
			$(".right img,.left img").fadeOut();
		$(this).parent().parent().animate({
			marginLeft: "-=100%"
		}, 1000, function() {
						$(".right img,.left img").fadeIn(500);

		});
	});

	$(".left").click(function() {
		var mL = $(this).parent().parent().css("margin-left").replace("px",'').replace("%",'');
		console.log(mL);
		$(".right img,.left img").fadeOut();
		$(this).parent().parent().animate({
			marginLeft: "+=100%"
		}, 1000, function() {
			$(".right img,.left img").fadeIn(500);
		});
	});

	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var lumo = $("#frame2").offset().top ;
		var top = 0;

		if (y_scroll_pos >= lumo/2) {
			$("#links a").removeClass("active");
			$("#links #lumo").addClass("active");
		}
		if (y_scroll_pos < lumo/2) {
			$("#links a").removeClass("active");
			$("#links #top").addClass("active");
		}
	});

	$("#strategy_mock, #vibration_mock, #cards_mock").hover(
		function() {
			if($(this).hasClass("hidden") && $(window).width() > 800) {
			  	$(this).find(".number small").stop(true);
				$(this).find(".number small").fadeIn(500);
			}
		}, function() {
			  // $(this).find(".name").stop(true);
			$(this).find(".number small").fadeOut(250);
	});

});