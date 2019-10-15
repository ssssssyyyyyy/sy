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
		selector: target, //要素の指定
		loop: true, //アニメーションの繰り返し
		minDisplayTime: 0, //アニメーションの間隔
		autoStart: true, //アニメーションの自動スタート
		inEffects: ["tada"], //エフェクト開始時のアニメーション
		outEffects: ["tada"],//エフェクト終了時のアニメーション

			//アニメーション開始時の設定
	 	in: {
	 	  effect: "tada", //エフェクトの指定
	 	  delayScale: 0.5, //各文字に適用される遅延係数
	 	  delay: 50, //文字ごとの遅延時間
	 	  sync: false, //アニメーションをすべての文字に同時に適用
	 	  shuffle: true, //ランダム表示
	 	  reverse: false, //エフェクトの逆再生(sync:trueとの併用は不可)
	 	  callback: function () {} //コールバック関数
	 	},

		//アニメーション終了時の設定
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
		initialDelay: delay //アニメーション開始までの遅延
		});
	}
})