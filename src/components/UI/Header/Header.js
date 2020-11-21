import React,{ Fragment } from "react";
import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Image, Col } from "react-bootstrap";
import classes from "./Header.module.css";
import Logo from "../../../assets/Logo/Logo.jpg";
import UK from "../../../assets/UK/UK.jpg";
import Pakistan from "../../../assets/Pakistan/Pakistan.png";
import Japan from "../../../assets/Japan/Japan.png";
const Header = () => {
  return(
  <Fragment>
  <Navbar bg="light" expand="lg">
<img src={Logo} className={classes.image}/>
      <Form inline>
      <FormControl type="text" placeholder="Search car your desired car" className="mr-sm-2" />
      <div className={classes.margin}></div>
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar>
</Fragment>);

}

export default Header;