function randomCharactor(c) {

    //跳ねさせる要素をすべて取得
    var randomChar = document.getElementsByClassName(c);

    //for で総当たり
    for (var i = 0; i < randomChar.length; i++) {

        //クロージャー
        (function(i) {

            //i 番目の要素、テキスト内容、文字列の長さを取得
            var randomCharI = randomChar[i];
            var randomCharIText = randomCharI.textContent;
            var randomCharLength = randomCharIText.length;

            //何番目の文字を跳ねさせるかをランダムで決める
            var Num = ~~(Math.random() * randomCharLength);

            //跳ねさせる文字を span タグで囲む、それ以外の文字と合わせて再び文字列を作る
            var newRandomChar = randomCharIText.substring(0, Num) + "<span>" + randomCharIText.charAt(Num) + "</span>" + randomCharIText.substring(Num + 1, randomCharLength);
            randomCharI.innerHTML = newRandomChar;

            //アニメーションが終わったら再び関数を発火させる
            document.getElementsByClassName(c)[0].children[0].addEventListener("animationend", function() {
                randomCharactor(c)
            }, false)
        })(i)
    }
}

//クラス名が pyonpyon のクラスを跳ねさせる
randomCharactor("pyonpyon");

var min = 3 ;
var max = 3 ;
var ranNum = Math.floor( Math.random() * (max + 1 - min) ) + min + "000";
console.log(ranNum)

setTimeout(endLoad, ranNum);

function endLoad(){
    $(".load").fadeOut();
}


$(function() {
    var rotate = function(you, angle) {
        you.css({"transform":"rotate("+angle+"deg)"});
    }
    $(window).scroll(function(){
        rotate($(".you"), $(window).scrollTop()*0.2);
    })
});


$(window).scroll(function() {
    var current = $(window).scrollTop();
    if( current > 10){
        $(".night").addClass("night_blur");
    }else{
        $(".night").removeClass("night_blur");
    }
})

$(window).scroll(function() {
    var wHeight = $(window).height();
    var blackPos = $(".black").offset().top;
    var blackHeight = $(".black").height();
    var currentTop = $(window).scrollTop();
    console.log(wHeight);
    console.log(blackPos);
    console.log(blackHeight);
    console.log(currentTop);

    if( wHeight+currentTop > blackPos+blackHeight/2 ){
        $(".balloon_1").fadeIn();
    }

    if( wHeight+currentTop > blackPos+blackHeight ){
        $(".balloon_2").fadeIn();   
    }

   //if( currentTop < blackPos ){
   //    $(".balloon").css("display","none");
   //}

})

function randomTeeth() {
    $(function () {
        var randnum1 = Math.floor( Math.random() * 95 );
        var randnum2 = Math.floor( Math.random() * 95 );
        var randnum3 = Math.floor( Math.random() * 75 );
        $(".teeth").css("top",randnum1+"%");
        $(".teeth").css("left",randnum2+"%");
        $(".teeth").css("width",randnum3+"%");
    })
}

setInterval(randomTeeth,150);