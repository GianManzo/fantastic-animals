// MODAL

export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]')
  const botaoFechar = document.querySelector('[data-modal="fechar"]')
  const containerModal = document.querySelector('[data-modal="container"]')
  function toggleModal(event) {
    event.preventDefault()
    containerModal.classList.toggle('ativo')
  }
  function clickForaModal(event) {
    if (event.target === this) toggleModal(event) // event.target this que se refere a quem o event esta escutando, no casso containermodal
  }
  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener('click', toggleModal)
    botaoFechar.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clickForaModal)
  }
}
