let mainNav = document.getElementById('mainNav');
let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');

function hideMenu(){
  mainNav.classList.remove('show-menu');
}

function showMenu(){
  mainNav.classList.toggle('show-menu');
}

// Ejecutamos las funciones

document.addEventListener('click', e => {
  if(e.target !== mainNav && e.target !== openMenu) hideMenu()
});

mainNav.addEventListener('mouseleave', hideMenu);
openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);


// function efectos(){
//   $('#up').on('click', function(){
//     $('html, body').animate({
//       scrollTop: 0,
//       scrollLeft: 0
//     }, 1000);
//   });
// }

// $(document).ready(efectos);

$(document).ready(function(){
  var nav = $('#mainNav');
  var title = $('head').find('title').text();
  if(title == "SPestudio"){
    nav.find('#home').addClass('active');
  }
  if(title == "SPestudio | Nuestro Estudio"){
    nav.find('#estudio').addClass('active');
  }
  if(title == "SPestudio | Servicios"){
    nav.find('#servicios').addClass('active');
  }
  if(title == "SPestudio | Misión"){
    nav.find('#mision').addClass('active');
  }
  if(title == "SPestudio | Proyectos"){
    nav.find('#proyectos').addClass('active');
  }
  if(title == "SPestudio | Contacto"){
    nav.find('#contacto').addClass('active');
  }
  $('#up').on('click', function(){
    $('html, body').animate({
      scrollTop: 0,
      scrollLeft: 0
    }, 1000);
  });
});


