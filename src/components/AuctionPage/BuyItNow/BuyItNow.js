import React, {Fragment} from 'react';
import Navigation from "../../UI/Navigation/Navigation";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import CarAuctionGrid from "../../../containers/AuctionCarGrid/AuctionCarGrid";
import classes from "./BuyItNow.module.css";

function BuyItNow() {
    return (
        <Fragment>
               <div className={classes["nav"]}>               
                <Header/>
               <Navigation/>
               </div>
               <div className={classes["main"]}>
               <CarAuctionGrid/>
               </div>
                <Footer/>                   
             </Fragment>
    )
}

export default BuyItNow;