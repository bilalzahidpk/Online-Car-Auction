import React, { Component } from 'react';
import CarSearch from "../CarSearch/CarSearch";
import CarCard from "../../components/HomePage/CarCard/CarCard";
import classes from "./BuyItNow.module.css"

class BuyItNow extends Component {
    state = {
        car: "",
        filter: false,
        bodyTypeOpen:true,
        countryOpen:true,
        cityOpen:true,
        makeOpen:true,
        modelOpen:true,
        yearOpen:true,
        priceOpen:true,
        };
    
    onChangeHandler = (event) => {
        console.log(event.target.value);
        console.log(window.innerWidth);
        this.setState({
            car: event.target.value
        })
    }
    handleBodyType = () => {
      this.setState(
        prevState => ({
          bodyTypeOpen: !prevState.bodyTypeOpen
        }), () =>{       console.log(this.state.bodyTypeOpen);
        }
      );  
    }
    handleCountry = () => {
    this.setState(
      prevState => ({
        countryOpen: !prevState.countryOpen
      }), () =>{   console.log(this.state.countryOpen);
      }
      );  
    }
    handleCity = () => {
      this.setState(
        prevState => ({
          cityOpen: !prevState.cityOpen
        }), () =>{       console.log(this.state.cityOpen);
        }
      );  
    }
    handleMake = () => {
      this.setState(
        prevState => ({
          makeOpen: !prevState.makeOpen
        }), () =>{       console.log(this.state.makeOpen);
        }
      );  
    }
    handleModel = () => {
      this.setState(
        prevState => ({
          modelOpen: !prevState.modelOpen
        }), () =>{       console.log(this.state.modelOpen);
        }
      );  
    }
    handleYear = () => {
      this.setState(
        prevState => ({
          yearOpen: !prevState.yearOpen
        }), () =>{       console.log(this.state.yearOpen);
        }
      );  
    }
    handlePrice = () => {
        this.setState(
          prevState => ({
            priceOpen: !prevState.priceOpen
          }), () =>{       console.log(this.state.priceOpen);
          }
        );  
      }

    onClickHandler = () => {
        this.setState(prevState => ({
            filter: !prevState.filter
        }));
      }
    
