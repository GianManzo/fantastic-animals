/** ACCORDION LIST */

export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list)
    this.activeClass = 'active'
  }

  toggleAccordion(element) {
    element.classList.toggle(this.activeClass)
    element.nextElementSibling.classList.toggle(this.activeClass)
  }

  addAccordionEvent() {
    this.accordionList.forEach(element => {
      element.addEventListener('click', () => this.toggleAccordion(element))
    })
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0])
      this.addAccordionEvent()
    }
    return this
  }
}
