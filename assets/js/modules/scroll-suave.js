/** SCROLL SUAVE */

export default class ScrollSmooth {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links)
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' }
    } else {
      this.options = options
    }
    this.scrollToSection = this.scrollToSection.bind(this)
  }

  scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView(this.options)

    /** FORMA ALTERNATIVA */
    // const top = section.offsetTop
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth'
    // })
  }

  addLinkEvent() {
    this.linksInternos.forEach(element => {
      element.addEventListener('click', this.scrollToSection)
    })
  }

  init() {
    if (this.linksInternos.length) this.addLinkEvent()
    return this
  }
}
