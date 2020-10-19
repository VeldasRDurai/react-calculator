import React, { useState } from "react";
import clk from "../value";

function Display() {
  let [print, setPrint] = useState("");

  function show(event) {
    let id = event.target.id.slice(2);
    let { value: newValue } = clk.find(function (item, index) {
      return item.id === id;
    });

    if (newValue === "=") {
      setPrint(function (preValue) {
        return calculate(preValue);
      });
    } else if (newValue === "AC") {
      setPrint("");
    } else if (newValue === "CE") {
      setPrint(function (preValue) {
        return preValue.slice(0, -1);
      });
    } else if (
      newValue === "X" ||
      newValue === "/" ||
      newValue === "+" ||
      newValue === "-"
    ) {
      setPrint(function (preValue) {
        console.log(preValue);
        let validate = ["X", "/", "+", "-"].map(function (new_) {
          if (preValue.indexOf(new_) === -1) {
            return false;
          } else {
            return true;
          }
        });
        console.log(validate);

        let finalValidate = validate.some(function (item) {
          return item === true;
        });
        console.log(finalValidate);

        if (finalValidate === true) {
          return calculate(preValue) + newValue;
        } else {
          // console.log(calculate(preValue));
          return preValue + newValue;
        }
        // if (preValue.indexOf(newValue) === -1) {
        //   return preValue + newValue;
        // } else {
        //   return calculate(preValue) + newValue;
        // }
      });
    } else {
      setPrint(function (preValue) {
        return preValue + newValue;
      });
    }
  }
  Display.show = show;

  function calculate(pre) {
    // console.log("calculate : " + pre);
    for (let new_ of "X/+-") {
      let index = pre.indexOf(new_);
      if (index === -1) continue;
      let [a, b, c] = [
        Number(pre.slice(0, index)),
        Number(pre.slice(index + 1)),
        0
      ];
      switch (new_) {
        case "X":
          c = a * b;
          break;
        case "/":
          c = a / b;
          break;
        case "+":
          c = a + b;
          break;
        default:
          c = a - b;
          break;
      }

      return c.toString();
    }
  }
  Display.calculate = calculate;

  return (
    <div className="clsdisplay">
      <input value={print} readOnly />
    </div>
  );
}

export default Display;
