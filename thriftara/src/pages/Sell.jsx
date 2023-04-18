import React from "react";
// import styles from "../styles/Sell.module.css";
// import { Link } from "react-router-dom";
import SellNewItem from "../components/SellNewItem/SellNewItem";
import ForSale from "../components/ForSale/ForSale";

class Sell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: true,
      option2: false,
      option3: false,
    };
  }

  //Used for conditional rendering. Used states because if-else statements do work is jsx.
  changeOption(value) {
    if (value === 1) {
      this.setState({
        option1: true,
        option2: false,
        option3: false,
      });
    } else if (value === 2) {
      this.setState({
        option1: false,
        option2: true,
        option3: false,
      });
    } else if (value === 3) {
      this.setState({
        option1: false,
        option2: false,
        option3: true,
      });
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
                  className="form-control"
                  style={{
                    marginTop: this.state.option1
                      ? "50px"
                      : null || this.state.option2
                      ? "50px"
                      : null || this.state.option3
                      ? "50px"
                      : null,

                    marginBottom: this.state.option1
                      ? "50px"
                      : null || this.state.option2
                      ? "50px"
                      : null || this.state.option3
                      ? "50px"
                      : null,
                  }}
                >
                  For Sale
                </button>
                <button
                  onClick={this.changeOption.bind(this, 2)}
                  className="form-control"
                  style={{
                    marginTop: this.state.option1
                      ? "50px"
                      : null || this.state.option2
                      ? "50px"
                      : null || this.state.option3
                      ? "50px"
                      : null,

                    marginBottom: this.state.option1
                      ? "50px"
                      : null || this.state.option2
                      ? "50px"
                      : null || this.state.option3
                      ? "50px"
                      : null,
                  }}
                >
                  Sold
                </button>
                <button
                  onClick={this.changeOption.bind(this, 3)}
                  className="form-control"
                  style={{
                    marginTop: this.state.option1
                      ? "50px"
                      : null || this.state.option2
                      ? "50px"
                      : null || this.state.option3
                      ? "50px"
                      : null,

                    marginBottom: this.state.option1
                      ? "50px"
                      : null || this.state.option2
                      ? "50px"
                      : null || this.state.option3
                      ? "50px"
                      : null,
                  }}
                >
                  Sell New Item
                </button>
              </div>

              <div className="col-10">
                <div className="card">
                  <div className="card-body">
                    {this.state.option1 ? <ForSale /> : null}
                    {this.state.option2 ? <h1>Option 2</h1> : null}
                    {this.state.option3 ? <SellNewItem /> : null}
                  </div>
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
