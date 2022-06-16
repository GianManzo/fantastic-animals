/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/modules/accordion.js":
/*!****************************************!*\
  !*** ./assets/js/modules/accordion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n/** ACCORDION LIST */\r\n\r\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionList = document.querySelectorAll(list)\r\n    this.activeClass = 'active'\r\n  }\r\n\r\n  toggleAccordion(element) {\r\n    element.classList.toggle(this.activeClass)\r\n    element.nextElementSibling.classList.toggle(this.activeClass)\r\n  }\r\n\r\n  addAccordionEvent() {\r\n    this.accordionList.forEach(element => {\r\n      element.addEventListener('click', () => this.toggleAccordion(element))\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.accordionList.length) {\r\n      this.toggleAccordion(this.accordionList[0])\r\n      this.addAccordionEvent()\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/accordion.js?");

/***/ }),

/***/ "./assets/js/modules/anima-numeros.js":
/*!********************************************!*\
  !*** ./assets/js/modules/anima-numeros.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\r\n  function animaNumeros() {\r\n    const numeros = document.querySelectorAll('[data-numero]')\r\n    numeros.forEach(element => {\r\n      const total = +element.innerText\r\n      const increment = Math.floor(total / 100)\r\n      let start = 0\r\n      const timer = setInterval(() => {\r\n        start += increment\r\n        element.innerText = start\r\n        if (start > total) {\r\n          element.innerText = total\r\n          clearInterval(timer)\r\n        }\r\n      }, 25 * Math.random())\r\n    })\r\n  }\r\n  let observer\r\n\r\n  function handleMutation(mutation) {\r\n    if (mutation[0].target.classList.contains('active')) {\r\n      observer.disconnect()\r\n      animaNumeros()\r\n    }\r\n  }\r\n  observer = new MutationObserver(handleMutation)\r\n  const observerTarget = document.querySelector('.numeros')\r\n\r\n  observer.observe(observerTarget, { attributes: true })\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/anima-numeros.js?");

/***/ }),

/***/ "./assets/js/modules/dropdown-menu.js":
/*!********************************************!*\
  !*** ./assets/js/modules/dropdown-menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDown)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./assets/js/modules/outsideclick.js\");\n// DROPDOWN MENU - funcionado bem para mobile\r\n\r\n\r\nfunction initDropDown() {\r\n  const dropDownMenus = document.querySelectorAll('[data-dropdown]')\r\n\r\n  function handleClick(event) {\r\n    event.preventDefault()\r\n    this.classList.add('active')\r\n    ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => {\r\n      this.classList.remove('active')\r\n    })\r\n  }\r\n\r\n  dropDownMenus.forEach(element => {\r\n    ;['touchstart', 'click'].forEach(userEvent => {\r\n      element.addEventListener(userEvent, handleClick)\r\n    })\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./assets/js/modules/fetch-animais.js":
/*!********************************************!*\
  !*** ./assets/js/modules/fetch-animais.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./assets/js/modules/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  function createAnimals(animal) {\r\n    const div = document.createElement('div')\r\n    div.classList.add('numero-animal')\r\n    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`\r\n    return div\r\n  }\r\n  async function fetchAnimais(url) {\r\n    try {\r\n      const animaisResponse = await fetch(url)\r\n      const animaisJSON = await animaisResponse.json()\r\n      const numerosGrid = document.querySelector('.numeros-grid')\r\n\r\n      animaisJSON.forEach(animal => {\r\n        const divAnimal = createAnimals(animal)\r\n        numerosGrid.appendChild(divAnimal) //\r\n      })\r\n      ;(0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    } catch (erro) {\r\n      console.error(erro)\r\n    }\r\n  }\r\n  fetchAnimais('/json/animaisapi.json')\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/fetch-animais.js?");

/***/ }),

/***/ "./assets/js/modules/fetch-bitcoin.js":
/*!********************************************!*\
  !*** ./assets/js/modules/fetch-bitcoin.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBitcoin)\n/* harmony export */ });\nfunction initFetchBitcoin() {\r\n  fetch('https://blockchain.info/ticker')\r\n    .then(response => response.json())\r\n    .then(json => {\r\n      const btcPreco = document.querySelector('.btcPreco')\r\n      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4) // valor equivalente a R$1000\r\n    })\r\n    .catch(erro => {\r\n      console.log(Error(erro))\r\n    })\r\n}\r\n\r\n// https://blockchain.info/ticker\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./assets/js/modules/funcionamento.js":
/*!********************************************!*\
  !*** ./assets/js/modules/funcionamento.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector('[data-semana]')\r\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number) // colocando o number dentro de map ja transforma os numeros de string para numeros\r\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\r\n\r\n  const dataAgora = new Date()\r\n  const diaAgora = dataAgora.getDay()\r\n  const horarioAgora = dataAgora.getHours()\r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1\r\n\r\n  const horarioAberto =\r\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]\r\n  if (horarioAberto && semanaAberto) funcionamento.classList.add('aberto')\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/funcionamento.js?");

/***/ }),

