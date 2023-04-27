import React from "react";
import axios from "axios";
// import data from "./mock-data.json";

class ForSale extends React.Component {
  displayAllPurchases = () => {
    axios
      .get("http://localhost:8080/customers/displayUserProduct")
      .then((response) => {
        this.setState({
          purchases: response.data.data,
        });
        console.log(this.state.purchases);
      })
      .catch((error) => {
        // error response
        alert("failed");
      });
  };

  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
    };
  }

  componentDidMount() {
    this.displayAllPurchases();
  }

  render() {
    return (
      <section>
        {/* Testing Images
        <img
          src={require("../../../../Store/src/main/resources/static/images/3E7FD581-EC20-4AD1-8289-9B84F47D9B50_1")}
          alt="logo"
        /> */}
        <table id="order" className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th className="col-1">Order#</th>
              <th className="col-2">Image</th>
              <th className="col-1">Item Name</th>
              <th className="col-3">Item Description</th>
              <th className="col-1">Purchase Price</th>
              <th className="col-1">Quantity Remaining</th>
            </tr>
          </thead>
          <tbody id="orderBody"></tbody>
          {/* Temporary data will be used below: */}
          {this.state.purchases.map((info) => (
            <tr>
              <td>{info.id}</td>
              <td>{info.image}</td>
              <td>{info.title}</td>
              <td>{info.itemDescription}</td>
              <td>{info.price}</td>
              <td>{info.num}</td>
            </tr>
          ))}
        </table>
      </section>
    );
  }
}

export default ForSale;
