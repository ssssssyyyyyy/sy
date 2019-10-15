
class mascot {
  constructor(mascotSel, rightPupilSel, leftPupilSel) {
    this._dom = $(mascotSel);
    var width = this._dom.width();
    var height = this._dom.height();
    this.x = width / 2;
    this.y = height / 2;

    var range = width * 0.07;

    this.rightEye = new Eye(
      rightPupilSel,
      this.x - width * 0.17,
      this.y - height * 0.33,
      range
    );

    this.leftEye = new Eye(
      leftPupilSel,
      this.x + width * 0.14,
      this.y - height * 0.34,
      range
    );
  }

  update(x, y) {
  
    var offset = this._dom.offset();
    var baseX = offset.left;
    var baseY = offset.top;

    this.rightEye.update(x - baseX, y - baseY);
    this.leftEye.update(x - baseX, y - baseY);

    return this;
  }

  render() {
    this.rightEye.render();
    this.leftEye.render();

    return this;
  }
}

class Eye {
  constructor(selector, x, y, range) {
    this._pupil = new Pupil(selector, x, y);
    this.x = x;
    this.y = y;
    this.range = range;
  }

  get pupil() {
    return this._pupil;
  }

  update(x, y) {
    const distanceRatio = 0.3;

    var distanceX = x - this.x;
    var distanceY = y - this.y;
    var distance = Math.min(
      Math.sqrt(distanceX ** 2 + distanceY ** 2) * distanceRatio,
      this.range
    );

    var rad = Math.atan2(distanceY, distanceX);

    var newX = this.x + Math.cos(rad) * distance;
    var newY = this.y + Math.sin(rad) * distance;

    this.pupil.update(newX, newY);
    return this;
  }

  render() {
    this.pupil.render();

    return this;
  }
}

class Pupil {
  constructor(selection, x, y) {
    this._dom = $(selection);
    this.update(x, y);
  }

  update(x, y) {
    this.x = x - this._dom.width() / 2;
    this.y = y - this._dom.height() / 2;

    return this;
  }

  render() {
    this._dom.css({
      top: this.y + "px",
      left: this.x + "px"
    });

    return this;
  }
}

$(".case_slider > li > img").mouseover(function () {
  $(this).css({transform: "rotate(360deg)",transition: "transform 0.3s"});
  setTimeout(reset,300);
  function reset(){
    $(".case_slider > li > img").removeAttr("style");
  }
})

$(function() {
  $(".link_modal_1").iziModal({
    background: "rgba(0,0,0,0)"
  });
})

$(function() {
  $(".link_modal_2").iziModal({
    background: "rgba(0,0,0,0)"
  });
})

$(function() {
  $(".link_modal_3").iziModal({
    background: "rgba(0,0,0,0)"
  });
})

$(function() {
  $(".link_modal_4").iziModal({
    background: "rgba(0,0,0,0)"
  });
})

$(function() {
  $(".link_modal_5").iziModal({
    background: "rgba(0,0,0,0)"
  });
})

$(function() {
  $(".link_modal_6").iziModal({
    background: "rgba(0,0,0,0)"
  });
})

$(window).on("load resize", function(){
  var wW = $(window).innerWidth();
  if(wW < 1024){
    
    setInterval(randEye,1000);
    function randEye(){
      function rand(min, max){
        var offset = min;
        var range = (max - min) + 1;
        var randomNumber = Math.floor( Math.random() * range) + offset;
        return randomNumber;
      }

      var rightEyeY = rand(12,45);
      var leftEyeY = rightEyeY-97;
      var rightEyeX = rand(8,45);
      var leftEyeX = rightEyeX+3;

      $("#mascot_left_eye > div").css("transform","translate("+leftEyeY+"%,"+leftEyeX+"%)");
      $("#mascot_right_eye > div").css("transform","translate("+rightEyeY+"%,"+rightEyeX+"%)");
    }

  }
});