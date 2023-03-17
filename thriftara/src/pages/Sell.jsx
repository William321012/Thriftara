import React from "react";
// import styles from "../styles/Sell.module.css";
// import { Link } from "react-router-dom";

class Sell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: 1,
    };
  }

  changeOption(option) {
    this.option = option;
  }

  generateComponent() {
    if (this.option === 1) {
    } else if (this.option === 2) {
    } else if (this.option === 3) {
    }
  }

  render() {
    return (
      <section>
        <div className="container py-5">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-2 align-middle">
                <button
                  onClick={this.changeOption.bind(this, 1)}
                  className="form-control my-auto"
                >
                  For Sale
                </button>
                <button
                  onClick={this.changeOption.bind(this, 2)}
                  className="form-control my-auto"
                >
                  Sold
                </button>
                <button
                  onClick={this.changeOption.bind(this, 3)}
                  className="form-control my-auto"
                >
                  Sell New Item
                </button>
              </div>

              <div className="col-10">
                <div className="card">
                  <div className="card-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Sell;
