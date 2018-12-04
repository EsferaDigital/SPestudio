const formulario = document.getElementById('formulario');
//formulario.elements toma todos los input del formulario
const body = document.getElementById('body');
const modalErrores = document.createElement('div');
modalErrores.classList.add('modal-errores');

function validar(e) {
	let errores = '';
	if(formulario.nombre.value == 0){
		e.preventDefault();
		errores += '<p>Escriba un nombre</p>';
  }
  if(formulario.correo.value == 0){
    e.preventDefault();
    errores += '<p>Ingrese un correo</p>'
  }
  if(formulario.mensaje.value == 0){
    e.preventDefault();
    errores += '<p>Escriba un mensaje</p>'
  }
  if(errores == '' == false){
    let mensajeErrores = `
      <div class="modal-errores-content">
       <h3>Error</h3>
        ${errores}
        <span id="btnClose">Cerrar</span>
      </div>
    `
    modalErrores.innerHTML = mensajeErrores;
    body.appendChild(modalErrores);
  }
  document.getElementById('btnClose').addEventListener('click', () =>{
    body.removeChild(modalErrores);
  });
}

formulario.addEventListener('submit', validar);
