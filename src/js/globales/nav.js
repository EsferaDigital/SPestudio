let mainNav = document.getElementById('mainNav');
let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');
const header = document.getElementById('mainHeader');

//Declaramos variables que vamos a usar

let lastScrollTop = 0;

function hideMenu(){
  mainNav.classList.remove('show-menu');
}

function showMenu(){
  mainNav.classList.toggle('show-menu');
}

// Ejecutamos las funciones

//Muestra u oculta el header
function headerFixed() {
	//al hace scroll aumenta el valor de sctop
	let sctop = document.documentElement.scrollTop;
	let st = window.pageYOffset || document.documentElement.scrollTop;
	// console.log(sctop)

	if (st > lastScrollTop) {
		header.classList.add('show-header')

	} else if (sctop === 0) {
		header.classList.remove('show-header')
	}

	lastScrollTop = st;
}

document.addEventListener('click', e => {
  if(e.target !== mainNav && e.target !== openMenu) hideMenu()
});

mainNav.addEventListener('mouseleave', hideMenu);
openMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);
window.addEventListener('scroll', headerFixed, false);




$(document).ready(function(){
  var nav = $('#mainNav');
  var title = $('head').find('title').text();
  if(title == "SPestudio"){
    nav.find('#home').addClass('active');
  }
  if(title == "SPestudio | Nosotros"){
    nav.find('#estudio').addClass('active');
  }
  if(title == "SPestudio | Servicios"){
    nav.find('#servicios').addClass('active');
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


