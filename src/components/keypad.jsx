import React from "react";
import Key from "./key";
import clk from "../value";

function Keypad() {
  return (
    <div className="clskeypad">
      {clk.map(function (value, index) {
        return (
          <Key
            key={value.key}
            id={value.id.toString()}
            value={value.value}
            print={value.print}
          />
        );
      })}
    </div>
  );
}

export default Keypad;