/***/ "./assets/js/modules/menu-mobile.js":
/*!******************************************!*\
  !*** ./assets/js/modules/menu-mobile.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./assets/js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]')\r\n  const menuList = document.querySelector('[data-menu=\"lista\"]')\r\n  const eventos = ['click', 'touchstart']\r\n  function openMenu() {\r\n    menuList.classList.add('active')\r\n    menuButton.classList.add('active')\r\n    ;(0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\r\n      menuList.classList.remove('active')\r\n      menuButton.classList.remove('active')\r\n    })\r\n  }\r\n  if (menuButton)\r\n    eventos.forEach(evento => menuButton.addEventListener(evento, openMenu))\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/menu-mobile.js?");

/***/ }),

/***/ "./assets/js/modules/modal.js":
/*!************************************!*\
  !*** ./assets/js/modules/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\n// MODAL\r\n\r\nfunction initModal() {\r\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]')\r\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]')\r\n  const containerModal = document.querySelector('[data-modal=\"container\"]')\r\n  function toggleModal(event) {\r\n    event.preventDefault()\r\n    containerModal.classList.toggle('ativo')\r\n  }\r\n  function clickForaModal(event) {\r\n    if (event.target === this) toggleModal(event) // event.target this que se refere a quem o event esta escutando, no casso containermodal\r\n  }\r\n  if (botaoAbrir && botaoFechar && containerModal) {\r\n    botaoAbrir.addEventListener('click', toggleModal)\r\n    botaoFechar.addEventListener('click', toggleModal)\r\n    containerModal.addEventListener('click', clickForaModal)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/modal.js?");

/***/ }),

/***/ "./assets/js/modules/outsideclick.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/outsideclick.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement\r\n  const outside = 'data-outside'\r\n  function handleOutsideClick(event) {\r\n    if (!element.contains(event.target)) {\r\n      element.removeAttribute(outside)\r\n      events.forEach(userEvent => {\r\n        html.removeEventListener(userEvent, handleOutsideClick)\r\n      })\r\n\r\n      callback()\r\n    }\r\n  }\r\n  if (!element.hasAttribute(outside)) {\r\n    events.forEach(userEvent => {\r\n      setTimeout(() => {\r\n        // coloquei setTimeout como 0 para aguardar e executar depois da fila\r\n        html.addEventListener(userEvent, handleOutsideClick)\r\n      })\r\n    })\r\n    element.setAttribute(outside, '')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/outsideclick.js?");

/***/ }),

/***/ "./assets/js/modules/scroll-reveal.js":
/*!********************************************!*\
  !*** ./assets/js/modules/scroll-reveal.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollReveal)\n/* harmony export */ });\n/** SCROLL REVEAL */\r\n\r\nfunction initScrollReveal() {\r\n  const sections = document.querySelectorAll('[data-anima=\"scroll\"]')\r\n  const windowMedia = window.innerHeight * 0.6\r\n\r\n  function scrollReveal() {\r\n    sections.forEach(element => {\r\n      const sectionTop = element.getBoundingClientRect().top\r\n      const sectionVisible = sectionTop - windowMedia < 0\r\n      if (sectionVisible) element.classList.add('active')\r\n      else if (element.classList.contains('active')) {\r\n        element.classList.remove('active')\r\n      }\r\n    })\r\n  }\r\n  if (sections.length) {\r\n    scrollReveal()\r\n    window.addEventListener('scroll', scrollReveal)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/scroll-reveal.js?");

/***/ }),

