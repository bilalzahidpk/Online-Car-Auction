import React, { Component, Fragment } from 'react';
import Header from "../../components/UI/Header/Header";
import Navigation from "../../components/UI/Navigation/Navigation";
import Footer from "../../components/UI/Footer/Footer";
import classes from "./Layout.module.css";

class Layout extends Component {
      
    render() {
        return (
            <Fragment>
                <div className={classes["nav"]}>
                    <Header/>
                    <Navigation/>
                </div>
                <div className={classes["main"]}>{this.props.children}</div>
                <Footer/>
            </Fragment>
        )
    }
}

export default Layout