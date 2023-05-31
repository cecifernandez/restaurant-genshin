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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadContact = () => {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n  const pageContent = document.createElement(\"div\");\r\n  pageContent.setAttribute(\"id\", \"contact\");\r\n  pageContent.setAttribute(\"id\", \"page-content\");\r\n\r\n  contentDiv.appendChild(pageContent);\r\n\r\n  const contactTitle = document.createElement(\"h1\");\r\n  contactTitle.innerHTML = \"Come visit us!\";\r\n  contactTitle.setAttribute(\"id\", \"contact-title\");\r\n  pageContent.appendChild(contactTitle);\r\n\r\n  const mapLocation = document.createElement(\"img\");\r\n  mapLocation.src = \"/src/assets/imgs/location.png\";\r\n  mapLocation.setAttribute(\"id\", \"map-location\");\r\n  pageContent.appendChild(mapLocation);\r\n\r\n  \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurant-genshin/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadHome = () => {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n  const pageContent = document.createElement(\"div\");\r\n  pageContent.setAttribute(\"id\", \"home\");\r\n  pageContent.setAttribute(\"id\", \"page-content\");\r\n\r\n  contentDiv.appendChild(pageContent);\r\n\r\n  const filterBg = document.createElement(\"div\");\r\n  pageContent.appendChild(filterBg);\r\n  filterBg.setAttribute(\"id\", \"filter\");\r\n\r\n  const elementsDiv = document.createElement(\"div\");\r\n  elementsDiv.setAttribute(\"id\", \"home-elements\");\r\n  pageContent.appendChild(elementsDiv);\r\n\r\n  const restaurantTitle = document.createElement(\"h1\");\r\n  restaurantTitle.textContent = \"ShiMura's\";\r\n  restaurantTitle.setAttribute(\"id\", \"title\");\r\n  elementsDiv.appendChild(restaurantTitle);\r\n\r\n  const dishImg = document.createElement(\"img\");\r\n  dishImg.src = \"/src/assets/imgs/miso-soup.png\";\r\n  dishImg.setAttribute(\"id\", \"dish\");\r\n  elementsDiv.appendChild(dishImg);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\r\n\n\n//# sourceURL=webpack://restaurant-genshin/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadWebsite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadWebsite.js */ \"./src/loadWebsite.js\");\n\r\n\r\n(0,_loadWebsite_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-genshin/./src/index.js?");

/***/ }),

