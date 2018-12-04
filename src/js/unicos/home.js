const formulario = document.getElementById('homeForm');
const body = document.getElementById('body');
const modalErrores = document.createElement('div');
modalErrores.classList.add('modal-errores');

function validar(e){
  let errores = '';
  if(formulario.name.value == 0){
    e.preventDefault();
    errores += '<p>Escriba un nombre</p>';
  }
  if(formulario.email.value == 0){
    e.preventDefault();
    errores += '<p>Ingrese un correo</p>'
  }
  if(formulario.message.value == 0){
    e.preventDefault();
    errores += '<p>Escriba un mensaje</p>'
  }
  if(errores == '' == false){
    let mensajeErrores = `
      <div class="modal-errores-content">
      <h3>Error</h3>
        ${errores}
        <span id="btnCerrar">Cerrar</span>
      </div>
    `
    modalErrores.innerHTML = mensajeErrores;
    body.appendChild(modalErrores);
  }
  document.getElementById('btnCerrar').addEventListener('click', () =>{
    body.removeChild(modalErrores);
  });
}

formulario.addEventListener('submit', validar);
