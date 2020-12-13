import React,{ Fragment } from "react";
import {Link} from "react-router-dom";
import classes from "./Navigation.module.css";



const Navigation = () => {
  return(
  <Fragment >
<nav className={[classes["nav-container"],"navbar navbar-expand-lg navbar-light"].join(" ")}>
  <button className="navbar-toggler" type="button" data-hover="dropdown" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      
      <li className="nav-item dropdown">
        <a className={[classes["nav-dropdown"],"nav-link dropdown-toggle"].join(" ")} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Auctions
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Dealer Auctions</a>
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Savage Auctions</a>
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Live Auctions</a>
        </div>
      </li>
      <li className="nav-item">
        <a className={[classes["nav"],"nav-link active"].join(" ")} href="#">Trends</a>
      </li>
      <li className="nav-item">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Forums</a>
      </li>
      
      <li className="nav-item">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Ratings</a>
      </li>

      <li className="nav-item dropdown">
        <a className={[classes["nav-dropdown"],"nav-link dropdown-toggle"].join(" ")} href="#" id="navbarDropdown" role="button" data-hover="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Car Inspection</a>
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Car Insurance</a>
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Car Loan</a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search car" aria-label="Search"/>
      <button className={classes["button-search"]} type="submit">Search</button>
    </form>
  </div>
</nav>
</Fragment>);

}

export default Navigation;