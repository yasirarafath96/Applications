import React, { useState } from "react";

const Calculator = () => {
  const [currentOp, setCurrentOp] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [output, setOutput] = useState("");

  const addInput = (value) => {
    setCurrentInput((prevInput) => prevInput + value);
  };

  const op = (operator) => {
    setCurrentOp(operator);
    setCurrentInput((prevInput) => prevInput + " " + operator + " ");
  };

  const calculate = () => {
    let result;
    const expression = currentInput.split(" ");
    const num1 = parseFloat(expression[0]);
    const num2 = parseFloat(expression[2]);
    const operator = expression[1];

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Error";
        break;
    }

    setOutput(result);
  };

  const handleDelete = () => {
    setCurrentInput((prevInput) => prevInput.slice(0, -1));
  };

  const reset = () => {
    setCurrentOp("");
    setCurrentInput("");
    setOutput("");
  };

  return (
    <div className="container d-flex align-center justify-center">
      <div className="container">
        <div>
          <input
            type="text"
            value={`${currentInput} `}
            class="border border-info m-1"
            readOnly
          />
        </div>
        <div>
          <div>
            <input
              type="button"
              value="1"
              onClick={() => addInput("1")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="2"
              onClick={() => addInput("2")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="3"
              onClick={() => addInput("3")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="4"
              onClick={() => addInput("4")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="5"
              onClick={() => addInput("5")}
              className="btn btn-primary m-1"
            />
          </div>
          <div>
            <input
              type="button"
              value="6"
              onClick={() => addInput("6")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="7"
              onClick={() => addInput("7")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="8"
              onClick={() => addInput("8")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="9"
              onClick={() => addInput("9")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="0"
              onClick={() => addInput("0")}
              className="btn btn-primary m-1"
            />
          </div>
          <div>
            <input
              type="button"
              value="+"
              onClick={() => op("+")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="-"
              onClick={() => op("-")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="*"
              onClick={() => op("*")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="/"
              onClick={() => op("/")}
              className="btn btn-primary m-1"
            />
            <input
              type="button"
              value="Del"
              className="btn btn-primary m-1"
              onClick={handleDelete}
            />
          </div>
        </div>
        <div>
          <input
            type="button"
            value="Submit"
            onClick={calculate}
            className="btn btn-primary m-1"
          />
          <input
            type="button"
            value="Reset"
            onClick={reset}
            className="btn btn-primary m-1"
          />
        </div>
        <div>
          <p>{output}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
