import {
  FormGroup,
  HTMLSelect,
  InputGroup,
  NumericInput,
  TextArea,
} from "@blueprintjs/core";
import type { InlineValueConfig } from "./InlineValue.flyde";
import React, { useCallback, useMemo } from "react";
import { MacroEditorComp } from "@flyde/core";

const types: InlineValueConfig["type"][] = [
  "string",
  "number",
  "json",
  "Array<string>",
  "boolean",
];

const defaultValuePerType = {
  string: (currValue: any) => `${currValue}`.replace(/\r?\n|\r/g,""),
  number: (currValue: any) =>
    isNaN(Number(currValue)) ? 0 : Number(currValue),
  json: (currValue: any) =>
    isJson(`${currValue}`) ?
      `${currValue}`.replace(/\r?\n|\r/g,"") : `${currValue}`.match(/\r?\n|\r/g) ?
        `${currValue}`.split('\n').map(val => `"${val}"`).join("\n") : JSON.stringify(`${currValue}`) ,
  'Array<string>':(currValue: any) => `${currValue}`,
  boolean: (currValue: any) => !!currValue,
  expression: (currValue: any) => currValue,
};

const labelMaxLength = 20;

function valToLabel(val: any): string {
  try {
    let label = val;

    if (!isJson(`${val}`)) {
      label = JSON.stringify(`${val}`)
    }

    if (label.length > labelMaxLength) { 
      return `${(label.replace(/\r?\\n|\r/g,",")).slice(0, labelMaxLength)}...`;
    }

    return label;
  } catch (e) {
    return `Value`;
  }
}

const InlineValueEditor3: MacroEditorComp<InlineValueConfig> =
  function InlineValueEditor3(props) {
    const { value, onChange } = props;

    const changeType = useCallback(
      (type) => {
        const newValue = defaultValuePerType[type](value.value);
        onChange({
          value: newValue,
          type,
          label: valToLabel(newValue)
        });
      },
      [value, onChange]
    );

    const changeValue = useCallback(
      (_val) => {
        const newLabel = valToLabel(_val);
        onChange({ ...value, value: _val, label: newLabel});
      },
      [value, onChange]
    );

    const editorPanel = useMemo(() => {
      switch (value.type) {
        case "string":
          return (
            <FormGroup label="Value:">
              <InputGroup
                type="text"
                value={value.value}
                onChange={(e) => changeValue(e.target.value)}
              />
            </FormGroup>
          );
        case "number":
          return (
            <FormGroup label="Value:">
              <NumericInput
                value={value.value}
                onValueChange={(e) => changeValue(e)}
              />
            </FormGroup>
          );
        case "json":
          return (
            <FormGroup label="Value:">
              <TextArea
                value={value.value}
                onChange={(e) => changeValue(e.target.value)}
              />
            </FormGroup>
          );
        case "boolean":
          return (
            <FormGroup label="Value:">
              <HTMLSelect
                value={value.value}
                onChange={(e) => changeValue(e.target.value === "true")}
              >
                <option value="true">true</option>
                <option value="false">false</option>
              </HTMLSelect>
            </FormGroup>
          );
        case "Array<string>":
          return (
            <FormGroup label="Value:">
              <TextArea
                value={value.value}
                onChange={(e) => changeValue(e.target.value)}
              />
            </FormGroup>
          );
      }
    }, [value, changeValue]);

    return (
      <div>
        <FormGroup label="Value type:">
          <HTMLSelect
            value={value.type}
            onChange={(e) =>
              changeType(e.target.value as InlineValueConfig["type"])
            }
          >
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </HTMLSelect>
        </FormGroup>
        {editorPanel}
        <FormGroup label="Label:">
          <InputGroup
            type="text"
            value={(value.type === "json" ? value.label.replace(/\r?\\n|\r/g, "") : value.type === "Array<string>" ? "[".concat(value.label.replace(/\r?\\n|\r/g,","),"]") : value.label)}
            onChange={(e) => onChange({ ...value, label: e.target.value })}
          />
        </FormGroup>
      </div>
    );
  };

function  isJson(value:string):boolean {
  try {
    JSON.parse(value)
  } catch (e) {
    return false
  }
  return true
}

export default InlineValueEditor3;