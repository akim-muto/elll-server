"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.includeThenRun = void 0;
exports.includeThenRun = {
    id: "includeThenRun",
    description: "When array include target, Run next",
    inputs: {
        target: { description: "Target" },
        array: { description: "Array" }
    },
    outputs: { outdata: { description: "output data" } },
    run: (inputs, outputs) => {
        const { outdata } = outputs;
        const { target, array } = inputs;
        array.map((item) => (item === target && outdata.next(target)));
    },
};
