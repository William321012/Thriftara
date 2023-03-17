import React from "react";
import styles from "../styles/Login.module.css";
import logo from "../images/logo.png";
import loginpic from "../images/loginpic.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section>
      <div className="container py-5">
        <div className="col-12">
          <div className="card rounded-4 shadow-lg">
            <div className="row">
              <div className="col-7">
                <div className="card-body py-4">
                  <div className="text-center mb-4">
                    <img src={logo} alt="logo" />
                  </div>
                  <form>
                    <h3 className="pb-1 fw-bold">Login</h3>
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
                      <label className="pb-1" for="psw d-flex">
                        Password
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Password"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary fw-bold form-control mb-2"
                    >
                      Login
                    </button>

                    <Link to="/pages/Login">
                      <br />
                      Forgot password?
                    </Link>
                    <div className="d-flex align-items-center justify-content-center pb-3">
                      <p className="mb-0 me-2">Don't have an account?</p>
                      <Link to="/pages/Signup">Sign Up Now</Link>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-5">
                <img
                  className={styles.loginpic_settings}
                  src={loginpic}
                  alt="loginpic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
