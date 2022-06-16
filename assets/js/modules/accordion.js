/** ACCORDION LIST */

export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anima="accordion"] dt')
  const activeClass = 'active'

  function activeAccordion() {
    this.classList.toggle(activeClass)
    this.nextElementSibling.classList.toggle(activeClass)
  }
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    accordionList.forEach(element => {
      element.addEventListener('click', activeAccordion)
    })
  }
}
