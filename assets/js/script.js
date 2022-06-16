import ScrollSmooth from './modules/scroll-suave.js'
import initTabNav from './modules/tab-nav.js'
import initModal from './modules/modal.js'
import initTooltip from './modules/tooltip.js'
import initDropDown from './modules/dropdown-menu.js'
import initMenuMobile from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetch-animais.js'
import initAccordion from './modules/accordion.js'
import initFetchBitcoin from './modules/fetch-bitcoin.js'
import initScrollReveal from './modules/scroll-reveal.js'

const scrollSmooth = new ScrollSmooth('[data-js="menu"] a[href^="#"]')
scrollSmooth.init()
initAccordion()
initTabNav()
initModal()
initTooltip()
initDropDown()
initMenuMobile()
initFuncionamento()
initFetchAnimais()
initFetchBitcoin()
initScrollReveal()
