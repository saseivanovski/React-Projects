import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import style from "./Button.module.css";
import green from "../assets/green.jpg";
import { FaGitlab, FaShoppingCart } from "react-icons/fa";

function Navigation(props) {
  return (
    <div className={classes.navigation}>
      <div className={classes.logo}>
        FSA <FaGitlab size={20} />
      </div>
      <h2>Fake Store API</h2>
      <div className={classes.buttons}>
        <Link className={classes.link} to={"/"}>
          Home
        </Link>
        <Link className={classes.link} to={"allProducts"}>
          Products
        </Link>
        <Button className={style.button}>
          <FaShoppingCart size={20} />
        </Button>
      </div>
      <img src={green} alt="green"></img>
    </div>
  );
}

export default Navigation;
