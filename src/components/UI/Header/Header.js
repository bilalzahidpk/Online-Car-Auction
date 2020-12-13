import React,{ Fragment } from "react";
import classes from "./Header.module.css";
import Logo from "../../../assets/Logo/Logo.jpg";
const Header = () => {
  return(
  <Fragment>
   <nav class={[classes["nav"],"navbar navbar-expand-lg navbar-light"].join(" ")}>
    <img src={Logo} className={classes["logo"]}></img>
    <div className={classes["btn-container"]}>  
      <button type="submit" className={classes["btn-submit"]}>Sign Up</button>
      <div className={classes["divider"]}></div>
  <button type="submit" className={classes["btn-submit"]}>Sign In</button>
  </div>

</nav>
</Fragment>);

}

export default Header;