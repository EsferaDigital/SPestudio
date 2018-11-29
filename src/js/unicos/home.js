var slider = $('#slider');
var next = $('#btnNext');
var prev = $('#btnPrev');

$('#slider section:last').insertBefore('#slider section:first');

slider.css('margin-left', '-'+100+'%');

function moverD(){
  slider.animate({
    marginLeft:'-'+200+'%'
  }, 700, function(){
    $('#slider section:first').insertAfter('#slider section:last');
    slider.css('margin-left','-'+100+'%');
  });
}

function moverI(){
  slider.animate({
    marginLeft: 0
  }, 700, function(){
    $('#slider section:last').insertBefore('#slider section:first');
    slider.css('margin-left', '-' + 100 + '%');
  })
}

next.on('click', function(){
  moverD();
});

prev.on('click', function(){
  moverI();
});

function autoplay(){
  setInterval(function(){
    moverD()
  }, 6000);
}

autoplay();

const mq600 = window.matchMedia('(min-width: 600px)');
const mq1240 = window.matchMedia('(min-width: 1240px)');

var slider2 = $('#slider2');

$('#slider2 section:last').insertBefore('#slider2 section:first');

// invertir orden de los if
function moverD2(mq600, mq1240){
  if(mq1240.matches){
    slider2.css('margin-left', '-'+25+'%');
    slider2.animate({
      marginLeft:'-'+75+'%'
    }, 700, function(){
      $('#slider2 section:first').insertAfter('#slider2 section:last');
      slider2.css('margin-left','-'+25+'%');
    });
  }
  if(mq600.matches){
    slider2.css('margin-left', '-'+50+'%');
    slider2.animate({
      marginLeft:'-'+100+'%'
    }, 700, function(){
      $('#slider2 section:first').insertAfter('#slider2 section:last');
      slider2.css('margin-left','-'+50+'%');
    });
  }else{
    slider2.css('margin-left', '-'+100+'%');
    slider2.animate({
      marginLeft:'-'+200+'%'
    }, 700, function(){
      $('#slider2 section:first').insertAfter('#slider2 section:last');
      slider2.css('margin-left','-'+100+'%');
    });
  }
}

function autoplay2(){
  setInterval(function(){
    moverD2(mq600, mq1240)
  }, 12000);
}

autoplay2();
