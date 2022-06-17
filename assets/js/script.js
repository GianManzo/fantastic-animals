import ScrollSmooth from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import initDropDown from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initScrollReveal from './modules/scroll-reveal.js'

const scrollSmooth = new ScrollSmooth('[data-js="menu"] a[href^="#"]')
scrollSmooth.init()

const accordion = new Accordion('[data-anima="accordion"] dt')
accordion.init()

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
)
tabNav.init()

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
)
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

fetchAnimais('../../json/animaisapi.json', '.numeros-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btcPreco')

initDropDown()
initMenuMobile()
initFuncionamento()
initScrollReveal()
