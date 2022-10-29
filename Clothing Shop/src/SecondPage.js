import React from "react";
import { Link } from "react-router-dom";

function SecondPage() {
  return (
    <div>
      Click here to go back to home page <Link to={"/"}>HERE !!!</Link>
    </div>
  );
}

export default SecondPage;
