import React from "react";
import axios from "axios";
import styles from "./ForSale.module.css";
// import data from "./mock-data.json";

class ForSale extends React.Component {
  ImgURL = React.createRef();

  displayAllPurchases = () => {
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

  constructor(props) {
    super(props);
    this.state = {
      purchases: [],
    };
  }

  componentDidMount() {
    this.displayAllPurchases();
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
              {this.createImgURL(info.image)}
              <td>
                <img src={this.ImgURL} class={styles.imgSize}></img>
              </td>
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
