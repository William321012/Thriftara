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
import Search from "./pages/Search";
import data from './products/Data';
import ProductDetails from "./products/ProductDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  //products data
  const { mproducts, wproducts } = data;
  const [products, setProducts] = useState([])
  const [cartDisplay, setCartDisplay] = useState([])

  useEffect(() => {
    loadProducts();
    loadCart();
  }, [])

  //all products
  const loadProducts = async() => {
    const res = await axios.get("http://localhost:8080/products/getAllProduct")
    setProducts(res.data.data)
    console.log(res.data.data)
    // setPost(res.data.data)
  }

  //all items in shopping cart
  const loadCart = async() => {
    const res = await axios.get("http://localhost:8080/carts/display")
    console.log(res.data.data)
    setCartDisplay(res.data.data)
  }

  //shopping cart states
  const [cartItems, setCartItems] = useState([]);

  //event handlers
  const addToCart = (product) => {
    const exist = cartItems.find((item) => item.id === product.id)
    if (exist) {
      // if the product already exists in cartItems, increase the quantity of item according to the 
      // current product id
      setCartItems(cartItems.map(item => item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      ));
    } else {
      //if product is new then set quantity to 1
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }
  //decrease qty, remove from cart
  const removeFromCart = (product) => {
    //search for cart item with specific product id
    const exist = cartItems.find((item) => item.id === product.id)
    if (exist.qty === 1) {
      //if product does exist in cart remove from cart otherwise return true
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      //quantity is more than 1 i.e 2+ , decrease 1 from quantity
      setCartItems(cartItems.map(item => item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      ));
    }
  }
  //remove item from cart
  const removeItemFromCart = (product) => {
    //search for cart item with specific product id
    const exist = cartItems.find((item) => item.id === product.id)
    if (exist) {
      //if product does exist in cart remove from cart otherwise return true
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  }
  //total number in cart, minimum amount is 0
  // const itemscount = cartItems.reduce((amount, current) => amount + current.qty, 0)
  const itemscount = cartDisplay.reduce((amount, current) => amount + current.num, 0)

  return (
    <div className="App">
      <Router>
        <Navbar cartItemsCount={itemscount} />
        <Routes>
          <Route path="/" element={<Home mproducts={mproducts} wproducts={wproducts} products={products}
            addToCart={addToCart}  />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} addToCart={addToCart}
            removeFromCart={removeFromCart} removeItemFromCart={removeItemFromCart} />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Contacts" element={<Contacts />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Signup" element={<Signup />} />
          <Route path="/pages/Sell" element={<Sell />} />
          <Route path="/pages/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/pages/Search" element={<Search />} />
          <Route path="/product/:title" element={<ProductDetails mproducts={mproducts} wproducts={wproducts}
            products={products} addToCart={addToCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
