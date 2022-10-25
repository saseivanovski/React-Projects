import React from "react";

function ScoreBoard(props) {
  return <div className={props.className}>{props.children}</div>;
}

export default ScoreBoard;
