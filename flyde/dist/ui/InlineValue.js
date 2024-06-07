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

/***/ "./src/lib/Value/InlineValue.tsx":
/*!***************************************!*\
  !*** ./src/lib/Value/InlineValue.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst core_1 = __webpack_require__(/*! @blueprintjs/core */ \"@blueprintjs/core\");\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nconst types = [\r\n    \"string\",\r\n    \"number\",\r\n    \"json\",\r\n    \"Array<string>\",\r\n    \"boolean\",\r\n];\r\nconst defaultValuePerType = {\r\n    string: (currValue) => `${currValue}`.replace(/\\r?\\n|\\r/g, \"\"),\r\n    number: (currValue) => isNaN(Number(currValue)) ? 0 : Number(currValue),\r\n    json: (currValue) => isJson(`${currValue}`) ?\r\n        `${currValue}`.replace(/\\r?\\n|\\r/g, \"\") : `${currValue}`.match(/\\r?\\n|\\r/g) ?\r\n        `${currValue}`.split('\\n').map(val => `\"${val}\"`).join(\"\\n\") : JSON.stringify(`${currValue}`),\r\n    'Array<string>': (currValue) => `${currValue}`,\r\n    boolean: (currValue) => !!currValue,\r\n    expression: (currValue) => currValue,\r\n};\r\nconst labelMaxLength = 20;\r\nfunction valToLabel(val) {\r\n    try {\r\n        let label = val;\r\n        if (!isJson(`${val}`)) {\r\n            label = JSON.stringify(`${val}`);\r\n        }\r\n        if (label.length > labelMaxLength) {\r\n            return `${(label.replace(/\\r?\\\\n|\\r/g, \",\")).slice(0, labelMaxLength)}...`;\r\n        }\r\n        return label;\r\n    }\r\n    catch (e) {\r\n        return `Value`;\r\n    }\r\n}\r\nconst InlineValueEditor3 = function InlineValueEditor3(props) {\r\n    const { value, onChange } = props;\r\n    const changeType = (0, react_1.useCallback)((type) => {\r\n        const newValue = defaultValuePerType[type](value.value);\r\n        onChange({\r\n            value: newValue,\r\n            type,\r\n            label: valToLabel(newValue)\r\n        });\r\n    }, [value, onChange]);\r\n    const changeValue = (0, react_1.useCallback)((_val) => {\r\n        const newLabel = valToLabel(_val);\r\n        onChange({ ...value, value: _val, label: newLabel });\r\n    }, [value, onChange]);\r\n    const editorPanel = (0, react_1.useMemo)(() => {\r\n        switch (value.type) {\r\n            case \"string\":\r\n                return (react_1.default.createElement(core_1.FormGroup, { label: \"Value:\" },\r\n                    react_1.default.createElement(core_1.InputGroup, { type: \"text\", value: value.value, onChange: (e) => changeValue(e.target.value) })));\r\n            case \"number\":\r\n                return (react_1.default.createElement(core_1.FormGroup, { label: \"Value:\" },\r\n                    react_1.default.createElement(core_1.NumericInput, { value: value.value, onValueChange: (e) => changeValue(e) })));\r\n            case \"json\":\r\n                return (react_1.default.createElement(core_1.FormGroup, { label: \"Value:\" },\r\n                    react_1.default.createElement(core_1.TextArea, { value: value.value, onChange: (e) => changeValue(e.target.value) })));\r\n            case \"boolean\":\r\n                return (react_1.default.createElement(core_1.FormGroup, { label: \"Value:\" },\r\n                    react_1.default.createElement(core_1.HTMLSelect, { value: value.value, onChange: (e) => changeValue(e.target.value === \"true\") },\r\n                        react_1.default.createElement(\"option\", { value: \"true\" }, \"true\"),\r\n                        react_1.default.createElement(\"option\", { value: \"false\" }, \"false\"))));\r\n            case \"Array<string>\":\r\n                return (react_1.default.createElement(core_1.FormGroup, { label: \"Value:\" },\r\n                    react_1.default.createElement(core_1.TextArea, { value: value.value, onChange: (e) => changeValue(e.target.value) })));\r\n        }\r\n    }, [value, changeValue]);\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(core_1.FormGroup, { label: \"Value type:\" },\r\n            react_1.default.createElement(core_1.HTMLSelect, { value: value.type, onChange: (e) => changeType(e.target.value) }, types.map((type) => (react_1.default.createElement(\"option\", { key: type, value: type }, type))))),\r\n        editorPanel,\r\n        react_1.default.createElement(core_1.FormGroup, { label: \"Label:\" },\r\n            react_1.default.createElement(core_1.InputGroup, { type: \"text\", value: (value.type === \"json\" ? value.label.replace(/\\r?\\\\n|\\r/g, \"\") : value.type === \"Array<string>\" ? \"[\".concat(value.label.replace(/\\r?\\\\n|\\r/g, \",\"), \"]\") : value.label), onChange: (e) => onChange({ ...value, label: e.target.value }) }))));\r\n};\r\nfunction isJson(value) {\r\n    try {\r\n        JSON.parse(value);\r\n    }\r\n    catch (e) {\r\n        return false;\r\n    }\r\n    return true;\r\n}\r\nexports[\"default\"] = InlineValueEditor3;\r\n\n\n//# sourceURL=webpack://__MacroNode__InlineValue/./src/lib/Value/InlineValue.tsx?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/lib/Value/InlineValue.tsx");
/******/ 	window.__MacroNode__InlineValue = __webpack_exports__;
/******/ 	
/******/ })()
;