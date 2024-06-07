"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@blueprintjs/core");
const react_1 = __importStar(require("react"));
const types = [
    "string",
    "number",
    "json",
    "Array<string>",
    "boolean",
];
const defaultValuePerType = {
    string: (currValue) => `${currValue}`.replace(/\r?\n|\r/g, ""),
    number: (currValue) => isNaN(Number(currValue)) ? 0 : Number(currValue),
    json: (currValue) => isJson(`${currValue}`) ?
        `${currValue}`.replace(/\r?\n|\r/g, "") : `${currValue}`.match(/\r?\n|\r/g) ?
        `${currValue}`.split('\n').map(val => `"${val}"`).join("\n") : JSON.stringify(`${currValue}`),
    'Array<string>': (currValue) => `${currValue}`,
    boolean: (currValue) => !!currValue,
    expression: (currValue) => currValue,
};
const labelMaxLength = 20;
function valToLabel(val) {
    try {
        let label = val;
        if (!isJson(`${val}`)) {
            label = JSON.stringify(`${val}`);
        }
        if (label.length > labelMaxLength) {
            return `${(label.replace(/\r?\\n|\r/g, ",")).slice(0, labelMaxLength)}...`;
        }
        return label;
    }
    catch (e) {
        return `Value`;
    }
}
const InlineValueEditor3 = function InlineValueEditor3(props) {
    const { value, onChange } = props;
    const changeType = (0, react_1.useCallback)((type) => {
        const newValue = defaultValuePerType[type](value.value);
        onChange({
            value: newValue,
            type,
            label: valToLabel(newValue)
        });
    }, [value, onChange]);
    const changeValue = (0, react_1.useCallback)((_val) => {
        const newLabel = valToLabel(_val);
        onChange({ ...value, value: _val, label: newLabel });
    }, [value, onChange]);
    const editorPanel = (0, react_1.useMemo)(() => {
        switch (value.type) {
            case "string":
                return (react_1.default.createElement(core_1.FormGroup, { label: "Value:" },
                    react_1.default.createElement(core_1.InputGroup, { type: "text", value: value.value, onChange: (e) => changeValue(e.target.value) })));
            case "number":
                return (react_1.default.createElement(core_1.FormGroup, { label: "Value:" },
                    react_1.default.createElement(core_1.NumericInput, { value: value.value, onValueChange: (e) => changeValue(e) })));
            case "json":
                return (react_1.default.createElement(core_1.FormGroup, { label: "Value:" },
                    react_1.default.createElement(core_1.TextArea, { value: value.value, onChange: (e) => changeValue(e.target.value) })));
            case "boolean":
                return (react_1.default.createElement(core_1.FormGroup, { label: "Value:" },
                    react_1.default.createElement(core_1.HTMLSelect, { value: value.value, onChange: (e) => changeValue(e.target.value === "true") },
                        react_1.default.createElement("option", { value: "true" }, "true"),
                        react_1.default.createElement("option", { value: "false" }, "false"))));
            case "Array<string>":
                return (react_1.default.createElement(core_1.FormGroup, { label: "Value:" },
                    react_1.default.createElement(core_1.TextArea, { value: value.value, onChange: (e) => changeValue(e.target.value) })));
        }
    }, [value, changeValue]);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.FormGroup, { label: "Value type:" },
            react_1.default.createElement(core_1.HTMLSelect, { value: value.type, onChange: (e) => changeType(e.target.value) }, types.map((type) => (react_1.default.createElement("option", { key: type, value: type }, type))))),
        editorPanel,
        react_1.default.createElement(core_1.FormGroup, { label: "Label:" },
            react_1.default.createElement(core_1.InputGroup, { type: "text", value: (value.type === "json" ? value.label.replace(/\r?\\n|\r/g, "") : value.type === "Array<string>" ? "[".concat(value.label.replace(/\r?\\n|\r/g, ","), "]") : value.label), onChange: (e) => onChange({ ...value, label: e.target.value }) }))));
};
function isJson(value) {
    try {
        JSON.parse(value);
    }
    catch (e) {
        return false;
    }
    return true;
}
exports.default = InlineValueEditor3;
