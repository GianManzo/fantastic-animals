import ScrollSmooth from './modules/scroll-suave.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tab-nav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import fetchAnimais from './modules/fetch-animais.js'
import fetchBitcoin from './modules/fetch-bitcoin.js'
import ScrollReveal from './modules/scroll-reveal.js'
import DropDown from './modules/dropdown-menu.js'
import MenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'

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

const scrollReveal = new ScrollReveal('[data-anima="scroll"]')
scrollReveal.init()

const dropdown = new DropDown('[data-dropdown]')
dropdown.init()

const mobileMenu = new MenuMobile('[data-menu="button"]', '[data-menu="lista"]')
mobileMenu.init()

initFuncionamento()
