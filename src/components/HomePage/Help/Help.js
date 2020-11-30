import React from 'react';
import classes from "./Help.module.css";

export default function Help() {
    return (
        <div className={[classes["container"],"jumbotron mb-0"].join(" ")}>
  <h1 className="display-4">Helpful tips</h1>
  <a className={classes["link"]}>Buying a Vehicle</a>
  <a className={classes["link"]}>How does an auction work?</a>
  <a className={classes["link"]}>Buying a Savage Car?</a>  
  <a className={classes["link"]}>Import Export & Shipping</a>
  </div>
    )
}
