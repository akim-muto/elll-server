"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineValue = void 0;
exports.InlineValue = {
    id: "InlineValue",
    displayName: "Inline Value",
    defaultStyle: {
        icon: "pen",
    },
    description: "A static value or JS expression",
    runFnBuilder: (config) => {
        return (_, outputs) => {
            if (config.type === "Array<string>") {
                outputs.value.next(config.value.split('\n'));
            }
            else {
                outputs.value.next(config.value);
            }
        };
    },
    definitionBuilder: (config) => {
        return {
            defaultStyle: {
                size: "small",
                icon: "pen",
            },
            displayName: config.label || undefined,
            description: `Emits the value \`${JSON.stringify(config.value)}\``,
            inputs: {},
            outputs: {
                value: {
                    displayName: "Value",
                    description: "Emits the value configured",
                },
            },
        };
    },
    defaultData: {
        type: "string",
        value: "Hello",
        label: '"Hello"',
    },
    editorConfig: {
        type: "custom",
        editorComponentBundlePath: "../../dist/ui/InlineValue.js",
    },
};
