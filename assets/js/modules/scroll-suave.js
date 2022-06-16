/** SCROLL SUAVE */

export default function initScroll() {
  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

    /** FORMA ALTERNATIVA */
    // const top = section.offsetTop
    // window.scrollTo({
    //   top: top,
    //   behavior: 'smooth'
    // })
  }
  const linksInternos = document.querySelectorAll(
    '[data-js="menu"] a[href^="#"]'
  )
  linksInternos.forEach(element => {
    element.addEventListener('click', scrollToSection)
  })
}
