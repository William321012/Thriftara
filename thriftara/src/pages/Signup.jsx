import React from "react";
import styles from "../styles/Signup.module.css";
import logo from "../images/logo.png";
import Signuppic from "../images/signuppic.jpg";
// import { Link } from "react-router-dom";

class Signup extends React.Component {
  password = React.createRef();
  cnfrmpassword = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      notification: "Repeat Password",
    };
  }

  //Tells the user the password doesn't match
  checkPassword() {
    if (this.password.current.value !== this.cnfrmpassword.current.value) {
      this.setState({
        notification: "Repeat Password - Password Does Not Match",
      });
    } else {
      this.setState({
        notification: "Repeat Password",
      });
    }
  }

  //Prevents Submission of form if password doesn't match - Doesn't work right now
  handleSubmit(e) {
    if (this.password.current.value !== this.cnfrmpassword.current.value) {
      e.preventDefault();
    }
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
                      <h3 className="pb-1 fw-bold">Sign Up</h3>
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

                      <div className="form-group mb-3 text-start">
                        <label className="pb-1" for="psw d-flex">
                          {this.state.notification}
                        </label>
                        <input
                          ref={this.cnfrmpassword}
                          type="password"
                          className="form-control"
                          placeholder="Enter Password Again"
                          onChange={this.checkPassword.bind(this)}
                          required
                        />
                      </div>

                      <button className="btn btn-primary fw-bold form-control mb-2">
                        Sign Up Now
                      </button>

                      <p>
                        By creating an account you agree to our
                        <u className="link-primary">Terms & Privacy.</u>
                      </p>
                    </form>
                  </div>
                </div>

                <div className="col-5">
                  <img
                    className={styles.Signuppic_settings}
                    src={Signuppic}
                    alt="Signuppic"
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

export default Signup;
