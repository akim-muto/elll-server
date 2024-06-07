import { CodeNode } from "@flyde/core";

export const includeThenRun: CodeNode = {
  id: "includeThenRun",
  description: "When array include target, Run next",
  inputs: {
    target: { description: "Target" },
    array: { description: "Array" }
  },
  outputs: { outdata: { description: "output data" } },
  run: (inputs, outputs) => {
    const { outdata } = outputs;
    const { target,array } = inputs;

    array.map(( item ) => (item === target && outdata.next(target)));
  },
};