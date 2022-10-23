import React from "react";
import classes from "./Navigation.module.css";

function Navigation({ activeTab, handleActiveTab }) {
  return (
    <div className={classes.nav}>
      {activeTab.map((item, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (!item.isActive) {
                handleActiveTab(item.id);
              }
            }}
            className={item.isActive ? "" : ""}
          >
            <span>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Navigation;
