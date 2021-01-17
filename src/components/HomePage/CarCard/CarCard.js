import React, { Component } from 'react'
import classes from "./CarCard.module.css";
import Skeleton from 'react-loading-skeleton';
import { Link } from "react-router-dom";

class CarCard extends Component {
    render() {
        return (
          <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in 2h 30m 40s</p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}>$50</span></p>              
            <Link to="/" className={classes["btn"]}>Participate Now!</Link>
          </div>
        </div>
   
        )
    }
}

export default CarCard;
