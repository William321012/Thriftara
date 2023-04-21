import React, { userState } from "react";
import axios from "axios";
import data from "./mock-data.json";

class ForSale extends React.Component {
  displayAllPurchases = () => {
    axios
      .get("http://localhost:8080/orders/displayAllOrder")
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        // error response
        alert("failed");
      });
  };

  // const [items, setItems] = useState();

  constructor(props) {
    super(props);
    this.state = {
      information: data,
    };
  }

  render() {
    return (
      <section>
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
          {this.state.information.map((info, i) => (
            <tr>
              <td>{info.id}</td>
              <td>{info.image}</td>
              <td>{info.itemName}</td>
              <td>{info.itemDescription}</td>
              <td>{info.purchasePrice}</td>
              <td>{info.quantity}</td>
            </tr>
          ))}
          {/* {console.log(this.state.information.length)} */}
        </table>
        {/* Gets information about the seller from the backend. */}
        {this.displayAllPurchases()}
      </section>
    );
  }
}

export default ForSale;
