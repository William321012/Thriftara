import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <section className='footer-logo'>
          <Link to='/'>Logo</Link>
        </section>
        <section className='customer-support'>
          <h3>Customer Support</h3>
          <p>Contact Number: 1-XXX-XXX-XXXX</p>
          <button type='submit' className='contact-btn'>Contact Us</button>
        </section>
        <section className='faq'>
          <h3>FAQ</h3>
          <button className='submit'>Learn More</button>
        </section>
        <section className='newsletter'>
          <h3>Get Our Newsletter</h3>
          <form>
            <input type='email' placeholder='Enter your email...' />
            <button type='submit' className='subscribe-btn'>Subscribe</button>
          </form>
        </section>
      </div>
    </>
  )
}

export default Footer