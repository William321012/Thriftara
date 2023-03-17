// <<<<<<< HEAD
import React from 'react'
import './Navbar.css'
import Logo from '../../logo/logo.png'
import { Link } from 'react-router-dom'
import { BsCart4, BsSearch } from 'react-icons/bs'
// =======
// import React from "react";
// import "./Navbar.css";
// import Logo from "../../logo/logo.png";
// import { Link } from "react-router-dom";
// import { BsCart4 } from "react-icons/bs";
// >>>>>>> 056522fe55a5b01232262e1d09f34a0129ac99b0

function Navbar() {
  return (
    <>
      <div className="navbar-top">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="search-bar">
          <form>
{/* <<<<<<< HEAD */}
            <input type="text" placeholder='Search...' className='search-text' />
            <button type='submit' className='search-btn'><BsSearch /></button>
{/* =======
            <input
              type="text"
              placeholder="Search..."
              className="search-text"
            />
            <button type="submit" className="search-btn">
              Search
            </button>
>>>>>>> 056522fe55a5b01232262e1d09f34a0129ac99b0 */}
          </form>
        </div>
        <ul className="topnav">
          <Link to="/pages/Sell">
            <button>Sell</button>
          </Link>
          <Link to="/pages/Login">
            <button>Login</button>
          </Link>
          <Link to="/pages/Signup">
            <button>Signup</button>
          </Link>
          <li>
            <Link to="/cart">
              <BsCart4 size={20} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-btm">
        <ul className="bottomnav">
          <li className="brands">
            <Link to="/brands">
              Brands
              <div className="links">
                <ul className="drop">
                  <li>
                    <Link to="https://www.nike.com">Nike</Link>
                  </li>
                  <li>
                    <Link to="https://www.prada.com/us/en.html">Prada</Link>
                  </li>
                  <li>
                    <Link to="https://us.supreme.com">Supreme</Link>
                  </li>
                  <li>
                    <Link to="https://www.gucci.com/us/en/">Gucci</Link>
                  </li>
                  <li>
                    <Link to="https://www.adidas.com/us">Addidas</Link>
                  </li>
                </ul>
              </div>
            </Link>
          </li>
          <li className="mens">
            <Link to="/mens">
              Menswear
              <ul className="drop">
                <li>Tops</li>
                <li>Bottoms</li>
              </ul>
            </Link>
          </li>
          <li className="womens">
            <Link to="/womens">
              Womenswear
              <ul className="drop">
                <li>Tops</li>
                <li>Bottoms</li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="/pages/about">About</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
