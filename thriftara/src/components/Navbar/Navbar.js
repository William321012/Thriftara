import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../logo/logo.png";
import { Link } from "react-router-dom";
import { BsCart4, BsSearch } from "react-icons/bs";
import axios from "axios";

function Navbar() {
  const [cartDisplay, setCartDisplay] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  //all items in shopping cart
  const loadCart = async () => {
    const res = await axios.get("http://localhost:8080/carts/display");
    console.log(res.data.data);
    setCartDisplay(res.data.data);
  };

  //total number in cart, minimum amount is 0
  const itemscount = cartDisplay.reduce(
    (amount, current) => amount + current.num,
    0
  );

  return (
    <div>
      <div className="navbar-top">
        <Link to="/" className="nav-logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="search-bar">
          <form>
            <input
              type="text"
              placeholder="Search..."
              className="search-text"
            />
            <button type="submit" className="search-btn">
              <BsSearch />
            </button>
          </form>
        </div>
        <section className="topnav">
          <Link
            to="/pages/Purchases"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <button className="purchase-btn">Purchases</button>
          </Link>
          <Link
            to="/pages/Sell"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <button className="sell-btn">Sell</button>
          </Link>
          <Link
            to="/pages/Login"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <button className="login-btn">Login</button>
          </Link>
          <Link
            to="/pages/Signup"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <button className="signup-btn">Signup</button>
          </Link>
          <Link
            to="/cart"
            className="text-dark"
            style={{ textDecoration: "none" }}
          >
            <button className="cart-notif"><BsCart4 size={20} />
            {itemscount ? (
              <span className="cart-item-count">{itemscount}</span>
            ) : (
              <span className="cart-item-count">0</span>
            )}
            </button>
          </Link>
        </section>
      </div>

      <div className="navbar-btm">
        <ul className="bottomnav">
          <section className="nav-brands">
            <li className="brands-list">
              <Link
                to="/brands"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                Brands
              </Link>
              <div className="links">
                <ul className="drop">
                  <li>
                    <Link
                      to="https://www.nike.com"
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Nike
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.prada.com/us/en.html"
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Prada
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://us.supreme.com"
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Supreme
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.gucci.com/us/en/"
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Gucci
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.adidas.com/us"
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      Addidas
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </section>

          <section className="menswear">
            <li className="nav-mens">
              <Link
                to="/mens"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                Menswear
              </Link>
              <ul className="drop">
                <li>
                  <Link
                    to="/mens/tops"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Tops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mens/bottoms"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Bottoms
                  </Link>
                </li>
              </ul>
            </li>
          </section>

          <section className="womenswear">
            <li className="nav-womens">
              <Link
                to="/womens"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                Womenswear
              </Link>
              <ul className="drop">
                <li>
                  <Link
                    to="/womens/tops"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Tops
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womens/bottoms"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Bottoms
                  </Link>
                </li>
              </ul>
            </li>
          </section>

          <section className="about-page">
            <li>
              <Link
                to="/pages/about"
                className="text-dark"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>
          </section>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
