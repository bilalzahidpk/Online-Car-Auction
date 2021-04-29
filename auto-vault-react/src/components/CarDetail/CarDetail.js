import React, { Component } from 'react';
import classes from './Honda2006.module.css';
import Slider from './slider';
import AuctionIcon from './auctionIcon.PNG';
import Title from './title.PNG';
import watchList from './watchList.PNG';
import statusIcon from './statusIcon.PNG';
import damage from './damageIcon.PNG';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

import pic1 from './1.jpg';
import pic2 from './2.jpg';
import pic3 from './3.jpg';
import MakeAnOffer from './MakeAnOffer.PNG';
import axios from 'axios';

class CarDetail extends Component {
  state = {
    key: 0,
  };

  onResetHandler = () => {
    this.setState((prevState) => ({
      key: prevState.key + 1,
    }));
    setTimeout(() => console.log('Hello'), 10000);
  };

  componentDidMount() {
    if (!this.props.location.vehicle) {
      // axios.get()
    }

    // else {
    //   this.
    // }
  }

  render() {
    return (
      <div className={classes['main-container']}>
        <div className={classes['nav-links']}>
          <a href='#' className={classes['auctions']}>
            Auctions
          </a>
          <span> / </span>
          <a href='#' className={classes['DealerAuction']}>
            Dealer's Auction
          </a>
          <span> / </span>
          <a className={classes['Honda-Pilot-2006']}>Honda Pilot 2006</a>
        </div>
        {/* <nav aria-label="breadcrumb">
                <ol class={["breadcrumb",classes["links"]].join(" ")}>
                    <li class="breadcrumb-item"><a href="#">Auctions</a></li>
                    <li class="breadcrumb-item"><a href="#">Dealer's Auction</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Honda Pilot 2006 </li>
                </ol>
            </nav> */}

        <div className={classes['topContainer']}>
          <div className={classes['sliderContainer']}>
            <Carousel autoPlay interval='1000' transitionTime='1000'>
              {this.props.location.vehicle.imageUrl.map((image) => (
                <img src={image} />
              ))}
            </Carousel>
          </div>
          <div className={classes['details-container']}>
            <h1 className={classes['vehicleName']}>
              {`${this.props.location.vehicle.make} ${this.props.location.vehicle.model} ${this.props.location.vehicle.year}`}{' '}
            </h1>
            <p className={classes['pre-bid']}>
              Current Pre-bid: {this.props.location.vehicle.preBidPrice + '$'}
            </p>
            <div className={classes['nested-flex']}>
              <div className={classes['top-buttons']}>
                <button
                  type='button'
                  onClick={this.onResetHandler}
                  className={[
                    'btn btn-warning',
                    classes['auction-button'],
                  ].join(' ')}
                >
                  Attend This Auction
                </button>
                <br />
                <br />
                <button
                  type='button'
                  className={['btn btn-info', classes['BuyNow-button']].join(
                    ' '
                  )}
                >
                  Buy Now
                </button>
                <br />
                <br />
                <button
                  type='button'
                  className={[
                    'btn btn-light',
                    classes['WatchList-button'],
                  ].join(' ')}
                >
                  Add to Watch List
                </button>
              </div>

              <div className={classes['all-details']}>
                <p>
                  <img src={Title} className={classes['title-icon']} />
                  Title
                  <br />
                  GA - Bill of sale - parts only
                </p>
                <p>
                  <img src={statusIcon} className={classes['status-icon']} />
                  Status
                  <br />
                  Run and Drive
                </p>
                <p>
                  <img src={damage} className={classes['damage-icon']} />
                  Damage
                  <br />
                  Normal Wear
                </p>
                <p>
                  <img src={Title} className={classes['title-icon']} />
                  Mileage
                  <br />
                  {this.props.location.vehicle.mileage + ' km'} (Actual)
                </p>
                <p>
                  <img src={Title} className={classes['title-icon']} />
                  Location
                  <br />
                  York haven, PA
                </p>
              </div>
            </div>
          </div>
        </div>
        <CountdownCircleTimer
          key={this.state.key}
          isPlaying
          duration={10}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <div className={classes['optionsContainer']}>
          <div className={classes['make-an-offer']}>
            <a>
              <img src={MakeAnOffer} />
              <br />
              Make an Offer
            </a>
          </div>
          <div className={classes['make-an-offer']}>
            <a>
              <img src={MakeAnOffer} />
              <br />
              Vehicle History Report
            </a>
          </div>
          <div className={classes['make-an-offer']}>
            <a>
              <img src={MakeAnOffer} />
              <br />
              Fee Calculator
            </a>
          </div>
          <div className={classes['make-an-offer']}>
            <a>
              {' '}
              <img src={MakeAnOffer} />
              <br />
              Contact Auto Vault Specialist
            </a>
          </div>
        </div>

        <div className={classes['lower-container']}>
          <div className={classes['sellers-comments']}>
            <h2 className={classes['sellers-comments__heading']}>
              <strong>Seller's Comments</strong>
            </h2>
            <p>{this.props.location.vehicle.comments}</p>
          </div>
          <div className={classes['car-details-conatiner']}>
            <div className={classes['car-details__item']}>
              <div>VIN </div>
              <div>
                <strong>{this.props.location.vehicle.vin}</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Inventory</div>
              <div>
                <strong>CO29715221</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>City</div>
              <div>
                <strong>Karachi</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Country</div>
              <div>
                <strong>Pakistan</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Year</div>
              <div>
                <strong>{this.props.location.vehicle.year}</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Make</div>
              <div>
                <strong>{this.props.location.vehicle.make}</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Model</div>
              <div>
                <strong>{this.props.location.vehicle.model}</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Color</div>
              <div>
                <strong>{this.props.location.vehicle.color}</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Vehicle Style</div>
              <div>
                <strong>SUV</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Transmission Type</div>
              <div>
                <strong>{this.props.location.vehicle.transmissionType}</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Drivetrain</div>
              <div>
                <strong>Front-wheel drive</strong>
              </div>
            </div>
            <div className={classes['car-details__item']}>
              <div>Engine Type</div>
              <div>
                <strong>{this.props.location.vehicle.engineType}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarDetail;
