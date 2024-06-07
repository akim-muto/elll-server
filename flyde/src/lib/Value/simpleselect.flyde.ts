import { MacroNode } from "@flyde/core";

export interface simpleselectConfig {
  url: "https://test.com/a.png" | "https://test.com/b.png" | "https://test.com/c.png";
}

export const simpleselect: MacroNode<simpleselectConfig> = {
  id: "simpleselect",
  displayName: "Inline Value",
  defaultStyle: {
    icon: "pen",
  },
  description: "A static value or JS expression",
  runFnBuilder: (config) => {
    return (_, outputs) => {
      outputs.value.next(config.url);
    };
  },
  definitionBuilder: (config) => {
    return {
      defaultStyle: {
        size: "small",
        icon: "pen",
      },
      displayName: config.url || undefined,
      description: `Emits the value \`${JSON.stringify(config.url)}\``,
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
    url: "https://test.com/a.png"
  },
  editorConfig: {
    type: "custom",
    editorComponentBundlePath: "../../../../dist/ui/simpleselect.js",
  },
};
