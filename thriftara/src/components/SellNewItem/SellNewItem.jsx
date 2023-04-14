import React from "react";
import styles from "../../styles/SellNewItem.module.css";
import axios from "axios";
// import { Link } from "react-router-dom";

class SellNewItem extends React.Component {
  check(names, dat) {
    for (var i = 0; i < names.length; i++) {
      var name = names[i];
      if (document.getElementById(name).value.trim() != "") {
        dat.append(name, document.getElementById(name).value);
      } else {
        return false;
      }
    }

    return true;
  }

  uploadItem = async () => {
    var dat = new FormData();
    var files = document.getElementById("file").files;

    if (files.length > 5) {
      alert("you at most can upload 5 pictures");
      return;
    } else if (files.length == 0) {
      alert("you must at least upload 1 pictures");
      return;
    }
    for (var i = 0; i < files.length; i++) {
      dat.append("file", files[i]);
    }

    if (
      !this.check(
        [
          "title",
          "description",
          "price",
          "category",
          "number",
          "status",
          "brand",
          "size",
          "color",
        ],
        dat
      )
    ) {
      alert("you must fill in all the information before submitting");
      return;
    }

    if (document.getElementById("female").checked == true) {
      dat.append("gender", "2");
    } else if (document.getElementById("male").checked == true) {
      dat.append("gender", "1");
    } else {
      dat.append("gender", "unselected");
    }

    axios
      .post("http://localhost:8080/products/uploadProduct", dat, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        // successful response
        if (response.data.state == 5001) {
          alert("File Submission Format Incorrect");
        } else if (response.data.state == 200) {
          alert("Item Successfully Created");
        }
      })
      .catch(function (error) {
        // error response
        alert("Failed");
      });

    alert("uploading product");
  };

  //Prevents Form Submission
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <div className="container py-5">
          <div className="row justify-content-md-center">
            <div className="col-9">
              <div className="card rounded-4 shadow-lg">
                <div className="card-body py-4 px-4">
                  <div className="text-center mb-4">
                    <h2>List A Item</h2>
                    <span className={styles.fadeline}></span>

                    <form
                      onSubmit={this.handleSubmit.bind(this)}
                      className="d-flex flex-column justify-content-md-center"
                    >
                      <input
                        type="file"
                        name="file"
                        id="file"
                        accept="image/*"
                        className="py-3 px-3"
                        multiple
                      />
                      <h6 className="d-flex text-align-left px-3">
                        Shift-Click To Select Multiple Pictures To Upload
                      </h6>

                      <div className="d-flex flex-row py-2">
                        <h4 className="px-3">Title</h4>
                        <input type="text" id="title" name="title" size="75" />
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h4 className="px-3 py-3">Description</h4>
                        <textarea
                          type="text"
                          id="description"
                          name="description"
                          rows="3"
                          cols="67"
                          placeholder="Enter text here..."
                        ></textarea>
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h4 className="px-3">Price</h4>
                        <input
                          type="number"
                          id="price"
                          name="price"
                          placeholder="$"
                          min="0"
                          max="1000000"
                        />
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h5 className="px-3">Condition</h5>
                        <select id="status">
                          <option value="1">New</option>
                          <option value="2">Like New</option>
                          <option value="3">Very good</option>
                          <option value="4">Good</option>
                          <option value="5">Fair</option>
                        </select>
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h5 className="px-3">Category</h5>
                        <select id="category">
                          <option value="1">Tops</option>
                          <option value="2">Bottoms</option>
                          <option value="3">Outerwear</option>
                          <option value="4">Footwear</option>
                          <option value="5">Accessories</option>
                        </select>
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h5 className="px-3">Size</h5>
                        <select id="size">
                          <option value="1">S</option>
                          <option value="2">M</option>
                          <option value="3">L</option>
                          <option value="4">XL</option>
                        </select>
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h5 className="px-3">Brand</h5>
                        <select name="brand" id="brand">
                          <option value="Nike">Nike</option>
                          <option value="Supreme">Supreme</option>
                          <option value="Prada">Prada</option>
                          <option value="Gucci">Gucci</option>
                        </select>
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h5 className="px-3">Color</h5>
                        <input type="text" id="color" name="color" />
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h5 className="px-3">Quantity</h5>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          min="0"
                          max="1000000"
                        />
                      </div>

                      <div className="d-flex flex-row py-2">
                        <h5 className="px-3">Gender:</h5>
                        <h5 className="px-2">Male</h5>
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          checked
                          value="1"
                        />
                        <h5 className="px-2">Female</h5>
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          value="2"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary fw-bold form-control mb-2"
                        onClick={this.uploadItem}
                      >
                        Submit
                      </button>
                    </form>
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

export default SellNewItem;
