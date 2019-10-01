//slick
$(".mv_slider").slick({
	arrows: false,
	autoplay: true
});
//slick

$(window).on('load resize', function(){
	var ww = window.innerWidth;
	if( ww > 750){
		$(".slide_1").attr("src","../share_img/slide_1.png");
		$(".slide_2").attr("src","../share_img/slide_2.png");
		$(".slide_3").attr("src","../share_img/slide_3.png");		
	}else{
		$(".slide_1").attr("src","../share_img/slide_1_sp.png");
		$(".slide_2").attr("src","../share_img/slide_2_sp.png");
		$(".slide_3").attr("src","../share_img/slide_3_sp.png");
	}
});