import React, { Component } from 'react'
import classes from "./CarCard.module.css";

class CarCard extends Component {
    render() {
        return (
          <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/05/18/19/13/toyota-347288_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className="card-title">Honda Civic 2009</h5>
            <p className="card-text">114,000km</p>
            <p className="card-text">Karachi, Pakistan</p>
            <p className="card-text">Auction in 02h 33m 1s</p>
            <br></br>
            <p className="card-text">Pre Auction charges: <span style={{color:"#1874CD"}}>$50</span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
   
        )
    }
}

export default CarCard;