/***/ "./src/loadWebsite.js":
/*!****************************!*\
  !*** ./src/loadWebsite.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\r\n\r\n\r\nfunction loadPage() {\r\n  (0,_nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\r\n\n\n//# sourceURL=webpack://restaurant-genshin/./src/loadWebsite.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadMenu = () => {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n  const pageContent = document.createElement(\"div\");\r\n  pageContent.setAttribute(\"id\", \"menu\");\r\n  pageContent.setAttribute(\"id\", \"page-content\");\r\n\r\n  contentDiv.appendChild(pageContent);\r\n\r\n  const foodTitle = document.createElement(\"h1\");\r\n  pageContent.appendChild(foodTitle);\r\n  foodTitle.innerHTML = \"Shimura's Menu\";\r\n  foodTitle.setAttribute(\"id\", \"food-title\");\r\n\r\n  const foodList = document.createElement(\"ul\");\r\n  foodList.setAttribute(\"id\", \"food-list\");\r\n  pageContent.appendChild(foodList);\r\n\r\n  const createFoodItem = (name, imgUrl, price) => {\r\n    const foodItem = document.createElement(\"li\");\r\n    foodItem.setAttribute(\"class\", \"food-item\");\r\n\r\n    const foodImg = document.createElement(\"img\");\r\n    foodImg.src = imgUrl;\r\n    foodItem.appendChild(foodImg);\r\n\r\n    const foodDetails = document.createElement(\"div\");\r\n    foodDetails.setAttribute(\"class\", \"food-details\");\r\n\r\n    const foodName = document.createElement(\"span\");\r\n    foodName.setAttribute(\"class\", \"food-name\");\r\n    foodName.innerHTML = name;\r\n    foodDetails.appendChild(foodName);\r\n\r\n    const priceBox = document.createElement(\"div\");\r\n    priceBox.setAttribute(\"class\", \"price-box\");\r\n\r\n    const priceIcon = document.createElement(\"img\");\r\n    priceIcon.setAttribute(\"class\", \"price-icon\")\r\n    priceIcon.src = \"/src/assets/imgs/coin.png\";\r\n\r\n    priceBox.appendChild(priceIcon);\r\n\r\n    const foodPrice = document.createElement(\"span\");\r\n    foodPrice.setAttribute(\"class\", \"food-price\");\r\n    foodPrice.innerHTML = price;\r\n    priceBox.appendChild(foodPrice);\r\n\r\n    foodDetails.appendChild(priceBox);\r\n    foodItem.appendChild(foodDetails);\r\n\r\n    return foodItem;\r\n  };\r\n\r\n  const pickledFood = createFoodItem(\r\n    \"Pickled Treasure\",\r\n    \"/src/assets/imgs/Item_Five_Pickled_Treasures.png\",\r\n    \"9.99\"\r\n  );\r\n  const sangaFood = createFoodItem(\r\n    \"Sangayaki\",\r\n    \"/src/assets/imgs/Item_Sangayaki.png\",\r\n    \"8.99\"\r\n  );\r\n  const eggFood = createFoodItem(\r\n    \"Egg Roll\",\r\n    \"/src/assets/imgs/Item_Egg_Roll.png\",\r\n    \"7.99\"\r\n  );\r\n\r\n  const ramenFood = createFoodItem(\r\n    \"Tonkotsu Ramen\",\r\n    \"/src/assets/imgs/Item_Tonkotsu_Ramen.png\",\r\n    \"10.99\"\r\n  );\r\n\r\n  const omeletteFood = createFoodItem(\r\n    \"Omelette Rice\",\r\n    \"/src/assets/imgs/Item_Omelette_Rice.png\",\r\n    \"11.00\"\r\n  );\r\n\r\n  const unagiFood = createFoodItem(\r\n    \"Unagi Chazuke\",\r\n    \"/src/assets/imgs/Item_Unagi_Chazuke.png\",\r\n    \"12.90\"\r\n  );\r\n\r\n  foodList.appendChild(pickledFood);\r\n  foodList.appendChild(sangaFood);\r\n  foodList.appendChild(eggFood);\r\n  foodList.appendChild(ramenFood);\r\n  foodList.appendChild(omeletteFood);\r\n  foodList.appendChild(unagiFood);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\r\n\n\n//# sourceURL=webpack://restaurant-genshin/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconst loadNav = () => {\r\n  const contentDiv = document.querySelector(\"#content\");\r\n  const navContent = document.createElement(\"div\");\r\n  const navBar = document.createElement(\"nav\");\r\n  contentDiv.appendChild(navContent);\r\n  navContent.appendChild(navBar);\r\n  navBar.setAttribute(\"id\", \"nav\");\r\n\r\n  const navList = document.createElement(\"ul\");\r\n  navList.setAttribute(\"id\", \"list\");\r\n  navBar.appendChild(navList);\r\n\r\n  const homeNav = document.createElement(\"li\");\r\n  const menuNav = document.createElement(\"li\");\r\n  const contactNav = document.createElement(\"li\");\r\n\r\n  contactNav.textContent = \"CONTACT\";\r\n  menuNav.textContent = \"MENU\";\r\n  homeNav.textContent = \"HOME\";\r\n\r\n  navList.appendChild(homeNav);\r\n  navList.appendChild(menuNav);\r\n  navList.appendChild(contactNav);\r\n\r\n  function clearPage() {\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.querySelector(\"#page-content\");\r\n\r\n    if (pageContent) {\r\n      content.removeChild(pageContent);\r\n    }\r\n  }\r\n\r\n  homeNav.addEventListener(\"click\", () => {\r\n    clearPage();\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  menuNav.addEventListener(\"click\", () => {\r\n    clearPage();\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n  \r\n  contactNav.addEventListener(\"click\", () => {\r\n    clearPage();\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadNav);\r\n\n\n//# sourceURL=webpack://restaurant-genshin/./src/nav.js?");

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