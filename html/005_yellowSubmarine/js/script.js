//$(function () {
//	var maxI = $(".pop > p").length;
//	var i = fadeSubmarine(maxI,i);
//
//	setInterval(fadeSubmarine,1000,maxI,i);
//	
//	function fadeSubmarine(maxI,i) {
//		if(isNaN(i)){
//			console.log(i);
//			var i = 0;
//			console.log(i);
//			return i;
//		}else{
//			var num = maxI-(maxI-1)+i;
//			$(".yellowSubmarine_text_"+num).fadeOut();
//			console.log("増やす前"+i);
//			i++;
//			i++;
//			console.log("増やした後"+i);
//			return i;			
//		}
//	}	
//})


$(function() {
	textEffect(".yellowSubmarine_text_1",0);
	textEffect(".yellowSubmarine_text_2",250);
	textEffect(".yellowSubmarine_text_3",500);
	textEffect(".yellowSubmarine_text_4",1000);
	textEffect(".yellowSubmarine_text_5",1750);
	textEffect(".yellowSubmarine_text_6",2500);

	function textEffect(target,delay){
		$(target).textillate({
		selector: target, //要素の指定
		loop: true, //アニメーションの繰り返し
		minDisplayTime: 3000, //アニメーションの間隔
		autoStart: true, //アニメーションの自動スタート
		inEffects: ["bounceInUp"], //エフェクト開始時のアニメーション
		outEffects: ["bounceOutUp"],//エフェクト終了時のアニメーション

			//アニメーション開始時の設定
	 	in: {
	 	  effect: "bounceInUp", //エフェクトの指定
	 	  delayScale: 0.5, //各文字に適用される遅延係数
	 	  delay: 50, //文字ごとの遅延時間
	 	  sync: false, //アニメーションをすべての文字に同時に適用
	 	  shuffle: false, //ランダム表示
	 	  reverse: false, //エフェクトの逆再生(sync:trueとの併用は不可)
	 	  callback: function () {} //コールバック関数
	 	},

		//アニメーション終了時の設定
		out: {
		  effect: "bounceOutUp",
		  delayScale: 1.5,
		  delay: 50,
		  sync: false,
		  shuffle: false,
		  reverse: false,
		  callback: function () {}
		},
		callback: function () {},
		type: "char",
		initialDelay: delay //アニメーション開始までの遅延
		});
	}
})

