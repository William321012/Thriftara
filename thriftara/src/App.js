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
import Checkout from "./pages/Checkout";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
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
            element={<ProductDetails />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
