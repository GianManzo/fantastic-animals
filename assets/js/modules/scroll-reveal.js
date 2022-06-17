import debounce from './debouce.js'

/** SCROLL REVEAL */
export default class ScrollReveal {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6

    this.checkDistance = debounce(this.checkDistance.bind(this), 50)
  }
  // distancia em relação ao topo

  getDistance() {
    this.distance = [...this.sections].map(element => {
      const offset = element.offsetTop
      return {
        element,
        offset: Math.floor(offset - this.windowMetade)
      }
    })
  }

  checkDistance() {
    this.distance.forEach(item => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add('active')
      } else if (item.element.classList.contains('active')) {
        item.element.classList.remove('active')
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener('scroll', this.checkDistance)
    }
    return this
  }

  stop() {
    window.removeEventListener('scroll', this.checkDistance)
  }
}
