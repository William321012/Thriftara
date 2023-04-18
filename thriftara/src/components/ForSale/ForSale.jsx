import React from "react";
import axios from "axios";

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

  render() {
    return (
      <section>
        <table id="order" class="table table-striped">
          <thead>
            <tr>
              <th class="col-1">Order Number</th>
              <th class="col-2">recipient</th>
              <th class="col-3">address</th>
              <th class="col-1">total</th>
              <th class="col-1">date</th>
              <th class="col-2">operation</th>
            </tr>
          </thead>
          <tbody id="orderBody"></tbody>
          {this.displayAllPurchases()}
        </table>
      </section>
    );
  }
}

export default ForSale;
