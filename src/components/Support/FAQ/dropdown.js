import React from 'react'
import classes from "./style.module.css";
export default function Dropdown() {
    return (
        <div>
            <h3 className={classes["user"]}>User Accounts &amp; Registration</h3>
            <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapseExample">
      Why should I register with Auto Vault? &#43;
      </button>
    <div class="collapse" id="collapse1">
      <div class="card card-body">
         There are several benefits to registering with Auto Auction Mall:<br/><br/>
          1. You came to Auto Auction Mall to attend a dealer-only car auction so that you could save thousands on your car purchase. <br/>In order to bid on and/or buy any car on our site you must first register here.<br/><br/>
          2. Registration is 100% free and does not require any credit card or other payment information.
          <br/><br/>3. Once you have registered, you have the ability to save vehicles that you are interested in to your Watchlist.<br/> Quick and easy access to all the cars you are considering and/or comparing is certainly a huge bonus!
      </div>
    </div>


    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapseExample">
    What information do I need to provide in order to register? &#43;
      </button>
    <div class="collapse" id="collapse2">
      <div class="card card-body">
      We understand why this is a common question. This is why we require very little personal information for <br/>registration. In fact, we only need 3 things from you:<br/><br/>
    1. Full name<br/>
    2. Email address<br/>
    3. Phone number<br/><br/>
    You will also need to set up a password which can be done on the registration page. It’s as simple as that so go ahead and <a>Register</a>    
         </div>
    </div>

    
    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapseExample">
    Do I need to have a Dealer’s License to bid on and/or buy these cars? &#43;
      </button>
    <div class="collapse" id="collapse3">
      <div class="card card-body">
      No. That is the benefit of Auto Auction Mall. We have the dealer license required to attend these major dealer-only vehicle<br/>
    auctions, like Copart, so you don’t need one. That means everyone is now able to buy these dealer-only auction cars!<br/><br/>
    For this service and all the associated savings, we charge you a small flat fee of $249 (if the vehicle purchase price is under<br/>
      $3,500) or $299 (if the vehicle purchase price is $3,500 or above). This fee is only paid when you have purchased a car.
         </div>
    </div>

    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapseExample">
    Do you require users to have a membership in order to bid on and/or buy these cars? &#43;
      </button>
    <div class="collapse" id="collapse4">
      <div class="card card-body">
      No. Unlike like other sites, we do not require you to pay for a monthly or yearly membership on our site in order to bid on or buy cars. <br/>As mentioned, you can buy as many cars as you want so long as you are registered and have the required Buying Power
             </div>
    </div>

    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapseExample">
    Okay, so I have registered but when can I begin the process of bidding and buying the car I want? &#43;
      </button>
    <div class="collapse" id="collapse5">
      <div class="card card-body">
      Once you have registered and have Buying Power, you are ready to begin placing bids, making offers and/or clicking the buy now button to buy the car you want. It’s that simple!
      </div>
    </div>

    {/* **************Auction Process &amp; Bidding******************** */}
    <h3 className={classes["user"]}>Auction Process &amp; Bidding</h3>
    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapseExample">
    How does the Auction Process Work? &#43;
     </button>
    <div class="collapse" id="collapse6">
      <div class="card card-body">
      This is not eBay or other similar online marketplace/auction platforms that shoppers may be accustomed to. Those are not wholesale dealer-only auctions like Copart or IAA, so they have a different process. Let us explain how the dealer-only car auction process works.
        <br/><br/>
        On sites such as eBay when you find the car that you want, you can bid on that car until the auction timer goes down to 00:00. If you are the highest bidder (and have met the reserve, assuming there is one) you win the car. With dealer-only car auctions, the cars are listed on the site in advance of the actual live auction start time. That gives the buyers a chance to view the vehicle and do their research to determine if (and how much) they want to bid. Each car auction listing has a timer showing when the live auction starts (not ends like other auction sites). Once the timer reaches 00:00 the actual auction starts and this auction lasts about 2 to 3 minutes.
        <br/><br/>
        Our site shows you all of the cars that are scheduled for auction in the upcoming hours/days/weeks. Each car listing page has an auction timer located in the top right of the page which shows you when the auction starts.
      </div>
    </div>

    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapseExample">
    What are Pre-bids? &#43;
     </button>
    <div class="collapse" id="collapse7">
      <div class="card card-body">
      As mentioned in the FAQ pages above, the live auction begins after the pre-bid period closes. In fact, on each of the car listing pages you can see the time when the live auction will start. The live auction is very quick and only lasts about 2 to 3 minutes.
        </div>
    </div>

    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapseExample">
    What is the Live Auction? &#43;
     </button>
    <div class="collapse" id="collapse8">
      <div class="card card-body">
      As mentioned in the FAQ pages above, the live auction begins after the pre-bid period closes. In fact, on each of the car listing pages you can see the time when the live auction will start. The live auction is very quick and only lasts about 2 to 3 minutes.
        </div>
    </div>

    <button className={["btn",classes["btn-secondary1"]].join(" ")} type="button" data-toggle="collapse" data-target="#collapse9" aria-expanded="false" aria-controls="collapseExample">
    How will I know if I won the Live Auction? &#43;
     </button>
    <div class="collapse" id="collapse9">
      <div class="card card-body">
      If you are the highest bidder at the end of the auction, our Auction Specialist will let you know if the sale is on approval (i.e. the reserve was not met and the seller may give a counter-offer; see above FAQ pages) or final (i.e. reserve met or pure sale) and the next steps.
        </div>
    </div>


        </div>
    )
}
