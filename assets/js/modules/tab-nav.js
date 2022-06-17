/** TABMENU */

export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu)
    this.tabContent = document.querySelectorAll(content)
    this.activeClass = 'active'
  }
  // ativa tab de acordo com index da mesma

  activeTab(index) {
    this.tabContent.forEach(element => {
      element.classList.remove(this.activeClass)
    })
    const getData = this.tabContent[index].dataset.anima
    this.tabContent[index].classList.add(this.activeClass, getData)
  }

  addTabNavEvent() {
    this.tabMenu.forEach((element, index) => {
      element.addEventListener('click', () => this.activeTab(index))
    })
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativa primeiro item:
      this.activeTab(0)
      this.addTabNavEvent()
    }
  }
}
