import React, { Component } from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './AddCar.module.css';

class AddCar extends Component {
  state = {
    car: '',
  };

  onChangeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      car: event.target.value,
    });
  };

  renderModel = (brand) => {
    if (brand === 'Honda') {
      return (
        <Fragment>
          <option value='' disabled selected>
            Select Model
          </option>
          <option value=''>City</option>
          <option value=''>Civic</option>
        </Fragment>
      );
    } else if (brand === 'Toyota') {
      return (
        <Fragment>
          <option value='' disabled selected>
            Select Model
          </option>
          <option value=''>Corolla</option>
          <option value=''>Yaris</option>
          <option value=''>Prado</option>
          <option value=''>Fortuner</option>
        </Fragment>
      );
    } else if (brand === 'Suzuki') {
      return (
        <Fragment>
          <option value='' disabled selected>
            Select Model
          </option>
          <option value=''>Alto</option>
          <option value=''>Cultus</option>
          <option value=''>Wagon R</option>
          <option value=''>Swift</option>
        </Fragment>
      );
    }

    return null;
  };

  render() {
    return (
      <div style={{ paddingTop: '0.25rem' }}>
        <nav aria-label='breadcrumb'>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li class='breadcrumb-item active' aria-current='page'>
              Post Car Ad
            </li>
          </ol>
        </nav>
        <div className={['mx-auto', classes['container']].join(' ')}>
          <form classes={classes['form-classes']} encType='multipart/form-data'>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>Enter Car Make</label>
              <select
                data-filter='model'
                onChange={this.onChangeHandler}
                className='filter-model filter form-control'
              >
                <option value='' disabled selected>
                  Select Make
                </option>
                <option value='Toyota'>Toyota</option>
                <option value='Honda'>Honda</option>
                <option value='Suzuki'>Suzuki</option>
              </select>
            </div>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>Enter Car Model</label>
              <select
                data-filter='type'
                className='filter-type filter form-control'
              >
                {this.renderModel(this.state.car)}
              </select>
            </div>
            <div class='form-group'>
              <label for='exampleFormControlSelect2'>Enter VIN</label>
              <input
                type='text'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder=''
              />
            </div>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>Enter Color</label>
              <select
                data-filter='model'
                className='filter-model filter form-control'
              >
                <option value='' disabled selected>
                  Select Color
                </option>
                <option value='Suzuki'>White</option>
                <option value='Toyota'>Red</option>
                <option value='Honda'>Black</option>
                <option value='Suzuki'>Silver</option>
                <option value='Suzuki'>Blue</option>
                <option value='Suzuki'>Beige</option>
              </select>
            </div>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>
                Enter Tranmission Type
              </label>
              <select
                data-filter='model'
                className='filter-model filter form-control'
              >
                <option value='' disabled selected>
                  Select Transmission Type
                </option>
                <option value='Suzuki'>Manual</option>
                <option value='Toyota'>Automatic</option>
              </select>
            </div>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>Enter Mileage</label>
              <input
                type='number'
                class='form-control'
                id='exampleFormControlInput1'
                placeholder=''
              />
            </div>
            <div class='form-group'>
              <label for='exampleFormControlInput1'>Enter Engine Type</label>
              <select
                data-filter='model'
                className='filter-model filter form-control'
              >
                <option value='' disabled selected>
                  Select Engine Type
                </option>
                <option value='Suzuki'>Petrol</option>
                <option value='Toyota'>CNG</option>
                <option value='Toyota'>Hybrid</option>
                <option value='Toyota'>Electric</option>
              </select>
            </div>
            <div class='form-group'>
              <label for='exampleFormControlTextarea1'>Upload Car Images</label>
              <input type='file' id='file' multiple />{' '}
            </div>
            <div class='form-group'>
              <label for='exampleFormControlTextarea1'>
                Enter Comments About Car
              </label>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
              ></textarea>
            </div>
            <div class='text-center'>
              <button type='button' className={classes['btn-submit']}>
                Post Ad
              </button>
            </div>
          </form>
        </div>
        <br />
      </div>
    );
  }
}

export default AddCar;
