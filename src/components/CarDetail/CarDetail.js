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
                <div className={classes["ownership-vpn-container"]}>
                <div className={classes["ownership-cost"]}>
                    <h4>Estimated Ownership Cost</h4>
                    <p>$7632</p>
                    <hr className={classes["horizontal-line"]} />
                    <div className={classes["assumptions-estimates"]}>
                        <div className={classes["assumptions-container"]}>
                            <p className={classes["heading"]}>Assumptions</p>
                            <div className={classes["assumptions-details"]}>
                            <span className={classes["mileage"]}>Mileage:</span>
                            <strong><span className={classes["mileage-value-1"]}>$190,700</span></strong>
                            <span className={classes["mi-year"]}>Mi/Year:</span>
                            <span className={classes["mi-year-value"]}>$1200</span>
                            <span className={classes["depriciation"]}>Depriciation:</span>
                            <span className={classes["depriciation-value"]}>$984</span>
                            <span className={classes["insurance"]}>Insurance:</span>
                            <span className={classes["insurance-value"]}>$1451</span>
                            <span className={classes["fuel"]}>Fuel:</span>
                            <span className={classes["fuel-value"]}>$1200</span>
                            <span className={classes["maintenance"]}>Maintenance:</span>
                            <span className={classes["maintenance-value"]}>$2763</span>
                            <span className={classes["repairs"]}>Repairs:</span>
                            <span className={classes["repairs-value"]}>$2763</span>
                            <span className={classes["taxes"]}>Taxes &amp; Fees:</span>
                            <span className={classes["taxes-value"]}>$257</span></div>
                        </div>
                        <div className={classes["estimates-container"]}>
                            <p className={classes["heading"]}>Estimates</p>
                            <span className={classes["mileage"]}>5-Year Mileage:</span>
                            <span className={classes["mileage-value"]}>$6000</span>
                            <span className={classes["mileage"]}>Cost Per Mile:</span>
                            <span className={classes["mileage-value"]}>$0.52</span>
                        </div>
                    </div>
                </div>
                    <div className={classes["vin-conatiner"]}>
                        <table className={classes["vin-table"]}>
                            <tr>
                                <td className={classes["vin"]}>VIN</td>
                                <td className={classes["detailing"]}>JTDKN3DU2B1455857</td>
                            </tr>
                            <tr>
                                <td>Inventory</td>
                                <td className={classes["detailing"]}>CO49813960</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td className={classes["detailing"]}>2011</td>
                            </tr>
                            <tr>
                                <td>Make</td>
                                <td className={classes["detailing"]}>TOYOTA</td>
                            </tr>
                            <tr>
                                <td>Model</td>
                                <td className={classes["detailing"]}>PRIUS</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td className={classes["detailing"]}>White</td>
                            </tr>
                            <tr>
                                <td>Vehicle Style</td>
                                <td className={classes["detailing"]}>Hatchbacks</td>
                            </tr>
                            <tr>
                                <td>Transmission Type</td>
                                <td className={classes["detailing"]}>Automatic</td>
                            </tr>
                            <tr>
                                <td>Engine</td>
                                <td className={classes["detailing"]}>1.8l 4</td>
                            </tr>
                            <tr>
                                <td>Drivetrain</td>
                                <td className={classes["detailing"]}>Front-wheel drive</td>
                            </tr>
                            <tr>
                                <td>Fuel Type</td>
                                <td className={classes["detailing"]}>Hybrid engine</td>
                            </tr>
                            <tr>
                                <td>Vehicle Type</td>
                                <td className={classes["detailing"]}>Cars</td>
                            </tr>
                        </table>
                    </div>
                </div>
                {/* <div className={classes["market-price-container"]}>
                    Market Place
                    </div> */}
            </div>            
        </div>
    )
}

export default CarDetail;