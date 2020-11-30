import React, { Component, Fragment } from 'react'
import Header from "../../components/UI/Header/Header";
import Navigation from "../../components/UI/Navigation/Navigation";
import HomeImage from "../../components/HomePage/HomeImage/HomeImage";
import classes from "./Home.module.css";
import CarGrid from "../../components/HomePage/CarGrid/CarGrid";
import Help from "../../components/HomePage/Help/Help";
import Footer from "../../components/UI/Footer/Footer";

class Home extends Component {
    render() {
        return (
           <Fragment>
               <div className={classes["nav"]}>               
                <Header/>
               <Navigation/>
               </div>
                <div className={classes["section"]}>
               <HomeImage/>
               <CarGrid/>
               </div> 
               <Help/>
                <Footer/>                   
                    </Fragment>
        )
    }
}
export default Home;
