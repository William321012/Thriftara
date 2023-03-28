import React from "react";
import "./Footer.css";
import Logo from "../../logo/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section className="footer-logo">
          <Link to="/">
            <img src={Logo} alt="logo" className="FooterLogo" />
          </Link>
        </section>
        <section className="customer-support">
          <h3>Customer Support</h3>
          <p>Contact Number: 1-XXX-XXX-XXXX</p>
          <Link to="/pages/Contacts">
            <button className="contact-btn">Contact Us</button>
          </Link>
        </section>
        <section className="faq">
          <h3>FAQ</h3>
          <Link to="/faq">
            <button className="learn-more">Learn More</button>
          </Link>
        </section>
        <section className="newsletter">
          <h3>Get Our Newsletter</h3>
          <form>
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email..."
            />
            <button type="submit" className="subscribe-btn">
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Footer;
