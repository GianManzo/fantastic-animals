/** SCROLL REVEAL */

export default class ScrollReveal {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6

    this.scrollReveal = this.scrollReveal.bind(this)
  }

  scrollReveal() {
    this.sections.forEach(element => {
      const sectionTop = element.getBoundingClientRect().top
      const sectionVisible = sectionTop - this.windowMetade < 0
      if (sectionVisible) element.classList.add('active')
      else if (element.classList.contains('active')) {
        element.classList.remove('active')
      }
    })
  }

  init() {
    this.scrollReveal()
    window.addEventListener('scroll', this.scrollReveal)
    return this
  }
}
