const abrirModal = document.querySelector(".abrir-modal");
const cerrarModal = document.querySelector(".carrito__header__cerrar");
const modal = document.querySelector(".modal__carrito");

abrirModal.addEventListener("click", function(){
    modal.showModal();
});

cerrarModal.addEventListener("click", function(){
    modal.close();
});

const modalConfirmacion = document.querySelector(".modal__confirmacion");