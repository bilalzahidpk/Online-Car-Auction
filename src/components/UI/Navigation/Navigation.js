import React,{ Fragment } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return(
  <Fragment >
  <Navbar bg="light" variant="light" expand="lg">
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
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        <div className="mr-4">
        </div>
        
        <button className={classes["main-nav__item--cta"]}>Sign Up</button>
        <div className={classes.divider}></div>
        <div className="mr-2">
        </div>
        <button className={classes["main-nav__item--cta"]}>Sign In</button>

    </Nav>
  </Navbar.Collapse>
</Navbar>
</Fragment>);

}

export default Navigation;