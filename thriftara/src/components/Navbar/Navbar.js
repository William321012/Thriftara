import React from 'react'
import './Navbar.css'
import Logo from '../../logo/logo.png'
import { Link } from 'react-router-dom'
import { BsCart4 } from 'react-icons/bs'

function Navbar() {
  return (
    <>
      <div className='navbar-top'>
        <Link to='/' className='nav-logo'><img src={Logo} alt='logo' /></Link>
        <div className='search-bar'>
          <form>
            <input type="text" placeholder='Search...' className='search-text' />
            <button type='submit' className='search-btn'>Search</button>
          </form>
        </div>
        <ul className='topnav'>
          <li><Link to='/sellnow'>Sell Now</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/cart'><BsCart4 size={20} /></Link></li>
        </ul>
      </div>
      <div className='navbar-btm'>
        <ul className='bottomnav'>
          <li><Link to='/brands'>Brands</Link></li>
          <li><Link to='/mens'>Menswear</Link></li>
          <li><Link to='/womens'>Womenswear</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar