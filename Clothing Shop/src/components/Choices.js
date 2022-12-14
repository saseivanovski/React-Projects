import React from "react";
import { Link } from "react-router-dom";
import women from "../assets/women.jpg";
import men from "../assets/men.jpg";
import accessories from "../assets/accessories.jpg";
import electronics from "../assets/electronics.jpg";
import classes from "./Choices.module.css";

function Choices() {
  return (
    <div className={classes.choices}>
      <div>
        <img src={men} alt="" />
        <Link className={classes.link_m} to={"menProducts"}>
          MEN
        </Link>
        <img src={women} alt="" />
        <Link className={classes.link_w} to={"womenProducts"}>
          WOMEN
        </Link>
      </div>
      <div>
        <img src={accessories} alt="" />
        <Link className={classes.link_a} to={"accessoriesProducts"}>
          ACCESSORIES
        </Link>
        <img src={electronics} alt="" />
        <Link className={classes.link_e} to={"eletronicsProducts"}>
          ELECTRONICS
        </Link>
      </div>
    </div>
  );
}

export default Choices;
