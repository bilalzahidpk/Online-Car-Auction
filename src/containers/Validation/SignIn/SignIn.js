import React, { Component,Fragment } from 'react';
import Navigation from "../../../components/UI/Navigation/Navigation";
import SignInForm from "../../../components/UI/Form/SignInForm/SignInForm";
import Header from "../../../components/UI/Header/Header";
import classes from "./SignIn.module.css";
import Footer from "../../../components/UI/Footer/Footer";

class SignIn extends Component {
    render() {
        return (
            <Fragment>
                <div className={classes["nav"]}>
             <Header/>   
            <Navigation/>
            </div>
            <div className={classes["sign-in"]}>
            <SignInForm/>
            </div>
                <Footer/>
            </Fragment>
        )
    }
}

export default SignIn;
