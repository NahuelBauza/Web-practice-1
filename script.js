const envoltura = document.querySelector('.envoltura');
const registroEnlace = document.querySelector('.registro-enlace');
const accesoEnlace = document.querySelector('.acceso-enlace');
const botonPopup = document.querySelector('.btnAcceso-surgir');
const iconoCerrar = document.querySelector('.icono-cerrar');

registroEnlace.onclick = () => {
  envoltura.classList.add('activo')
};

accesoEnlace.onclick = () => {
  envoltura.classList.remove('activo')
};

botonPopup.onclick = () => {
  envoltura.classList.add('activo-surgir')
};


iconoCerrar.onclick = () => {
  envoltura.classList.remove('activo-surgir')
  envoltura.classList.remove('activo')
};