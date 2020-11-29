import React,{ Fragment } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from "./Navigation.module.css";



const Navigation = () => {
  return(
  <Fragment >
  {/* <Navbar bg="light" variant="light" expand="lg">
 <div className={classes.space}></div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className={classes["nav-link"]}>Home</Nav.Link>
      <Nav.Link href="#link">Find Vehicles</Nav.Link>
      <NavDropdown title="Auctions" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Dealers Auctions</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Live Auctions</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Savage Auctions</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Trends" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Auto Maker Trends</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Car Trends</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Car Category Trends</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link">View Ratings</Nav.Link>  
        <NavDropdown title="Services" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Car Inspection</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Car Loan</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Car Insurance</NavDropdown.Item>
        </NavDropdown> 
        <Nav.Link href="#link">Forums</Nav.Link>
        <NavDropdown title="Support" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">How it works?</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">FAQs</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.3">Contact Us</NavDropdown.Item>
        </NavDropdown> 
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-2">
        </div>
        <button className={classes["main-nav__item--cta"]}>Sign Up</button>
        <div className={classes.divider}></div>
        <div className="mr-2">
        </div>
        <button className={classes["main-nav__item--cta"]}>Sign In</button>

    </Nav>
  </Navbar.Collapse>
</Navbar> */}
<nav className={[classes["nav-container"],"navbar navbar-expand-lg navbar-light"].join(" ")}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Find Vehicles</a>
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
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Trends</a>
      </li>
      <li className="nav-item">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Forums</a>
      </li>
      
      <li className="nav-item">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Ratings</a>
      </li>

      <li className="nav-item dropdown">
        <a className={[classes["nav-dropdown"],"nav-link dropdown-toggle"].join(" ")} href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Car Inspection</a>
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Car Insurance</a>
          <a className={[classes["nav-dropdown"],"dropdown-item"].join(" ")} href="#">Car Loan</a>
        </div>
      </li>
      <li className="nav-item">
        <a className={[classes["nav"],"nav-link"].join(" ")} href="#">Support</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className={classes["button-search"]} type="submit">Search</button>
    </form>
  </div>
</nav>
</Fragment>);

}

export default Navigation;