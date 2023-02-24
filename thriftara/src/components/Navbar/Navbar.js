import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className='navbar-container'>
        <Link to='/' className='nav-logo'>Logo</Link>
        <div className='search-bar'>
          <form>
            <input type="text" placeholder='Search...' className='search-text'/>
            <button type='submit' className='search-btn'>Search</button>
          </form>
        </div>
        <ul>
          <li><Link to='/sellnow'>Sell Now</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar