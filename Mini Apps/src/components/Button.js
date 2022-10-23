import React from "react";

function Button(props) {
  return (
    <div className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;
