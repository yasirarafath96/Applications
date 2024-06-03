import React, { useState } from "react";

const Calculator2 = () => {
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

  // array of button val n operators
  const digits1 = ["1", "2", "3", "4", "5"];
  const digits2 = ["6", "7", "8", "9", "0"];
  const operators = ["+", "-", "*", "/"];

  return (
    <div className="container d-flex align-center justify-center">
      <div className="container ">
        <div>
          <input
            type="text"
            value={`${currentInput} `}
            className="border border-info m-1 "
            readOnly
          />
        </div>
        <div>
          <div className="">
            {digits1.map((digit) => (
              <input
                key={digit}
                type="button"
                value={digit}
                onClick={() => addInput(digit)}
                className="btn btn-primary m-1 w-14 h-14"
              />
            ))}
          </div>
          <div>
            {digits2.map((digit) => (
              <input
                key={digit}
                type="button"
                value={digit}
                onClick={() => addInput(digit)}
                className="btn btn-primary m-1 w-14 h-14"
              />
            ))}
          </div>
          <div>
            {operators.map((operator) => (
              <input
                key={operator}
                type="button"
                value={operator}
                onClick={() => op(operator)}
                className="btn btn-primary m-1 w-14 h-14"
              />
            ))}
            <input
              type="button"
              value="Del"
              className="btn btn-primary m-1 w-14 h-14"
              onClick={handleDelete}
            />
          </div>
        </div>
        <div>
          <input
            type="button"
            value="="
            onClick={calculate}
            className="btn btn-primary m-1  w-14 h-14"
          />
          <input
            type="button"
            value="Clear"
            onClick={reset}
            className="btn btn-primary m-1 h-14"
          />
        </div>
        <div>
          <p>Output: {output}</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator2;
