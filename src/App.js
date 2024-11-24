import React, { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");

  function processNumber(value) {
    // Convert the value to a string
    let numStr = value.toString();

    // Check if the number is a single digit (including zero)
    if (numStr.length === 1) {
      // Allow zero as the only single digit
      return numStr;
    } else {
      // Remove leading zeros for two or more digits
      return numStr.replace(/^0+/, "");
    }
  }
  const handleClick = (val) => {
    setInput((prev) => processNumber(prev + val));
  };

  const evaluation = (e) => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      setInput("Error");
      setTimeout(() => {
        setInput("0");
      }, 2000);
    }
  };
  return (
    <>
      <div className="wrap-calc">
        <div className="calculator">
          <input
            type="text"
            disabled
            className="display"
            value={input}
            id="display"
          />

          <div className="buttons">
            <button className="button" onClick={() => handleClick("7")}>
              7
            </button>
            <button className="button" onClick={() => handleClick("8")}>
              8
            </button>
            <button
              className="button"
              name="9"
              onClick={(e) => handleClick(e.target.name)}
            >
              9
            </button>
            <button
              className="button funKey"
              name="/"
              onClick={(e) => handleClick("/")}
            >
              /
            </button>
            <button
              className="button"
              name="4"
              onClick={(e) => handleClick(e.target.name)}
            >
              4
            </button>
            <button
              className="button"
              name="5"
              onClick={(e) => handleClick(e.target.name)}
            >
              5
            </button>
            <button
              className="button"
              name="6"
              onClick={(e) => handleClick(e.target.name)}
            >
              6
            </button>
            <button
              className="button funKey"
              name="*"
              onClick={(e) => handleClick(e.target.name)}
            >
              *
            </button>
            <button
              className="button"
              name="1"
              onClick={(e) => handleClick(e.target.name)}
            >
              1
            </button>
            <button
              className="button"
              name="2"
              onClick={(e) => handleClick(e.target.name)}
            >
              2
            </button>
            <button
              className="button"
              name="3"
              onClick={(e) => handleClick(e.target.name)}
            >
              3
            </button>
            <button
              className="button funKey"
              name="-"
              onClick={(e) => handleClick(e.target.name)}
            >
              -
            </button>
            <button
              className="button span"
              name="0"
              onClick={(e) => handleClick(e.target.name)}
            >
              0
            </button>
            <button
              className="button"
              name="."
              onClick={(e) => handleClick(e.target.name)}
            >
              .
            </button>

            <button
              className="button funKey"
              name="+"
              onClick={(e) => handleClick(e.target.name)}
            >
              +
            </button>
            <button className="button clear" onClick={() => setInput("0")}>
              Clear
            </button>
            <button className="button submit" onClick={evaluation}>
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
