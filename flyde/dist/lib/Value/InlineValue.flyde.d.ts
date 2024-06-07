import { MacroNode } from "@flyde/core";
export interface InlineValueConfig {
    type: "string" | "boolean" | "number" | "json" | "Array<string>";
    value: string;
    label: string;
}
export declare const InlineValue: MacroNode<InlineValueConfig>;
//# sourceMappingURL=InlineValue.flyde.d.ts.map