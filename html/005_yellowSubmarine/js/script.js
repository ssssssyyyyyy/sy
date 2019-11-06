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
//			i++;
//			i++;
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
		selector: target, 
		loop: true, 
		minDisplayTime: 3000, 
		autoStart: true, 
		inEffects: ["bounceInUp"], 
		outEffects: ["bounceOutUp"],

	 	in: {
	 	  effect: "bounceInUp", 
	 	  delayScale: 0.5, 
	 	  delay: 50, 
	 	  sync: false, 
	 	  shuffle: false, 
	 	  reverse: false, 
	 	  callback: function () {} 
	 	},

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
		initialDelay: delay 
		});
	}
})

