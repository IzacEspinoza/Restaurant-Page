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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createContact = () => {\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"contact\");\n\n    const contactContent = document.createElement(\"h1\");\n    contactContent.textContent = \"Contact\";\n    contact.appendChild(contactContent);\n\n    contact.appendChild(createForm());\n    return contact;\n};\nconst createForm = () => {\n    const contactForm = document.createElement(\"form\");\n    contactForm.classList.add(\"contact-form\");\n\n    const nameField = document.createElement(\"fieldset\");\n    nameField.classList.add(\"name-field\");\n    const firstName = document.createElement(\"input\");\n    firstName.type = \"text\";\n    firstName.placeholder = \"First Name\";\n    firstName.classList.add(\"name-inputs\");\n    const lastName = document.createElement(\"input\");\n    lastName.type = \"text\";\n    lastName.placeholder = \"Last Name\";\n    lastName.classList.add(\"name-inputs\");\n    nameField.appendChild(firstName);\n    nameField.appendChild(lastName);\n    \n\n    const infoField = document.createElement(\"fieldset\");\n    infoField.classList.add(\"info-field\");\n    const email = document.createElement(\"input\");\n    email.type = \"text\";\n    email.placeholder = \"Email\";\n    email.classList.add(\"info-inputs\");\n    const phoneNumber = document.createElement(\"input\");\n    phoneNumber.type = \"text\";\n    phoneNumber.placeholder = \"Phone Number\";\n    phoneNumber.classList.add(\"info-inputs\");\n    infoField.appendChild(email);\n    infoField.appendChild(phoneNumber);\n\n\n\n    const messageField = document.createElement(\"fieldset\");\n    messageField.classList.add(\"message-field\");\n\n    contactForm.appendChild(nameField);\n    contactForm.appendChild(infoField);\n    // contactForm.appendChild(messageField);\n\n\n    return contactForm;\n};\nconst loadContactTab = () => {\n    const currentContent = document.querySelector(\".main\");\n    currentContent.textContent = '';\n    currentContent.appendChild(createContact());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createHome = () => {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n\n  const homeContent = document.createElement(\"h1\");\n  homeContent.textContent = \"Home\";\n  home.appendChild(homeContent);\n  \n  const restaurantImg = document.createElement(\"img\");\n  restaurantImg.classList.add(\"restaurant-Pic\");\n  restaurantImg.src = \"./assets/images/restaurant.png\";\n  restaurantImg.alt = \"restaurant\";\n  \n  home.appendChild(restaurantImg);\n  home.appendChild(makeHeadLine(\"Welcome to the restaurant!\"));\n  home.appendChild(\n    makeParagraph(\n      \"This will be the best place you ever eat at!  Most likeley at least, we hope :/\"\n    )\n  );\n\n  return home;\n};\nconst makeHeadLine = (text) => {\n  const header = document.createElement(\"h1\");\n  header.textContent = text;\n  return header;\n};\nconst makeParagraph = (text) => {\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = text;\n  return paragraph;\n};\nconst loadHomeTab = () => {\n    const main = document.getElementById(\"main\");\n    main.textContent = '';\n    main.appendChild(createHome());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeTab);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\n\n\n\n\n\n//Default to the home tab when the page is loaded or refreshed\nwindow.onload = (e) => {\n    //loadHomeTab();\n    //initialize\n    (0,_website__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    //loadContactTab();\n    //loadMenuTab();\n};\n\n//event listeners for tab buttons\n//on click, they will call the appropriate loaders\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createMenu = () => {\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n\n    const menuContent = document.createElement(\"h1\");\n    menuContent.textContent = \"Menu\";\n    menu.appendChild(menuContent);\n\n    const menuGrid = document.createElement(\"div\");\n    menuGrid.classList.add(\"menu-grid\");\n\n    menuGrid.appendChild(createMenuItem(\"pizza\", \"Delicious Pizza straight from the country of Italia, Yummy!\"));\n    menuGrid.appendChild(createMenuItem(\"cake\", \"Scrumptious fluffy cake made by local bakery.\"));\n    menuGrid.appendChild(createMenuItem(\"steak\", \"Choice cut of Ribeye, served with sides, Delicious!\"));\n    menuGrid.appendChild(createMenuItem(\"mashed-potatoes\", \"Soft serve fluffy mashed potatoes, perfect side for any dish.\"));\n    menuGrid.appendChild(createMenuItem(\"spaghetti\", \"Classic Italian pasta meal, oh yeah!\"));\n    menuGrid.appendChild(createMenuItem(\"garlic_bread\", \"Crunchy and tasteful bread toasted with garlic cloves and herbs, a great side!\"));\n\n    menu.appendChild(menuGrid);\n    return menu;\n};\nconst createMenuItem = (itemName, itemDescription) => {\n    const menuItem = document.createElement(\"div\");\n    menuItem.classList.add(\"menu-item\");\n\n    const foodName = document.createElement(\"h2\");\n    foodName.textContent = itemName;\n\n    const foodDescription = document.createElement(\"p\");\n    foodDescription.textContent = itemDescription;\n\n    const foodImage = document.createElement(\"img\");\n    foodImage.src = `./assets/images/${itemName}.png`;\n    foodImage.alt = `${itemName} image`;\n\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDescription);\n    menuItem.appendChild(foodImage);\n\n    return menuItem;\n};\nconst loadMenuTab = () => {\n    const currentContent = document.querySelector(\".main\");\n    currentContent.textContent = '';\n    currentContent.appendChild(createMenu());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuTab);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n//all default webcontent will be here, e.g: nav bar, menus, footers\n\nconst createHeader = () => {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"header\");\n    \n    const restaurantName = document.createElement(\"h1\");\n    restaurantName.classList.add(\"restaurant-name\");\n    restaurantName.textContent = \"Super Cool Restaurant\";\n\n    header.appendChild(restaurantName);\n    header.appendChild(createNav());\n\n    return header;\n};\nconst createNav = () => {\n    const nav = document.createElement(\"nav\");\n    nav.classList.add(\"nav-bar\");\n\n    const homeBtn = document.createElement(\"button\");\n    homeBtn.classList.add(\"tab-button\");\n    homeBtn.textContent = \"Home\";\n    homeBtn.addEventListener(\"click\", (e) => {\n        if(e.target.classList.contains(\"active\")) return;\n        setActiveButton(homeBtn);\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n\n    const menuBtn = document.createElement(\"button\");\n    menuBtn.classList.add(\"tab-button\");\n    menuBtn.textContent = \"Menu\";\n    menuBtn.addEventListener(\"click\", (e) => {\n        if(e.target.classList.contains(\"active\")) return;//pretty much saying if this tab is already active, just return it(mayeb it reloads it? just keep saem active?)\n        setActiveButton(menuBtn);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n\n    const contactBtn = document.createElement(\"button\");\n    contactBtn.classList.add(\"tab-button\");\n    contactBtn.textContent = \"Contact\";\n    contactBtn.addEventListener(\"click\", (e) => {\n        if(e.target.classList.contains(\"active\")) return;\n        setActiveButton(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    nav.appendChild(homeBtn);\n    nav.appendChild(menuBtn);\n    nav.appendChild(contactBtn);\n\n    return nav;\n};\nconst setActiveButton = (button) => {\n    const navButtons = document.querySelectorAll(\".tab-button\");\n  \n    navButtons.forEach((button) => {\n      if (button !== undefined) {\n        button.classList.remove(\"active\");\n      }\n    });\n  \n    button.classList.add(\"active\");\n}\nconst createMain = () => {\n    const main = document.createElement(\"main\");\n    main.classList.add(\"main\");\n    main.setAttribute(\"id\", \"main\");\n    main.textContent = \"Some coolo inof\";\n    return main;\n}\nconst createFooter = () => {\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"footer\");\n\n    const copyright = document.createElement(\"p\");\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} Izac Espinoza`;\n\n    const gitHubLink = document.createElement(\"a\");\n    gitHubLink.href = \"https://github.com/IzacEspinoza\";\n\n    footer.appendChild(copyright);\n    footer.appendChild(gitHubLink);\n\n    return footer;\n}\nconst initializeWebsite = () => {\n    const content = document.getElementById(\"content\");\n\n    content.appendChild(createHeader());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector(\".tab-button\"));\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;