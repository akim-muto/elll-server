"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@blueprintjs/core");
const react_1 = __importDefault(require("react"));
const Macromyeditor = function Macromyeditor(props) {
    const { value } = props;
    const style = {
        width: "300px",
        height: "300px",
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Card, { interactive: true, elevation: core_1.Elevation.ONE, style: { alignItems: 'center' } },
            react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", } },
                react_1.default.createElement("img", { src: value.pic, style: style })))));
};
exports.default = Macromyeditor;