/***/ "./assets/js/modules/scroll-suave.js":
/*!*******************************************!*\
  !*** ./assets/js/modules/scroll-suave.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSmooth)\n/* harmony export */ });\n/** SCROLL SUAVE */\r\n\r\nclass ScrollSmooth {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links)\r\n    if (options === undefined) {\r\n      this.options = { behavior: 'smooth', block: 'start' }\r\n    } else {\r\n      this.options = options\r\n    }\r\n    this.scrollToSection = this.scrollToSection.bind(this)\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault()\r\n    const href = event.currentTarget.getAttribute('href')\r\n    const section = document.querySelector(href)\r\n\r\n    section.scrollIntoView(this.options)\r\n\r\n    /** FORMA ALTERNATIVA */\r\n    // const top = section.offsetTop\r\n    // window.scrollTo({\r\n    //   top: top,\r\n    //   behavior: 'smooth'\r\n    // })\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach(element => {\r\n      element.addEventListener('click', this.scrollToSection)\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) this.addLinkEvent()\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/scroll-suave.js?");

/***/ }),

/***/ "./assets/js/modules/tab-nav.js":
/*!**************************************!*\
  !*** ./assets/js/modules/tab-nav.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\n/** TABMENU */\r\n\r\nfunction initTabNav() {\r\n  const tabMenu = document.querySelectorAll('[data-tab=\"menu\"] li')\r\n  const tabContent = document.querySelectorAll('[data-tab=\"content\"] section')\r\n  function activeTab(index) {\r\n    tabContent.forEach(element => {\r\n      element.classList.remove('active')\r\n    })\r\n    const getData = tabContent[index].dataset.anima\r\n    tabContent[index].classList.add('active', getData)\r\n  }\r\n\r\n  if (tabMenu.length && tabContent.length) {\r\n    tabContent[0].classList.add('active')\r\n\r\n    tabMenu.forEach((element, index) => {\r\n      element.addEventListener('click', () => {\r\n        activeTab(index)\r\n      })\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/tab-nav.js?");

/***/ }),

/***/ "./assets/js/modules/tooltip.js":
/*!**************************************!*\
  !*** ./assets/js/modules/tooltip.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const tooltips = document.querySelectorAll('[data-tooltip]')\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipBox.style.top = `${event.pageY + 20}px`\r\n      this.tooltipBox.style.left = `${event.pageX + 20}px`\r\n    }\r\n  }\r\n  const onMouseLeave = {\r\n    // tooltipBox: '', //tem que ser handleEvent nao pode mudar o nome\r\n    // element: '', nao precisa colocar aqui pq atribui em cima\r\n    handleEvent() {\r\n      // removendo div e eventos que ficam quando sai do tooltip\r\n      this.tooltipBox.remove()\r\n      this.element.removeEventListener('mouseleave', onMouseLeave)\r\n      this.element.removeEventListener('mousemove', onMouseMove)\r\n    }\r\n  }\r\n  function criarTooltipBox(element) {\r\n    const tooltipBox = document.createElement('div')\r\n    const text = element.getAttribute('aria-label')\r\n    tooltipBox.classList.add('tooltip')\r\n    tooltipBox.innerText = text\r\n    document.body.appendChild(tooltipBox)\r\n    return tooltipBox\r\n  }\r\n  function onMouseOver() {\r\n    const tooltipBox = criarTooltipBox(this) // este this faz referencia ao element do forEach acima\r\n    this.addEventListener('mousemove', onMouseMove)\r\n    onMouseMove.tooltipBox = tooltipBox\r\n\r\n    this.addEventListener('mouseleave', onMouseLeave)\r\n    onMouseLeave.tooltipBox = tooltipBox\r\n    onMouseLeave.element = this\r\n  }\r\n  tooltips.forEach(element => {\r\n    element.addEventListener('mouseover', onMouseOver)\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/modules/tooltip.js?");

/***/ }),

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./assets/js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./assets/js/modules/accordion.js\");\n/* harmony import */ var _modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tab-nav.js */ \"./assets/js/modules/tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./assets/js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./assets/js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./assets/js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./assets/js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./assets/js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./assets/js/modules/fetch-animais.js\");\n/* harmony import */ var _modules_scroll_reveal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/scroll-reveal.js */ \"./assets/js/modules/scroll-reveal.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./assets/js/modules/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSmooth = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-js=\"menu\"] a[href^=\"#\"]')\r\nscrollSmooth.init()\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anima=\"accordion\"] dt')\r\naccordion.init()\r\n\r\n;(0,_modules_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n;(0,_modules_scroll_reveal_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n\n\n//# sourceURL=webpack://animais-eslint/./assets/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/script.js");
/******/ 	
/******/ })()
;