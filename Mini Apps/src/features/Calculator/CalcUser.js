import React from "react";
import "./CalcUser.css";
import Button from "../../components/Button";

function CalcUser(props) {
  return (
    <div className="mainDiv">
      <div className="calculator">
        <div className="result">
          <span className="preview">
            {props.firstNum}
            {props.operation}
            {props.secondNum}
          </span>
          Result={props.result}
        </div>
        <div className="buttons">
          <div>
            <div className="wrap">
              <div className="equals" onClick={props.doOperation}>
                =
              </div>
              <div className="operations" onClick={props.reset}>
                C
              </div>
            </div>
            <div className="numbers">
              {props.numbers.map((value, index) => {
                return (
                  <Button
                    key={index}
                    className="singleNumber"
                    onClick={() => {
                      props.clickNumbers(value);
                    }}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="empty" />
          <div>
            {props.operations.map((operator, index) => {
              return (
                <Button
                  key={index}
                  className={"operations"}
                  onClick={() => {
                    props.clickOperation(operator);
                  }}
                >
                  {operator}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcUser;
