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


function efectos(){
  $('#up').on('click', function(){
    $('html, body').animate({
      scrollTop: 0,
      scrollLeft: 0
    }, 1000);
  });
}

$(document).ready(efectos);

// $(document).ready(function(){
//   $('#up').on('click', function(){
//     $('html, body').animate({
//       scrollTop: 0,
//       scrollLeft: 0
//     }, 1000);
//   });
//   $('#mainMenu li').click(function(e) {
//     // e.preventDefault();
//     $('.c-nav-menu-item').removeClass('active');
//     $(this).addClass('active');
//   });
// });


