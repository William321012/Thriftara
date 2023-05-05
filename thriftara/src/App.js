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
import Purchases from "./pages/Purchases";
import Sell from "./pages/Sell";
import ForgotPassword from "./pages/ForgotPassword";
import Search from "./pages/Search";
import ProductDetails from "./products/ProductDetails";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  //all products
  const loadProducts = async () => {
    const res = await axios.get("http://localhost:8080/products/getAllProduct");
    setProducts(res.data.data);
    console.log(res.data.data);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Contacts" element={<Contacts />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Signup" element={<Signup />} />
          <Route path="/pages/Purchases" element={<Purchases />} />
          <Route path="/pages/Sell" element={<Sell />} />
          <Route path="/pages/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/pages/Search" element={<Search />} />
          <Route
            path="/product/:title"
            element={<ProductDetails products={products} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
