$(".slider").slick({
	dots: false,
	autplay: true,
	fade: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: false
});


$(window).on("load resize", function(){
	var wH = $(window).height();
	var mH = $("#main").height();
	var padd = (wH - mH)/2;
	$("#main").css("padding",padd+"px 0");
});