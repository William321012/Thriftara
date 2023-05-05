import React from "react";
import axios from "axios";
import styles from "../styles/Purchases.module.css";

class Purchases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      test: [],
    };
  }

  displayPurchaseInfo = async () => {
    let random = await axios
      .get("http://localhost:8080/orders/displayAllOrder")
      .then((response) => {
        //Sets the userInfo and also temporary assigned it again (this is because set state is asynchronously and can't be accessed)
        //to send and grab more information about the order.
        this.setState({
          userInfo: response.data.data,
        });
        this.state.userInfo = response.data.data;
        this.displayAllPurchases(this.state.userInfo);
      })
      .catch((error) => {
        // error response
        alert("failed");
      });
  };

  displayAllPurchases = async (value) => {
    //Take all the oid values send by displayPurchaseInfo() and records all the json into one.
    this.state.userInfo.map((info) =>
      axios
        .get(
          "http://localhost:8080/orders/getOrderItemByOid",
          {
            params: { oid: info.oid },
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
          { async: false }
        )
        .then((response) => {
          this.setState((previousState) => ({
            test: [...previousState.test, response.data.data[0]],
          }));
        })
        .catch((error) => {
          // error response
          alert("failed");
        })
    );
  };

  displayUserInfo = (value, type) => {
    for (let i = 0; i < this.state.test.length; i++) {
      // Returns the table data based on the information we're looking for 1 = Image, 2 = Item Name, 3 = Purchase Price, 4 = Purchase Quantity, 5 = Total Price
      if (value == this.state.test[i].oid) {
        if (type == 1) {
          return (
            <td>
              <img
                class={styles.imgSize}
                src={
                  "http://localhost:8080" + this.state.test[i].image + "_1.png"
                }
              ></img>
            </td>
          );
        } else if (type == 2) {
          return <td>{this.state.test[i].title}</td>;
        } else if (type == 3) {
          return <td>{this.state.test[i].unitPrice}</td>;
        } else if (type == 4) {
          return <td>{this.state.test[i].num}</td>;
        } else if (type == 5) {
          return (
            <td>{this.state.test[i].unitPrice * this.state.test[i].num}</td>
          );
        }
      }
    }
  };

  componentDidMount() {
    this.displayPurchaseInfo();
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
                {/* This wasn't in the database */}
                {/* <th className="col-3">Item Description</th> */}
                <th className="col-1">Purchase Price</th>
                <th className="col-1">Purchase Quantity</th>
                <th className="col-1">Total Price</th>
                <th className="col-2">Recipient</th>
                <th className="col-3">Address</th>
                <th className="col-3">Date</th>
              </tr>
            </thead>
            <tbody id="orderBody">
              {this.state.userInfo.map((info) => (
                <tr>
                  {/* Fetch data later when function is added */}
                  <td>{info.oid}</td>
                  {this.displayUserInfo(info.oid, 1)}
                  {this.displayUserInfo(info.oid, 2)}
                  {this.displayUserInfo(info.oid, 3)}
                  {this.displayUserInfo(info.oid, 4)}
                  {this.displayUserInfo(info.oid, 5)}
                  <td>{info.receiverName}</td>
                  {/* Concats all address information */}
                  <td>
                    {info.receiverAddress +
                      " " +
                      info.receiverCity +
                      " " +
                      info.receiverState}
                  </td>
                  <td>{info.orderTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Purchases;
