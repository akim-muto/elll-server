import {
  Card,
  Elevation
} from "@blueprintjs/core";
import type { InlineValueConfig } from "./Macro.flyde"
import React from "react";
import { MacroEditorComp } from "@flyde/core";

const Macromyeditor: MacroEditorComp<InlineValueConfig> =
  function Macromyeditor(props) {
    const { value } = props;

    const style: { [key: string]: string } = {
      width: "300px",
	    height: "300px",
    };

    return (
      <div>
        <Card interactive={true} elevation={Elevation.ONE} style={{alignItems: 'center'}}>
          <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center",}}>
            <img src={value.pic} style={style}></img>
          </div>
        </Card>
      </div>
    );
  };

export default Macromyeditor;
