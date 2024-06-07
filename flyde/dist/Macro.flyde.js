"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Macro = void 0;
const namespace = "MongoDB";
exports.Macro = {
    id: "Macro",
    displayName: "Macro",
    defaultStyle: {
        icon: "pen",
    },
    namespace,
    description: "pic",
    runFnBuilder: (config) => {
        return (_, outputs) => {
            outputs.pic.next(config.pic);
        };
    },
    definitionBuilder: (config) => {
        return {
            defaultStyle: {
                size: "small",
                icon: "pen",
            },
            displayName: config.label || undefined,
            description: `pic \`${JSON.stringify(config.pic)}\``,
            inputs: {},
            outputs: {
                pic: {
                    displayName: "pic",
                    description: "pic",
                },
            },
        };
    },
    defaultData: {
        type: "string",
        pic: "https://s3.ap-northeast-1.amazonaws.com/wraptas-prod/azcozaza/f39c3d1f-d30c-49c4-a38b-b69befcbedd2/c6c8d9cba6024e2749e97ea80d81c5aa.png",
        label: '"pic"',
    },
    editorConfig: {
        type: "custom",
        editorComponentBundlePath: "../../dist/ui/Macro.js",
    },
};
