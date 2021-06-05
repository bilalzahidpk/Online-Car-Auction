import React, { Component } from 'react';
import classes from './Forum.module.css';

class Forums extends Component {
  render() {
    return (
      <div>
        <ul className='nav'>
          <li className='nav-item'>
            <form className='form-inline'>
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
          </li>
          <li className='nav-item'>
            <a
              className={['nav-link', classes['link']].join(' ')}
              aria-current='page'
              href='#'
            >
              Categories
            </a>
          </li>
          <li className='nav-item'>
            <a className={['nav-link', classes['link']].join(' ')} href='#'>
              Latest
            </a>
          </li>
          <li className='nav-item'>
            <a className={['nav-link', classes['link']].join(' ')} href='#'>
              Top
            </a>
          </li>
        </ul>
        <div class='table-responsive'>
          <table
            className={['table mx-auto w-auto', classes['table']].join(' ')}
          >
            <thead>
              <tr>
                <th scope='col'>
                  <strong>Category</strong>
                </th>
                <th scope='col'>
                  <strong>Latest</strong>
                </th>
                <th scope='col'>
                  <strong>Topics</strong>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className={classes['column-item']}>
                    <h3 style={{ width: '40%' }}>Toyota</h3>
                    <div style={{ width: '100%', wordBreak: 'break-word' }}>
                      All discussion related to Toyota cars goes into this
                      section. Find solution to your problems, ask questions and
                      talk about your Toyota cars, all in one place.
                    </div>
                  </div>
                </td>
                <td>
                  <div className={classes['column-item']}>
                    <div>
                      <a href=''> Restoration Toyota Corolla 1974 </a>
                    </div>

                    <div>
                      <a href=''> Restoration Toyota Corolla 1974 </a>
                    </div>
                    <div>
                      <a href=''> Restoration Toyota Corolla 1974 </a>
                    </div>
                    <div>
                      <a href=''>
                        {' '}
                        Toyota Yaris 2020 Dedicated Discussion, Owners / Fans
                        Club Thread{' '}
                      </a>
                    </div>
                  </div>
                </td>
                <td>Otto</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Larry</td>
                <td>the Bird</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Forums;
