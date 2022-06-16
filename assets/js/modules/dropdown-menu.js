// DROPDOWN MENU - funcionado bem para mobile
import outsideClick from './outsideclick.js'

export default function initDropDown() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]')

  function handleClick(event) {
    event.preventDefault()
    this.classList.add('active')
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active')
    })
  }

  dropDownMenus.forEach(element => {
    ;['touchstart', 'click'].forEach(userEvent => {
      element.addEventListener(userEvent, handleClick)
    })
  })
}
