// DROPDOWN MENU - funcionado bem para mobile
import outsideClick from './outsideclick.js'

export default class DropDown {
  constructor(menu, events) {
    this.dropDownMenus = document.querySelectorAll(menu)
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events
    this.activeClass = 'active'
    this.activeDropDown = this.activeDropDown.bind(this)
  }

  activeDropDown(event) {
    event.preventDefault()
    const current = event.currentTarget
    current.classList.add(this.activeClass)
    outsideClick(current, this.events, () => {
      current.classList.remove(this.activeClass)
    })
  }

  addDropDownEvent() {
    this.dropDownMenus.forEach(element => {
      this.events.forEach(userEvent => {
        element.addEventListener(userEvent, this.activeDropDown)
      })
    })
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropDownEvent()
    }
    return this
  }
}
