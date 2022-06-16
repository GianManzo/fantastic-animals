export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]')
    numeros.forEach(element => {
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
    })
  }
  let observer

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect()
      animaNumeros()
    }
  }
  observer = new MutationObserver(handleMutation)
  const observerTarget = document.querySelector('.numeros')

  observer.observe(observerTarget, { attributes: true })
}
