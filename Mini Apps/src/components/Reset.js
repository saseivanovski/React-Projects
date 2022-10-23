import React from "react";

function Reset(props) {
  return (
    <span className={props.className} onClick={props.onClick}>
      Restart
    </span>
  );
}

export default Reset;
