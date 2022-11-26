/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//Content div in HTMl\nconst content = document.getElementById(\"content\");\n//Create these elements for our html using JS, and append when page is laoded\n// image(img), headline(h1), and some copy(p) about how wonderful the restaurant is\nconst image = document.createElement(\"img\"); \nconst headline = document.createElement(\"h1\");\nconst description = document.createElement(\"p\");\n//Do this when window first loads up\nwindow.onload = (e) => {\n    //set image src \n    image.setAttribute('src', './assets/images/restaurant.png');\n    //append elements to #content when page loads up\n    content.appendChild(image);\n    content.appendChild(headline);\n    //set headlines text content\n    headline.textContent = \"Welcome to the Restaurant!\";\n    content.appendChild(description);\n    //set some text for it \n    description.textContent = \"This is probably most likeley and definiteley a maybe possibility that this will be the best restauratn you will have ever been to.  Enjoy!\";\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;