import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
<<<<<<< HEAD
import Checkout from "./components/Cart/Checkout";
=======
>>>>>>> collect-order
import ShoppingCart from "./components/ShoppingCart";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/User/Profile";
import Checkout from "./components/Cart/Checkout";
import Payment from "./components/Cart/Payment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
=======
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
>>>>>>> collect-order
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/Cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:id" element={<Payment />} />
        <Route path="/*" element={<ErrorPage />} />
        {/* <Route path="/user" element={""}> */}
        <Route path="/profile" element={<Profile />} />

        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
