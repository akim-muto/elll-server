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

/***/ "./src/Macro.tsx":
/*!***********************!*\
  !*** ./src/Macro.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst core_1 = __webpack_require__(/*! @blueprintjs/core */ \"@blueprintjs/core\");\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nconst Macromyeditor = function Macromyeditor(props) {\r\n    const { value } = props;\r\n    const style = {\r\n        width: \"300px\",\r\n        height: \"300px\",\r\n    };\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(core_1.Card, { interactive: true, elevation: core_1.Elevation.ONE, style: { alignItems: 'center' } },\r\n            react_1.default.createElement(\"div\", { style: { display: \"flex\", flexDirection: \"row\", flexWrap: \"wrap\", justifyContent: \"center\", } },\r\n                react_1.default.createElement(\"img\", { src: value.pic, style: style })))));\r\n};\r\nexports[\"default\"] = Macromyeditor;\r\n\n\n//# sourceURL=webpack://__MacroNode__Macro/./src/Macro.tsx?");

/***/ }),

/***/ "@blueprintjs/core":
/*!****************************!*\
  !*** external "Blueprint" ***!
  \****************************/
/***/ ((module) => {

module.exports = window["Blueprint"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Macro.tsx");
/******/ 	window.__MacroNode__Macro = __webpack_exports__;
/******/ 	
/******/ })()
;