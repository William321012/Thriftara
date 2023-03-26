// <<<<<<< HEAD
import React from 'react'
import './Navbar.css'
import Logo from '../../logo/logo.png'
import { Link } from 'react-router-dom'
import { BsCart4, BsSearch } from 'react-icons/bs'

function Navbar() {
  return (
    <>
      <div className="navbar-top">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="search-bar">
          <form>
            <input type="text" placeholder='Search...' className='search-text' />
            <button type='submit' className='search-btn'><BsSearch /></button>
          </form>
        </div>
        <section className="topnav">
          <Link to="/pages/Sell" class="text-dark" style={{ textDecoration: 'none' }}>
            <button>Sell</button>
          </Link>
          <Link to="/pages/Login" class="text-dark" style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
          <Link to="/pages/Signup" class="text-dark" style={{ textDecoration: 'none' }}>
            <button>Signup</button>
          </Link>
          <Link to="/cart" class="text-dark" style={{ textDecoration: 'none' }}>
            <BsCart4 size={20} />
          </Link>
        </section>
      </div>

      <div className="navbar-btm">
        <ul className="bottomnav">

          <section className='nav-brands'>
            <li className="brands-list">
              <Link to="/brands" class="text-dark" style={{ textDecoration: 'none' }}>
                Brands
              </Link>
              <div className="links">
                <ul className="drop">
                  <li>
                    <Link to="https://www.nike.com" class="text-dark" style={{ textDecoration: 'none' }}>Nike</Link>
                  </li>
                  <li>
                    <Link to="https://www.prada.com/us/en.html" class="text-dark" style={{ textDecoration: 'none' }}>Prada</Link>
                  </li>
                  <li>
                    <Link to="https://us.supreme.com" class="text-dark" style={{ textDecoration: 'none' }}>Supreme</Link>
                  </li>
                  <li>
                    <Link to="https://www.gucci.com/us/en/" class="text-dark" style={{ textDecoration: 'none' }}>Gucci</Link>
                  </li>
                  <li>
                    <Link to="https://www.adidas.com/us" class="text-dark" style={{ textDecoration: 'none' }}>Addidas</Link>
                  </li>
                </ul>
              </div>
            </li>
          </section>

          <section className='menswear'>
            <li className="nav-mens">
              <Link to="/mens" class="text-dark" style={{ textDecoration: 'none' }}>
                Menswear
              </Link>
              <ul className="drop">
                <li><Link to="/mens/tops" class="text-dark" style={{ textDecoration: 'none' }}>Tops</Link></li>
                <li><Link to="/mens/bottoms" class="text-dark" style={{ textDecoration: 'none' }}>Bottoms</Link></li>
              </ul>
            </li>
          </section>

          <section className='womenswear'>
            <li className="nav-womens">
              <Link to="/womens" class="text-dark" style={{ textDecoration: 'none' }}>
                Womenswear
              </Link>
              <ul className="drop">
                <li><Link to="/womens/tops" class="text-dark" style={{ textDecoration: 'none' }}>Tops</Link></li>
                <li><Link to="/womens/bottoms" class="text-dark" style={{ textDecoration: 'none' }}>Bottoms</Link></li>
              </ul>
            </li>
          </section>

          <section className='about-page'>
            <li>
              <Link to="/pages/about" class="text-dark" style={{ textDecoration: 'none' }}>About</Link>
            </li>
          </section>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
