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

/***/ "./src/lib/Value/simpleselect.tsx":
/*!****************************************!*\
  !*** ./src/lib/Value/simpleselect.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst core_1 = __webpack_require__(/*! @blueprintjs/core */ \"@blueprintjs/core\");\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst urls = [\r\n    \"https://test.com/a.png\",\r\n    \"https://test.com/b.png\",\r\n    \"https://test.com/c.png\",\r\n];\r\nconst selectEditor = function selectEditor(props) {\r\n    const { value, onChange } = props;\r\n    const changeType = (0, react_1.useCallback)((url) => {\r\n        onChange({\r\n            url\r\n        });\r\n    }, [value, onChange]);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(core_1.FormGroup, { label: \"Value type:\" },\r\n            react_1.default.createElement(core_1.HTMLSelect, { value: value.url, onChange: (e) => changeType(e.target.value) }, urls.map((url) => (react_1.default.createElement(\"option\", { key: url, value: url }, url)))))));\r\n};\r\nexports[\"default\"] = selectEditor;\r\n\n\n//# sourceURL=webpack://__MacroNode__simpleselect/./src/lib/Value/simpleselect.tsx?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lib/Value/simpleselect.tsx");
/******/ 	window.__MacroNode__simpleselect = __webpack_exports__;
/******/ 	
/******/ })()
;