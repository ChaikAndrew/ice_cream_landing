const modalHeaderEl = document.querySelector('.header-wrapper');
const crossModalEl = document.querySelector('.header-cross');
const openModalEl = document.querySelectorAll('#btn-modal-open');

function toggleModalHeader() {
  modalHeaderEl.classList.toggle('is-open');
}

crossModalEl.addEventListener('click', toggleModalHeader)

openModalEl.forEach((el) => {
  el.addEventListener('click', toggleModalHeader)
})
