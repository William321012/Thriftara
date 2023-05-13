import React from "react";
import axios from "axios";
import data2 from "./mock-data.json";

class Sold extends React.Component {
  ImgURL = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      infromation: [],
    };
  }

  displayAllSales = () => {
    this.setState({
      infromation: data2,
    });

    axios
      .get("http://localhost:8080/customers/ItemDeliver")
      .then((response) => {
        this.setState({
          sales: response.data.data,
        });
      })
      .catch((error) => {
        // error response
        alert("failed");
      });
  };

  componentDidMount() {
    this.displayAllSales();
  }

  createImgURL = (url) => {
    this.ImgURL = "http://localhost:8080" + url + "_1.png";
  };

  render() {
    return (
      <section>
        <table id="order" className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th className="col-1">Order#</th>
              <th className="col-2">Image</th>
              {/* Order name wasn't in database
              <th className="col-1">Item Name</th> */}
              <th className="col-1">Purchase Price</th>
              <th className="col-1">Purchase Quantity</th>
              <th className="col-1">Total Price</th>
              <th className="col-2">Recipient</th>
              <th className="col-3">Address</th>
              <th className="col-3">Date</th>
            </tr>
          </thead>
          <tbody id="orderBody">
            {this.state.sales.map((info, i) => (
              <tr>
                <td>{info.pid}</td>
                {this.createImgURL(info.image)}
                <td>
                  <img alt="img" src={this.ImgURL}></img>
                </td>
                <td>{info.unit}</td>
                <td>{info.num}</td>
                <td>{info.total}</td>
                <td>{info.name}</td>
                <td>
                  {info.Address +
                    " " +
                    info.city +
                    " " +
                    info.state +
                    " " +
                    info.zip}
                </td>
                <td>{info.orderTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

export default Sold;
