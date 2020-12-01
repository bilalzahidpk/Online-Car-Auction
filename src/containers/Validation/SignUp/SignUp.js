import React, { Component,Fragment } from 'react';
import Navigation from "../../../components/UI/Navigation/Navigation";
import SignUpForm from "../../../components/UI/Form/SignUpForm/SignUpForm";
import Header from "../../../components/UI/Header/Header";
import classes from "./SignUp.module.css";
import Footer from "../../../components/UI/Footer/Footer";

class SignUp extends Component {
    render() {
        return (
            <Fragment>
                <div className={classes["nav"]}>
             <Header/>   
            <Navigation/>
            </div>
            <div className={classes["sign-up"]}>
            <SignUpForm/>
            </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default SignUp