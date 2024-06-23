import React, { useState } from "react";
import "./Calci.css";
import { useNavigate } from "react-router-dom";

const Calculator2 = () => {
  const navigate = useNavigate();
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

  const digits1 = ["7", "4", "1", "0"];
  const digits2 = ["8", "5", "2"];
  const digits3 = ["9", "6", "3"];
  const operators = ["+", "-", "*", "/"];

  // const handlehome = () => {
  //   navigate("/Home");
  // };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 calculator-out">
        {/* <button
          type="button"
          class="btn-close "
          aria-label="Close"
          onClick={handlehome}
        ></button> */}
        <div className="container-md calculator-in">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <input
                    type="text"
                    value={`${currentInput} `}
                    className="border border-info mb-2 w-100 input"
                    readOnly
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-3 p-1">
                  {digits1.map((digit) => (
                    <input
                      key={digit}
                      type="button"
                      value={digit}
                      onClick={() => addInput(digit)}
                      className="btn btn-primary  btn-lg mb-1 w-14 h-14 w-100 shadow-lg button"
                    />
                  ))}
                </div>
                <div className="col-3 p-1">
                  {digits2.map((digit) => (
                    <input
                      key={digit}
                      type="button"
                      value={digit}
                      onClick={() => addInput(digit)}
                      className="btn btn-primary btn-lg mb-1 w-14 h-14 w-100 shadow-lg button"
                    />
                  ))}
                  <input
                    type="button"
                    value="="
                    onClick={calculate}
                    className="btn btn-primary  btn-lg mb-1  w-14 h-14 w-100 shadow-lg button"
                  />
                </div>
                <div className="col-3 p-1">
                  {digits3.map((digit) => (
                    <input
                      key={digit}
                      type="button"
                      value={digit}
                      onClick={() => addInput(digit)}
                      className="btn btn-primary btn-lg mb-1 w-14 h-14 w-100 shadow-lg button"
                    />
                  ))}
                  <input
                    type="button"
                    value="AC"
                    onClick={reset}
                    className="btn btn-primary btn-lg mb-1 h-14 w-100 shadow-lg button"
                  />
                </div>
                <div className="col-3 p-1">
                  {operators.map((operator) => (
                    <input
                      key={operator}
                      type="button"
                      value={operator}
                      onClick={() => op(operator)}
                      className="btn btn-primary btn-lg mb-1 w-14 h-14 w-100 shadow-lg  button"
                    />
                  ))}
                  <input
                    type="button"
                    value="Del"
                    className="btn btn-primary btn-lg mb-1 w-14 h-14 w-100 shadow-lg  button"
                    onClick={handleDelete}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 output">Output: {output}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator2;

/* 

<div className="calculator-container">
        <input
          type="text"
          value={`${currentInput} `}
          className="border border-info m-1"
          readOnly
        />
        <div className="d-flex flex-wrap justify-content-center">
          {digits1.map((digit) => (
            <input
              key={digit}
              type="button"
              value={digit}
              onClick={() => addInput(digit)}
              className="btn btn-primary m-1 w-14 h-14 "
            />
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center">
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
        <div className="d-flex justify-content-center">
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
        <div className="d-flex justify-content-center">
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
        <div className="d-flex justify-content-center">
          <p>Output: {output}</p>
        </div>
      </div>

*/
