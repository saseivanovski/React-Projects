import React from "react";
import Button from "./Button";

function Card(props) {
  return (
    <div>
      <p>{props.title}</p>
      <img src={props.img} alt="images"></img>
      <Button>Details</Button>
    </div>
  );
}

export default Card;
