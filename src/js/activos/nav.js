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


