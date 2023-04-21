import React from "react";
import styles from "../styles/Login.module.css";
import logo from "../images/logo.png";
import loginpic from "../images/loginpic.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
axios.defaults.withCredentials = true;

class Login extends React.Component {
  username = React.createRef();
  password = React.createRef();

  connectUser = async () => {
    // Post request sends username information to backend to log in.
    axios
      .post(
        "http://localhost:8080/customers/log",
        {
          username: this.username.current.value,
          password: this.password.current.value,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then(function (response) {
        // console.log(response.data.data.cid);
        // successful response
        if (response.data.state == 5001) {
          alert("Incorrect Username or password");
        } else if (response.data.state == 200) {
          alert("Login Successful");
        }
      })
      .catch(function (error) {
        // error response
        alert("failed");
      });
  };

  //Prevents Form Submission
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
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
                    <form onSubmit={this.handleSubmit.bind(this)}>
                      <h3 className="pb-1 fw-bold">Login</h3>
                      <span className={styles.fadeline}></span>

                      <div className="form-group mb-3 text-start">
                        <label className="pb-1" for="uname">
                          Username
                        </label>
                        <input
                          ref={this.username}
                          type="text"
                          className="form-control"
                          placeholder="Enter Username"
                          required
                        />
                      </div>

                      <div className="form-group mb-3 text-start">
                        <label className="pb-1" for="psw d-flex">
                          Password
                        </label>
                        <input
                          ref={this.password}
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                          required
                        />
                      </div>

                      {/* Connects to backend when submit is clicked, and moves them to the home page. */}
                      <Link
                        to="/"
                        type="submit"
                        className="btn btn-primary fw-bold form-control mb-2"
                        onClick={this.connectUser}
                      >
                        Login
                      </Link>

                      <Link to="/pages/ForgotPassword">
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
}

export default Login;
