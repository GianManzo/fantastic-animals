/** SCROLL REVEAL */

export default function initScrollReveal() {
  const sections = document.querySelectorAll('[data-anima="scroll"]')
  const windowMedia = window.innerHeight * 0.6

  function scrollReveal() {
    sections.forEach(element => {
      const sectionTop = element.getBoundingClientRect().top
      const sectionVisible = sectionTop - windowMedia < 0
      if (sectionVisible) element.classList.add('active')
      else if (element.classList.contains('active')) {
        element.classList.remove('active')
      }
    })
  }
  if (sections.length) {
    scrollReveal()
    window.addEventListener('scroll', scrollReveal)
  }
}
