export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`
      this.tooltipBox.style.left = `${event.pageX + 20}px`
    }
  }
  const onMouseLeave = {
    // tooltipBox: '', //tem que ser handleEvent nao pode mudar o nome
    // element: '', nao precisa colocar aqui pq atribui em cima
    handleEvent() {
      // removendo div e eventos que ficam quando sai do tooltip
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mousemove', onMouseMove)
    }
  }
  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text
    document.body.appendChild(tooltipBox)
    return tooltipBox
  }
  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this) // este this faz referencia ao element do forEach acima
    this.addEventListener('mousemove', onMouseMove)
    onMouseMove.tooltipBox = tooltipBox

    this.addEventListener('mouseleave', onMouseLeave)
    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this
  }
  tooltips.forEach(element => {
    element.addEventListener('mouseover', onMouseOver)
  })
}
