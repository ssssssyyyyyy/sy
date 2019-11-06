$(function(){
	var hH = $("header").outerHeight();
	console.log(hH);
	$("#message").css("padding-top",hH+20+"px");
})

setTimeout(message,2000,"left",true,"Yes","m_1")
setTimeout(message,4000,"right",false,"No","m_2")
setTimeout(message,6000,"left",true,"Stop","m_3")
setTimeout(message,8000,"right",false,"Go!","m_4")
setTimeout(message,8500,"right",false,"Go!","m_5")
setTimeout(message,9000,"right",false,"Go!","m_6")
setTimeout(message,13000,"right",false,"Oh No!","m_7")
setTimeout(message,16000,"right",false,"You say goodbye,<br>and<br> I say hello","m_8")
setTimeout(message,20500,"right",false,"Hello","m_9")
setTimeout(message,21000,"right",false,"Hello","m_10")
setTimeout(message,23000,"right",false,"I don't know why you say goodbye,<br>I say hello","m_11")
setTimeout(message,27500,"right",false,"Hello","m_12")
setTimeout(message,28000,"right",false,"Hello","m_13")
setTimeout(message,30000,"right",false,"I don't know why you say goodbye,<br>I say hello","m_14")
setTimeout(message,36000,"right",false,"High","m_15")
setTimeout(message,38000,"left",true,"Low","m_16")
setTimeout(message,40000,"left",true,"Why?","m_17")
setTimeout(message,42000,"right",false,"I don't know?","m_18")
setTimeout(message,48000,"right",false,"Oh No!","m_19")
setTimeout(message,51000,"right",false,"You say goodbye,<br>and<br> I say hello","m_20")
setTimeout(message,55500,"right",false,"Hello","m_21")
setTimeout(message,56000,"left",true,"Goodbye","m_22")
setTimeout(message,56500,"right",false,"Hello","m_23")
setTimeout(message,57000,"left",true,"Goodbye","m_24")
setTimeout(message,58000,"right",false,"Hello","m_25")
setTimeout(message,58500,"left",true,"Goodbye","m_26")
setTimeout(message,59500,"right",false,"Hello","m_27")
setTimeout(message,60000,"left",true,"Goodbye","m_29")
setTimeout(message,61000,"right",false,"Hello","m_30")
setTimeout(message,61500,"left",true,"Goodbye","m_31")
setTimeout(message,62000,"right",false,"Hello","m_32")
setTimeout(message,62500,"left",true,"Goodbye","m_33")
setTimeout(message,63500,"right",false,"Hello","m_34")
setTimeout(message,64000,"left",true,"Goodbye","m_35")
setTimeout(message,65000,"right",false,"Hello","m_36")
setTimeout(message,65500,"left",true,"Goodbye","m_37")
setTimeout(message,69500,"right",false,"Why?","m_38")
setTimeout(message,69750,"right",false,"Why?","m_39")
setTimeout(message,70000,"right",false,"Why?","m_40")
setTimeout(message,70250,"right",false,"Why?","m_41")
setTimeout(message,70500,"right",false,"Why?","m_42")
setTimeout(message,70750,"right",false,"Why?","m_43")
setTimeout(message,71250,"right",false,"Do you say goodbye?","m_44")
setTimeout(message,72000,"right",false,"Goodbye?","m_45")
setTimeout(message,72500,"right",false,"bye?","m_46")
setTimeout(message,72750,"right",false,"bye?","m_47")
setTimeout(message,73000,"right",false,"bye?","m_48")
setTimeout(message,73250,"right",false,"bye?","m_49")
setTimeout(message,76500,"right",false,"Oh No!","m_50")
setTimeout(message,79500,"right",false,"You say goodbye,<br>and<br> I say hello","m_51")
setTimeout(message,84000,"right",false,"Hello","m_52")
setTimeout(message,84500,"left",true,"Goodbye","m_53")
setTimeout(message,85000,"right",false,"Hello","m_54")
setTimeout(message,85500,"left",true,"Goodbye","m_55")
setTimeout(message,86500,"right",false,"Hello","m_56")
setTimeout(message,87000,"left",true,"Goodbye","m_57")
setTimeout(message,87500,"right",false,"Hello","m_58")
setTimeout(message,88000,"left",true,"Goodbye","m_59")
setTimeout(message,89000,"right",false,"Hello","m_60")
setTimeout(message,89500,"left",true,"Goodbye","m_61")
setTimeout(message,90000,"right",false,"Hello","m_62")
setTimeout(message,90500,"left",true,"Goodbye","m_63")
setTimeout(message,91500,"right",false,"Hello","m_64")
setTimeout(message,92000,"left",true,"Goodbye","m_65")
setTimeout(message,92500,"right",false,"Hello","m_66")
setTimeout(message,93000,"left",true,"Goodbye","m_67")
setTimeout(message,96000,"right",false,"I don't know why you say goodbye,<br>I say hello","m_68")
setTimeout(message,99000,"right",false,"Hello...","m_69")
setTimeout(message,99500,"right",false,"Hello...","m_70")
setTimeout(message,100000,"right",false,"Hello...","m_71")
setTimeout(message,104000,"left",true,"Goodbye","m_72")

function message(lr,icon,message,messageId){
	if( icon = true ){
		$("#message > ul").append('<li class="'+lr+' '+messageId+'"><img src="img/user.png"><span>'+message+'</span></li>');
		var wH = $("html").height();
		scrollTo(0, wH);
	}else{
		$("#message > ul").append('<li class="'+lr+' '+messageId+'"><span>'+message+'</span></li>');
		var wH = $("html").height();
		scrollTo(0, wH);
	}
}
