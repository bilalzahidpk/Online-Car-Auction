import React from 'react'
import classes from './Honda2006.module.css';
import Slider from './slider';
import AuctionIcon from './auctionIcon.PNG';
import Title from './title.PNG';
import watchList from './watchList.PNG';
import statusIcon from './statusIcon.PNG';
import damage from './damageIcon.PNG';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import MakeAnOffer from './MakeAnOffer.PNG';

function CarDetail() {
    return (
        <div className={classes["main-container"]}>
            <div className={classes["nav-links"]}>
                <a href="#" className={classes["auctions"]}>Auctions</a>
                <span> / </span>
                <a href="#" className={classes["DealerAuction"]}>Dealer's Auction</a>
                <span> / </span>
                <a className={classes["Honda-Pilot-2006"]}>Honda Pilot 2006</a>
            </div>
            {/* <nav aria-label="breadcrumb">
                <ol class={["breadcrumb",classes["links"]].join(" ")}>
                    <li class="breadcrumb-item"><a href="#">Auctions</a></li>
                    <li class="breadcrumb-item"><a href="#">Dealer's Auction</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Honda Pilot 2006 </li>
                </ol>
            </nav> */}

            <div className={classes["topContainer"]}>
                <div className={classes["sliderContainer"]}>
                <Carousel autoPlay interval="1000" transitionTime="1000">
                <img src={pic1} />
                <img src={pic2} />
                <img src={pic3} />
                </Carousel>
                </div>
                <div className={classes["details-container"]}>
                    <h1 className={classes["vehicleName"]}>Corolla XLI</h1>
                    <p className={classes["pre-bid"]}>Current Pre-bid: $225</p>
                    <div className={classes["nested-flex"]}>
                        <div className={classes["top-buttons"]}>                        
                            <button type="button" className={["btn btn-warning",classes["auction-button"]].join(" ")}>Attend This Auction</button><br/><br/>    
                            <button type="button" className={["btn btn-info",classes["BuyNow-button"]].join(" ")}>Buy Now</button><br/><br/>
                            <button type="button" className={["btn btn-light",classes["WatchList-button"]].join(" ")}>Add to Watch List</button>
                        </div>
                        <div className={classes["all-details"]}>
                            <p><img src={Title} className={classes["title-icon"]}/>Title<br/>GA - Bill of sale - parts only</p>
                            <p><img src={statusIcon} className={classes["status-icon"]}/>Status<br/>Run and Drive</p>
                            <p><img src={damage} className={classes["damage-icon"]}/>Damage<br/>Normal Wear</p>
                            <p><img src={Title} className={classes["title-icon"]}/>Milage<br/>28,489 (Actual)</p>
                            <p><img src={Title} className={classes["title-icon"]}/>Location<br/>York haven, PA</p>                            
                        </div>
                    </div>
                </div>

            </div>
            <div className={classes["optionsContainer"]}>
                <div className={classes["make-an-offer"]}>
                <a>
                    <img src={MakeAnOffer} /><br/>
                     Make an Offer</a>
                </div>
                <div className={classes["make-an-offer"]}>
                    <a>
                    <img src={MakeAnOffer} /><br/>
                   Vehicle History Report</a>
                </div>
                <div className={classes["make-an-offer"]}>
                    <a><img src={MakeAnOffer} /><br/>
                   Fee Calculator</a>
                </div>
                <div className={classes["make-an-offer"]}>
                   <a> <img src={MakeAnOffer} /><br/>
                   Contact Auto Vault Specialist</a>
                </div>
            </div>

            <div className={classes["lower-container"]}>
                <div className={classes["sellers-comments"]}>
                    <h2 className={classes["sellers-comments__heading"]}><strong>Seller's Comments</strong></h2>
                    <p>E Inside out fully original. In showroom condition. 100% maintained by dealership. All service history log maintained. Price is slightly negotiable. After Market Alloy rims. Original book of this car is also available. All original documents are complete. Never been into any accident. New tires installed recently. Token tax is up to date. Urgently need to sellthe car. Totally driven on petrol. Engine is good condition. Call/SMS only during office hours please. </p>
                </div>
                    <div className={classes["car-details-conatiner"]}>
                        <div className={classes["car-details__item"]}>
                            <div>VIN </div>
                            <div><strong>1FMCU0F74FUB24632</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Inventory</div>
                            <div><strong>CO29715221</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>City</div>
                            <div><strong>Karachi</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Country</div>
                            <div><strong>Pakistan</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Year</div>
                            <div><strong>2015</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Make</div>
                            <div><strong>FORD</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Model</div>
                            <div><strong>ESCAPE</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Color</div>
                            <div><strong>White</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Vehicle Style</div>
                            <div><strong>SUV</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Transmission Type</div>
                            <div><strong>Automatic</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Drivetrain</div>
                            <div><strong>Front-wheel drive</strong></div>
                        </div>
                        <div className={classes["car-details__item"]}>
                            <div>Fuel Type</div>
                            <div><strong>Gas</strong></div>
                        </div>
                   </div>    
            </div>            
        </div>
    )
}

export default CarDetail;