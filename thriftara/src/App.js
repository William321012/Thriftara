import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Brands from "./pages/Brands";
import FAQ from "./pages/FAQ";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Sell from "./pages/Sell";
import ForgotPassword from "./pages/ForgotPassword";
// import data from './products/Data'
import MProducts from './products/MensProducts'
import WProducts from "./products/WomensProducts";
import { useState } from "react";

function App() {

  //mens products data
  // const { products } = data;
  const { mproducts } = MProducts;
  //womens products data
  const { wproducts } = WProducts;

  //shopping cart states
  const [cartItems, setCartItems] = useState([]);

  //event handlers
  const addToCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      // if the product already exists in cartItems, increase the quantity of item according to the 
      // current product id. x.id is the id of the cart item(its product id) and product.id is the 
      // id of the product
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      ));
    } else {
      //if product is new then set quantity to 1
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  //decrease qty, remove from cart
  const removeFromCart = (product) => {
    //search for cart item with specific product id
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      //if product does exist in cart remove from cart otherwise return true
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      //quantity is more than 1 i.e 2+ , decrease 1 from quantity
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      ));
    }
  }

  return (
    <div className="App">
      <Router>
        <Navbar cartItemsCount={cartItems.length} />
        <Routes>
          {/* <Route path="/" element={<Home products={products} addToCart={addToCart} />} /> */}
          <Route path="/" element={<Home mproducts={mproducts} wproducts={wproducts}
            addToCart={addToCart} />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart}
            removeFromCart={removeFromCart} />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Contacts" element={<Contacts />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Signup" element={<Signup />} />
          <Route path="/pages/Sell" element={<Sell />} />
          <Route path="/pages/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
