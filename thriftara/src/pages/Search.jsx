import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import styles from "../styles/About.module.css";
import Dropdown from 'react-bootstrap/Dropdown';


 

function Search () {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    return ( 
        <div className ="search-body">
            {/*left side*/}
            <div className ="search-filters">
                <section className ="search-department">
                        {/*drop down menu, bunch of options*/}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Tops</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bottoms action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Outerwear</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Footwear</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Accesories</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                   {/*drop down menu, bunch of options*/}
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Tops</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Bottoms action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Outerwear</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Footwear</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Accesories</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </section>
                <section className ="search-price-range">
                    {/*two text boxes with paras, only nums accepted*/}
                    <form action="">
                        <label htmlFor="minPrice">Min price</label><br/>
                        <input 
                            type="number" 
                            id="minPrice" 
                            pattern="/[0-9]*/"
                            value={minPrice}
                            onChange={(e) =>
                                setMinPrice((v) => (e.target.validity.valid ? e.target.value : v))
                            }
                        /><br/>
                        <label htmlFor="maxPrice">Max price</label><br/>
                        <input 
                            type="number" 
                            id="maxPrice"
                            pattern="/[0-9]*/"
                            value={maxPrice}
                            onChange={(e) =>
                                setMaxPrice((v) => (e.target.validity.valid ? e.target.value : v))
                            }
                        />
                    </form>
                </section>
                <section className ="search-size">
                    {/*4 checkboxes for sizes from small to xlarge*/}
                    <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Tops</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Bottoms</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Outerwear</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Footwear</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Accesories</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Menu>
                    </Dropdown>
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="size-s"></label>
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="size-m"></label>
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="size-l"></label>
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="size-xl"></label>
                </section>
                <section className = "search-brands">
                    {/*4 checkboxes*/}
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="brand 1"></label>
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="brand 2"></label>
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="brand 3"></label>
                    <input type="checkbox" className ="search-checkbox"/>
                    <label htmlFor="brand 4"></label>
                </section>
            </div>
             {/*right side*/}
            <div className ="search-results">

            </div>
        </div>
     );
}

 
export default Search;