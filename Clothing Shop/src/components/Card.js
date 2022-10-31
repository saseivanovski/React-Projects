import React from "react";
import Button from "./Button";
import classes from "./Card.module.css";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className={classes.card}>
      <p>{props.title}</p>
      <img src={props.img} alt="images"></img>
      <div className={classes.buttonsDiv}>
        <Link className={classes.link} to={`/detailsPage/${props.id}`}>
          Details
        </Link>
        <Button className={styles.button}>Add to Basket</Button>
      </div>
    </div>
  );
}

export default Card;
