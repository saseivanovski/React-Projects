import React from "react";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <div className={classes.main}>
      <div className={classes.homeLogoDiv}>
        <div>Logo</div>
        <button>Home</button>
      </div>

      <div className={classes.navDiv}>
        <div>Products</div>
        <div>Contact</div>
        <div>Cart</div>
      </div>
    </div>
  );
}

export default Navigation;
