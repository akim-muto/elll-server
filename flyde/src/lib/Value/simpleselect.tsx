import {
  FormGroup,
  HTMLSelect,
} from "@blueprintjs/core";
import type { simpleselectConfig } from "./simpleselect.flyde";
import React, { useCallback } from "react";
import { MacroEditorComp } from "@flyde/core";

const urls: simpleselectConfig["url"][] = [
  "https://test.com/a.png",
  "https://test.com/b.png",
  "https://test.com/c.png",
];

const selectEditor: MacroEditorComp<simpleselectConfig> =
  function selectEditor(props) {
    const { value, onChange } = props;

    const changeType = useCallback(
      (url) => {
        onChange({
          url
        });
      },
      [value, onChange]
    );

    return (
      <div>
        <FormGroup label="Value type:">
          <HTMLSelect
            value={value.url}
            onChange={(e) =>
              changeType(e.target.value as simpleselectConfig["url"])
            }
          >
            {urls.map((url) => (
              <option key={url} value={url}>
                {url}
              </option>
            ))}
          </HTMLSelect>
        </FormGroup>
      </div>
    );
  };

export default selectEditor;
