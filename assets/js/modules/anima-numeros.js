export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass
    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementarNumero(element) {
    const total = +element.innerText
    const increment = Math.floor(total / 100)
    let start = 0
    const timer = setInterval(() => {
      start += increment
      element.innerText = start
      if (start > total) {
        element.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }

  animaNumeros() {
    this.numeros.forEach(element => this.constructor.incrementarNumero(element))
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumeros()
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
