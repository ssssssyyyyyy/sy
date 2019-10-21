$(".slider").slick({
	arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    speed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
	   {
	    breakpoint: 1476,
	    settings: {
	      slidesToShow: 4
	    }
	   }
	 ]
});

$(function() {
	$(".movie_1_modal").iziModal({
		width: 1250,
		background: "rgba(0,0,0,0)"
	});
})

var user="";
if ((navigator.userAgent.indexOf("iPhone") > 0 && navigator.userAgent.indexOf( "iPad") == -1) || navigator.userAgent.indexOf("iPod") > 0){
	$(".ua_ios").css("display","inline-block");
}else if(navigator.userAgent.indexOf("Android") > 0){
	$(".ua_android").css("display","inline-block");
}else{
	$(".ua_ios").css("display","inline-block");
	$(".ua_android").css("display","inline-block");
}

$(function() {
	textEffect("#mv > div",0);

	function textEffect(target,delay){
		$(target).textillate({
		selector: target, 
		loop: true, 
		minDisplayTime: 0, 
		autoStart: true, 
		inEffects: ["tada"], 
		outEffects: ["tada"],

			
	 	in: {
	 	  effect: "tada", 
	 	  delayScale: 0.5, 
	 	  delay: 50, 
	 	  sync: false, 
	 	  shuffle: true, 
	 	  reverse: false, 
	 	  callback: function () {} 
	 	},

		
		out: {
		  effect: "tada",
		  delayScale: 1.5,
		  delay: 50,
		  sync: false,
		  shuffle: true,
		  reverse: false,
		  callback: function () {}
		},
		callback: function () {},
		type: "char",
		initialDelay: delay 
		});
	}
})