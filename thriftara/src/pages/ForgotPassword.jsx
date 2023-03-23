import React from "react";
import styles from "../styles/Login.module.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <section>
      <div className="container py-5">
        <div className="row justify-content-md-center">
          <div className="col-9">
            <div className="card rounded-4 shadow-lg">
              <div className="card-body py-4 px-4">
                <div className="text-center mb-4">
                  <img src={logo} alt="logo" />
                </div>
                <form>
                  <h3 className="pb-1 fw-bold">Forgot Your Password</h3>
                  <h6>
                    Please enter the email address you'd like our password reset
                    information sent to
                  </h6>
                  <span className={styles.fadeline}></span>

                  <div className="form-group mb-3 text-start">
                    <label className="pb-1" for="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                      required
                    />
                  </div>

                  <div className="form-group mb-3 text-start">
                    <label className="pb-1" for="uname">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Username"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary fw-bold form-control mb-2"
                  >
                    Forgot Password
                  </button>

                  <Link to="/pages/Login">
                    <br />
                    Back To Login
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgotPassword;