    render() {
        // console.log(this.state.filter && (window.innerWidth < 930));
        return (
        <div className={classes["background"]}>
                        <h6 className={classes["count-heading"]}>Showing <strong>1-60</strong> of <strong>9,300</strong> vehicles</h6>
                        <button onClick={this.onClickHandler} className={classes["filter-btn"]}>Filters</button>




{this.state.filter ? 
<div className={classes["responsive-search-container"]}>

    
		<form className={["text-left",classes["form"]].join(" ")}>
    <div className={["form-group",classes["form-element"]].join(" ")}>
    <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#body-type"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleBodyType} >
  
  <strong>Body Type <i className={this.state.bodyTypeOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    
  </button>
  <div class="collapse" id="body-type" >
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Hatchback"/>
  <label class="custom-control-label" for="Hatchback">Hatchback</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Sedan"/>
  <label class="custom-control-label" for="Sedan">Sedan</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="SUV"/>
  <label class="custom-control-label" for="SUV">SUV</label>
</div>
    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="MPV"/>
  <label class="custom-control-label" for="MPV">MPV</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Jeep"/>
  <label class="custom-control-label" for="Jeep">Jeep</label>
</div>  
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Truck"/>
  <label class="custom-control-label" for="Truck">Truck</label>
</div>  
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Bus"/>
  <label class="custom-control-label" for="Bus">Bus</label>
</div> 
</div>  
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>

<button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#country"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleCountry} >
  
  <strong>Country <i className={this.state.countryOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="country" >                    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="United States"/>
  <label class="custom-control-label" for="United States">United States</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="United Kingdom"/>
  <label class="custom-control-label" for="United Kingdom">United Kingdom</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Australia"/>
  <label class="custom-control-label" for="Australia">Australia</label>
</div>
    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Japan"/>
  <label class="custom-control-label" for="Japan">Japan</label>
</div>


  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Pakistan"/>
  <label class="custom-control-label" for="Pakistan">Pakistan</label>
</div>  
</div>
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>
    <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#city"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleCity} >
  
  <strong>City <i className={this.state.cityOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    
  </button>  
  <div class="collapse" id="city" >
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Karachi"/>
  <label class="custom-control-label" for="Karachi">Karachi</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Lahore"/>
  <label class="custom-control-label" for="Lahore">Lahore</label>
</div>


  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Peshawar"/>
  <label class="custom-control-label" for="Peshawar">Peshawar</label>
  
</div>
              
                        
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Islamabad"/>
  <label class="custom-control-label" for="Islamabad">Islamabad</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Quetta"/>
  <label class="custom-control-label" for="Quetta">Quetta</label>
</div>
</div>  
</div>


<div className={["form-group",classes["form-element"]].join(" ")}>

<button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#make"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleMake} >
  
  <strong>Make <i className={this.state.makeOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="make" >                    
 
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Toyota"/>
  <label class="custom-control-label" for="Toyota">Toyota</label>
</div>


                     
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Honda"/>
  <label class="custom-control-label" for="Honda">Honda</label>
</div>


  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Suzuki"/>
  <label class="custom-control-label" for="Suzuki">Suzuki</label>
</div>
    

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Volkswagen"/>
  <label class="custom-control-label" for="Volkswagen">Volkswagen</label>
</div>
  

  
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Mercedes"/>
  <label class="custom-control-label" for="Mercedes">Mercedes</label>
</div>  
</div>
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>
<button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#model"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleModel} >
  
  <strong>Model <i className={this.state.modelOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="model" >
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Corolla"/>
  <label class="custom-control-label" for="Corolla">Corolla</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Yaris"/>
  <label class="custom-control-label" for="Yaris">Yaris</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Fortuner"/>
  <label class="custom-control-label" for="Fortuner">Fortuner</label>
</div>
    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Prado"/>
  <label class="custom-control-label" for="Prado">Prado</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Hilux"/>
  <label class="custom-control-label" for="Hilux">Hilux</label>
</div>  
</div>  
</div>



  <div className={["form-group",classes["form-element"]].join(" ")}>
  <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#year"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleYear} >
  
  <strong>Year <i className={this.state.yearOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="year" >
  <select class="custom-select my-2 mx-2">
  <option selected>From</option>
  <option value="1">2020</option>
  <option value="2">2019</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
</select>


<select className="custom-select mx-2">
  <option selected>To</option>
  <option value="1">2020</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="3">2018</option>
  
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
</select>
</div>  
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>
    <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#price"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handlePrice} >
  
  <strong>Price <i className={this.state.priceOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    
  </button>  
  <div class="collapse" id="price" >
  <input type="text" name="price" placeholder="From"list="citynames" className={["custom-select custom-select-sm my-2 mx-2",classes["price-input-1"]].join(" ")}/>
                <datalist id="citynames">
                <option className={classes["option"]} value="200,000"/> 
                <option className={classes["option"]} value="400,000"/> 
                <option className={classes["option"]} value="600,000"/> 
                <option className={classes["option"]} value="800,000"/>
                </datalist>
            <input type="text" name="price" placeholder="To" list="citynames" className={["custom-select custom-select-sm my-2 mx-2",classes["price-input-2"]].join(" ")}/>
                <datalist id="citynames">
                <option value="200,000"/> 
                <option value="400,000"/> 
                <option value="600,000"/> 
                <option value="800,000"/> 
                </datalist>                     



</div>  
</div>


<div style={{textAlign:"center",width:"100%" ,marginLeft:"0.3rem"}}>
<button type="submit" className={["btn btn-block",classes["btn-search"]].join(" ")}>Search</button>
</div>
</form>

</div>: null}
         
                        
<div className={classes["large-devices-container"]}>












<div className={classes["search-container"]}>

    
		<form className={["text-left",classes["form"]].join(" ")}>
    <div className={["form-group",classes["form-element"]].join(" ")}>
    <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#body-type"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleBodyType} >
  
  <strong>Body Type <i className={this.state.bodyTypeOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    
  </button>
  <div class="collapse" id="body-type" >
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Hatchback"/>
  <label class="custom-control-label" for="Hatchback">Hatchback</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Sedan"/>
  <label class="custom-control-label" for="Sedan">Sedan</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="SUV"/>
  <label class="custom-control-label" for="SUV">SUV</label>
</div>
    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="MPV"/>
  <label class="custom-control-label" for="MPV">MPV</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Jeep"/>
  <label class="custom-control-label" for="Jeep">Jeep</label>
</div>  
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Truck"/>
  <label class="custom-control-label" for="Truck">Truck</label>
</div>  
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Bus"/>
  <label class="custom-control-label" for="Bus">Bus</label>
</div> 
</div>  
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>

<button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#country"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleCountry} >
  
  <strong>Country <i className={this.state.countryOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="country" >                    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="United States"/>
  <label class="custom-control-label" for="United States">United States</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="United Kingdom"/>
  <label class="custom-control-label" for="United Kingdom">United Kingdom</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Australia"/>
  <label class="custom-control-label" for="Australia">Australia</label>
</div>
    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Japan"/>
  <label class="custom-control-label" for="Japan">Japan</label>
</div>


  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Pakistan"/>
  <label class="custom-control-label" for="Pakistan">Pakistan</label>
</div>  
</div>
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>
    <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#city"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleCity} >
  
  <strong>City <i className={this.state.cityOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    
  </button>  
  <div class="collapse" id="city" >
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Karachi"/>
  <label class="custom-control-label" for="Karachi">Karachi</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Lahore"/>
  <label class="custom-control-label" for="Lahore">Lahore</label>
</div>


  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Peshawar"/>
  <label class="custom-control-label" for="Peshawar">Peshawar</label>
  
</div>
              
                        
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Islamabad"/>
  <label class="custom-control-label" for="Islamabad">Islamabad</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Quetta"/>
  <label class="custom-control-label" for="Quetta">Quetta</label>
</div>
</div>  
</div>


<div className={["form-group",classes["form-element"]].join(" ")}>

<button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#make"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleMake} >
  
  <strong>Make <i className={this.state.makeOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="make" >                    
 
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Toyota"/>
  <label class="custom-control-label" for="Toyota">Toyota</label>
</div>


                     
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Honda"/>
  <label class="custom-control-label" for="Honda">Honda</label>
</div>


  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Suzuki"/>
  <label class="custom-control-label" for="Suzuki">Suzuki</label>
</div>
    

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Volkswagen"/>
  <label class="custom-control-label" for="Volkswagen">Volkswagen</label>
</div>
  

  
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Mercedes"/>
  <label class="custom-control-label" for="Mercedes">Mercedes</label>
</div>  
</div>
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>
<button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#model"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleModel} >
  
  <strong>Model <i className={this.state.modelOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="model" >
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Corolla"/>
  <label class="custom-control-label" for="Corolla">Corolla</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Yaris"/>
  <label class="custom-control-label" for="Yaris">Yaris</label>
</div>
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Fortuner"/>
  <label class="custom-control-label" for="Fortuner">Fortuner</label>
</div>
    
  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Prado"/>
  <label class="custom-control-label" for="Prado">Prado</label>
</div>

  <div className={[classes["checkbox"],"custom-control custom-checkbox"].join(" ")}>
  <input type="checkbox" class="custom-control-input" id="Hilux"/>
  <label class="custom-control-label" for="Hilux">Hilux</label>
</div>  
</div>  
</div>



  <div className={["form-group",classes["form-element"]].join(" ")}>
  <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#year"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handleYear} >
  
  <strong>Year <i className={this.state.yearOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    </button>
 
    <div class="collapse" id="year" >
  <select class="custom-select my-2 mx-2">
  <option selected>From</option>
  <option value="1">2020</option>
  <option value="2">2019</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
</select>


<select className="custom-select mx-2">
  <option selected>To</option>
  <option value="1">2020</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="2">2019</option>
  <option value="3">2018</option>
  
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
  <option value="3">2018</option>
</select>
</div>  
</div>

<div className={["form-group",classes["form-element"]].join(" ")}>
    <button className={["btn",classes["collapse-btn"]].join(" ")}
                  type="button"
                  data-toggle="collapse"
                  data-target="#price"
                  aria-expanded="false"
                  aria-controls="collapseExample" onClick={this.handlePrice} >
  
  <strong>Price <i className={this.state.priceOpen ? "fas fa-angle-down" : "fas fa-angle-up"}></i></strong>
    
  </button>  
  <div class="collapse" id="price" >
  <input type="text" name="price" placeholder="From"list="citynames" className={["custom-select custom-select-sm my-2 mx-2",classes["price-input-1"]].join(" ")}/>
                <datalist id="citynames">
                <option className={classes["option"]} value="200,000"/> 
                <option className={classes["option"]} value="400,000"/> 
                <option className={classes["option"]} value="600,000"/> 
                <option className={classes["option"]} value="800,000"/>
                </datalist>
            <input type="text" name="price" placeholder="To" list="citynames" className={["custom-select custom-select-sm my-2 mx-2",classes["price-input-2"]].join(" ")}/>
                <datalist id="citynames">
                <option value="200,000"/> 
                <option value="400,000"/> 
                <option value="600,000"/> 
                <option value="800,000"/> 
                </datalist>                     



</div>  
</div>


<div style={{textAlign:"center",marginLeft:"0.15rem",width:"100%"}}>
<button type="submit" className={["btn btn-block ",classes["btn-search"]].join(" ")}>Search</button>
</div>
</form>

</div>

<div className={classes["car-container"]}>
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>

        <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>

  <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>

   <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>

  <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>

    <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>

    <div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
            
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
<div className={[classes["container"],"card"].join(" ")}>
          <img className={[classes["car-image"],"card-img-top"].join(" ")} src={
              Math.floor(Math.random() * 2) === 1 ?   
            "https://cdn.pixabay.com/photo/2019/08/04/23/28/honda-4384888_1280.jpg" :"https://cdn.pixabay.com/photo/2014/07/04/13/41/auto-383897_1280.jpg"
            } alt=""/>
          <div className="card-body">
            <h5 className={["card-title",classes["title"]].join(" ")}>Honda Civic 2009</h5>
            <p className={["card-text",classes["text"]].join(" ")}>114,000km</p>
            <p className={["card-text",classes["text"]].join(" ")}>Karachi, Pakistan</p>
            <p className={["card-text",classes["text"]].join(" ")}>Bill of Sale</p>
            <p className={["card-text",classes["text"]].join(" ")}>Run and Drive</p>
          <p className={["card-text",classes["text"]].join(" ")}>Auction in <strong>2h 30m 40s</strong></p>
            <br></br>
            <p className={["card-text",classes["text"]].join(" ")}>Pre Auction charges: <span style={{color:"#1874CD"}}><strong>$50</strong></span></p>              
            <a href="#" className={classes["btn"]}>Participate Now!</a>
          </div>
        </div>
        </div>

</div>
<nav aria-label="..." className="my-5">
  <ul className="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>  
            </div>
          
        )
    }
}

export default BuyItNow;
