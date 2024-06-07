import { CodeNode } from "@flyde/core";

export const isJson: CodeNode = {
  id: "isJson",
  description: "Check type is JSON",
  inputs: {
    json: { description: "JSON File" },
  },
  outputs: { resurt: { description: "True or False" } },
  run: ({ json }, { resurt }) => {
    try {
        JSON.parse(json);
      } catch (e) {
        resurt.next(false);
        return
      };
      resurt.next(true);
      return
  },
};