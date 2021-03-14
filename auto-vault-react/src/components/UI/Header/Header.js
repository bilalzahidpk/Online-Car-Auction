import React,{ Fragment } from "react";
import classes from "./Header.module.css";
import Logo from "../../../assets/Logo/Logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return(
  <Fragment>
   <nav class={[classes["nav"],"navbar navbar-expand-lg navbar-light"].join(" ")}>
      <img src={Logo} className={classes["logo"]}></img>
      <div className={classes["btn-container"]}>  
        <Link to='/signup'><button type="submit" className={classes["btn-submit"]}>Sign Up</button></Link>
          <div className={classes["divider"]}></div>
        <Link to="/signin"><button type="submit" className={classes["btn-submit"]}>Sign In</button></Link>
    </div>
  </nav>
</Fragment>);

}

export default Header;