import React, { useState } from "react";
import CalcUser from "./CalcUser";

const Calculator = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
  const operations = ["+", "-", "*", "/"];

  const [firstNum, setFirstNumber] = useState("");
  const [secondNum, setSecondNumber] = useState("");

  const [operation, setOperation] = useState("");

  const [result, setResult] = useState(null);

  function clickNumbers(value) {
    if (operation === "") {
      setFirstNumber(firstNum + value);
    } else {
      setSecondNumber(secondNum + value);
    }
  }

  function clickOperation(value) {
    setOperation(value);
  }

  function doOperation() {
    switch (operation) {
      case "+":
        setResult(Number(firstNum) + Number(secondNum));
        break;
      case "-":
        setResult(Number(firstNum) - Number(secondNum));
        break;
      case "*":
        setResult(Number(firstNum) * Number(secondNum));
        break;
      case "/":
        setResult(Number(firstNum) / Number(secondNum));
        break;
      default:
    }
  }

  function reset() {
    setOperation("");
    setFirstNumber("");
    setSecondNumber("");
  }

  return (
    <CalcUser
      firstNum={firstNum}
      operation={operation}
      secondNum={secondNum}
      result={result}
      doOperation={doOperation}
      reset={reset}
      numbers={numbers}
      clickNumbers={clickNumbers}
      operations={operations}
      clickOperation={clickOperation}
    />
  );
};

export default Calculator;
