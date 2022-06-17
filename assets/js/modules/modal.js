// MODAL

export default class Modal {
  constructor(btnOpen, btnClose, containerModal) {
    this.botaoAbrir = document.querySelector(btnOpen)
    this.botaoFechar = document.querySelector(btnClose)
    this.containerModal = document.querySelector(containerModal)

    // bind this ao callback para fazer referencia ao objeto da class

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.clickForaModal = this.clickForaModal.bind(this)
  }

  toggleModal() {
    this.containerModal.classList.toggle('ativo')
  }

  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }

  clickForaModal(event) {
    if (event.target === this.containerModal) this.toggleModal(event) // event.target this que se refere a quem o event esta escutando, no casso containermodal
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal)
    this.botaoFechar.addEventListener('click', this.eventToggleModal)
    this.containerModal.addEventListener('click', this.clickForaModal)
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent()
    }
    return this
  }
}
