
const modal = document.querySelector(".modal-container");
const btnOpenModal = document.querySelector(".btn-open-modal");
const btnCloseModal = document.querySelector(".btn-close-modal");

if (btnOpenModal && btnCloseModal && modal) {
  function abrirModal(event) {
    event.preventDefault();
    modal.classList.add("ativo");
  }

  function fecharModal(event) {
    event.preventDefault();
    modal.classList.remove("ativo");
    }
    
    function fecharForaModal(event) {
        if (event.target == this) {
            fecharModal(event);
      }
  }

    btnOpenModal.addEventListener("click", abrirModal);
    btnCloseModal.addEventListener("click", fecharModal);
    modal.addEventListener('click', fecharForaModal);
}