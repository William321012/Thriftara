import '../styles/Search.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MultiLevelDropdown from '../components/Search/MultiLevelDropdown';
import {menswear, womenswear} from '../components/Search/dropdowns_search.js';

function Search () {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    console.log(menswear);
    console.log(womenswear);
    return ( 
        <div className ="containerSearch box">
            {/*left side*/}
            <header className="heading-filter box">
              <h1>Filters</h1>
            </header>
            <section className ="department sidebar box">
                {/*drop down menu, bunch of options*/}
                  
                {/*drop down menu, bunch of options*/}
                    
            </section>
            <section className ="price-range sidebar box">
                {/*two text boxes with paras, only nums accepted*/}
                <form action="">
                    <label htmlFor="minPrice" className="price-label box">Min price</label><br/>
                    <input 
                        type="number" 
                        id="minPrice" 
                        pattern="/[0-9]*/"
                        value={minPrice}
                        onChange={(e) =>
                            setMinPrice((v) => (e.target.validity.valid ? e.target.value : v))
                        }
                    /><br/>
                    <label htmlFor="maxPrice" className="price-label box">Max price</label><br/>
                    <input 
                        type="number" 
                        id="maxPrice"
                        pattern="/[0-9]*/"
                        value={maxPrice}
                        onChange={(e) =>
                            setMaxPrice((v) => (e.target.validity.valid ? e.target.value : v))
                        }
                    /><br/>
                    <button id="price-button" type="button" onClick="alert">Go!</button>
                </form>
            </section>
            <section className ="size sidebar box">
                {/*womens dropdown with dropdowns for womens clothes whith dropdowns for sizes each*/}
                <MultiLevelDropdown items={womenswear} />
                {/*mens dropdown with dropdowns for mens clothes whith dropdowns for sizes each*/}
                <MultiLevelDropdown items={menswear} />
            </section>
            <section className = "brands sidebar box">
                {/*4 checkboxes*/}
                <button>Brands</button>
            </section>
             {/*right side*/}
            <div className="heading-listings box">
                <h1>Listings</h1>
            </div>
            <div className="listings-body box">
                <h1>Listings body</h1>
            </div>
        </div>
    );
}


const NestedDropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <div className="dropdown">
        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}
        {open ? (
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  };


 
export default Search;