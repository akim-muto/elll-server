"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isJson = void 0;
exports.isJson = {
    id: "isJson",
    description: "Check type is JSON",
    inputs: {
        json: { description: "JSON File" },
    },
    outputs: { resurt: { description: "True or False" } },
    run: ({ json }, { resurt }) => {
        try {
            JSON.parse(json);
        }
        catch (e) {
            resurt.next(false);
            return;
        }
        ;
        resurt.next(true);
        return;
    },
};
