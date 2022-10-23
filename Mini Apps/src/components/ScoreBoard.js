import React from "react";

function ScoreBoard(props) {
  return (
    <div className={props.className} x={props.x}>
      {props.children}
    </div>
  );
}

export default ScoreBoard;
