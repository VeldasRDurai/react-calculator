import React from "react";
import Display from "./display";

function Key(props) {
  return (
    <button onClick={Display.show} className="clskey" id={"id" + props.id}>
      {props.value}
    </button>
  );
}

export default Key;
