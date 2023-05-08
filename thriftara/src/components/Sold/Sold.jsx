import React from "react";
import axios from "axios";
// import data2 from "./mock-data.json";

class Sold extends React.Component {
  ImgURL = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      sales: [],
    };
  }

  displayAllSales = () => {
    axios
      .get("http://localhost:8080/customers/displayUserProduct")
      .then((response) => {
        this.setState({
          purchases: response.data.data,
        });
      })
      .catch((error) => {
        // error response
        alert("failed");
      });
  };

  componentDidMount() {
    // this.displayAllSales();
  }

  render() {
    return (
      <section>
        <table id="order" className="table table-striped">
          <thead className="table-dark">
            <h1>
              This page as temporary data for now as the backend hasn't been
              implemented yet.
            </h1>
            <tr>
              <th className="col-1">Order#</th>
              <th className="col-2">Image</th>
              <th className="col-1">Item Name</th>
              <th className="col-1">Purchase Price</th>
              <th className="col-1">Purchase Quantity</th>
              <th className="col-1">Total Price</th>
              <th className="col-2">Recipient</th>
              <th className="col-3">Address</th>
              <th className="col-3">Date</th>
            </tr>
          </thead>
          <tbody id="orderBody"></tbody>
          {/* Temporary data will be used below: */}
          {/* {this.state.information.map((info, i) => (
            <tr>
              <td>{info.id}</td>
              <td>{info.image}</td>
              <td>{info.itemName}</td>
              <td>{info.purchasePrice}</td>
              <td>{info.quantity}</td>
              <td>{info.totalPrice}</td>
              <td>{info.Recipient}</td>
              <td>{info.Address}</td>
              <td>{info.Date}</td>
            </tr>
          ))} */}
        </table>
        {/* Gets information about the seller from the backend. */}
        {/* {this.displayAllSales()} */}
      </section>
    );
  }
}

export default Sold;
