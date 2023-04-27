import React from "react";
import axios from "axios";

class Purchases extends React.Component {
  //   const [items, setItems] = useState();
  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
      userInfo: [],
    };
  }

  // displayAllPurchases = () => {
  // axios
  //   .get("http://localhost:8080/orders/getOrderItemByOid")
  //   .then((response) => {
  //     this.setState({
  //       purchases: response.data.data,
  //     });
  //   })
  //   .catch((error) => {
  //     // error response
  //     alert("failed");
  //   });
  // };

  displayUserInfo = () => {
    axios
      .get("http://localhost:8080/orders/displayAllOrder")
      .then((response) => {
        this.setState({
          userInfo: response.data.data,
        });
      })
      .catch((error) => {
        // error response
        alert("failed");
      });
  };

  componentDidMount() {
    // this.displayAllPurchases();
    this.displayUserInfo();
  }

  render() {
    return (
      <section>
        <div className="container py-5 align-items-center">
          <table id="order" className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th className="col-1">Order#</th>
                <th className="col-2">Image</th>
                <th className="col-1">Item Name</th>
                <th className="col-3">Item Description</th>
                <th className="col-1">Purchase Price</th>
                <th className="col-1">Purchase Quantity</th>
                <th className="col-1">Total Price</th>
                <th className="col-2">Recipient</th>
                <th className="col-3">Address</th>
                <th className="col-3">Date</th>
              </tr>
            </thead>
            <tbody id="orderBody"></tbody>
            {console.log(this.state.userInfo)}
            {this.state.userInfo.map((info) => (
              <tr>
                {/* Fetch data later when function is added */}
                <td>{info.oid}</td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    );
  }
}

export default Purchases;
