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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//This will display contact info(socials, phone number, email etc.,)loads on button/tab click\nconst createContact = () => {\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"contact\");\n\n    const contactContent = document.createElement(\"h1\");\n    contactContent.textContent = \"This is the contact form\";\n    contact.appendChild(contactContent);\n    return contact;\n};\n\nconst loadContactTab = () => {\n    const currentContent = document.getElementById(\"content\");\n    currentContent.textContent = '';\n    currentContent.appendChild(createContact());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactTab);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst createHome = () => {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"home\");\n  \n  const restaurantImg = document.createElement(\"img\");\n  restaurantImg.src = \"./assets/images/restaurant.png\";\n  restaurantImg.alt = \"restaurant\";\n  \n  home.appendChild(restaurantImg);\n  home.appendChild(makeHeadLine(\"Welcome to the restaurant!\"));\n  home.appendChild(\n    makeParagraph(\n      \"This will be the best place you ever eat at!  Most likeley at least, we hope :/\"\n    )\n  );\n\n  return home;\n};\nconst makeHeadLine = (text) => {\n  const header = document.createElement(\"h1\");\n  header.textContent = text;\n  return header;\n};\nconst makeParagraph = (text) => {\n  const paragraph = document.createElement(\"p\");\n  paragraph.textContent = text;\n  return paragraph;\n};\nconst loadHomeTab = () => {\n    const currentContent = document.getElementById(\"content\");\n    currentContent.textContent = '';\n    currentContent.appendChild(createHome());\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomeTab);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n//Default to the home tab when the page is loaded or refreshed\nwindow.onload = (e) => {\n    //loadHomeTab();\n    //loadContactTab();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n};\n\n//event listeners for tab buttons\n//on click, they will call the appropriate loaders\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//This will be the tab that displays a menu for the user, loads on button/tab click\nconst createMenu = () => {\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"menu\");\n\n    const menuContent = document.createElement(\"h1\");\n    menuContent.textContent = \"This is the menu tab\";\n    menu.appendChild(menuContent);\n    return menu;\n};\n\nconst loadMenuTab = () => {\n    const currentContent = document.getElementById(\"content\");\n    currentContent.textContent = '';\n    currentContent.appendChild(createMenu());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuTab);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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