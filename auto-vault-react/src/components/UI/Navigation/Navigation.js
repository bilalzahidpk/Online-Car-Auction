import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <Fragment>
      <nav
        className={[
          classes['nav-container'],
          'navbar navbar-expand-lg navbar-light',
        ].join(' ')}
      >
        <button
          className='navbar-toggler'
          type='button'
          data-hover='dropdown'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className={[classes['nav'], 'nav-link'].join(' ')} to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>

            <li className='nav-item dropdown'>
              <Link
                className={[
                  classes['nav-dropdown'],
                  'nav-link dropdown-toggle',
                ].join(' ')}
                to='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Auctions
              </Link>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/buyitnow'
                >
                  Dealer Auctions
                </Link>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/buyitnow'
                >
                  Savage Auctions
                </Link>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/buyitnow'
                >
                  Live Auctions
                </Link>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/buyitnow'
                >
                  Buy It Now
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link
                className={[classes['nav'], 'nav-link'].join(' ')}
                to='/trends'
              >
                Trends
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={[classes['nav'], 'nav-link'].join(' ')}
                to='/forums'
              >
                Forums
              </Link>
            </li>

            {/* <li className="nav-item">
            <Link className={[classes["nav"],"nav-link"].join(" ")} to="/">Ratings</Link>
          </li> */}

            {/* Please uncomment Ratings after FYP & Delete Support Code!!!!!!!*/}

            <li className='nav-item dropdown'>
              <Link
                className={[
                  classes['nav-dropdown'],
                  'nav-link dropdown-toggle',
                ].join(' ')}
                to='#'
                id='navbarDropdown'
                role='button'
                data-hover='dropdown'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Support
              </Link>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/buyertips'
                >
                  Buyer Tips
                </Link>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/ourfee'
                >
                  Our Fee
                </Link>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/faq'
                >
                  FAQ
                </Link>
              </div>
            </li>

            <li className='nav-item dropdown'>
              <Link
                className={[
                  classes['nav-dropdown'],
                  'nav-link dropdown-toggle',
                ].join(' ')}
                to='#'
                id='navbarDropdown'
                role='button'
                data-hover='dropdown'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                Services
              </Link>
              <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/'
                >
                  Car Inspection
                </Link>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/'
                >
                  Car Insurance
                </Link>
                <Link
                  className={[classes['nav-dropdown'], 'dropdown-item'].join(
                    ' '
                  )}
                  to='/'
                >
                  Car Loan
                </Link>
              </div>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search car'
              aria-label='Search'
            />
            <button className={classes['button-search']} type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navigation;
