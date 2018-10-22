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
  }, 6000)
}

autoplay()