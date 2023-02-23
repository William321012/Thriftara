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
            <input type="text" placeholder='Search...' />
            <button type='submit'>Search</button>
          </form>
        </div>
        <ul>
          <li><Link to='/sellnow'>SellNow</Link></li>
          <li><Link to='/login'>Mens</Link></li>
          <li><Link to='/signuo'>login</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar