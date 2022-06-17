import AnimaNumeros from './anima-numeros.js'

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target)
  function createAnimals(animal) {
    const div = document.createElement('div')
    div.classList.add('numero-animal')
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`
    return div
  }

  function preencherAnimais(animal) {
    const divAnimal = createAnimals(animal)
    numerosGrid.appendChild(divAnimal)
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'active')
    animaNumeros.init()
  }
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url)
      const animaisJSON = await animaisResponse.json()

      animaisJSON.forEach(animal => preencherAnimais(animal))
      animaAnimaisNumeros()
    } catch (erro) {
      console.error(erro)
    }
  }
  return criarAnimais()
}
