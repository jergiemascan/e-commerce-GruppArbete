import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./components/Cart/OrderConfirmation";
import Payment from "./components/Cart/Payment";
import "./index.css";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/:id" element={<Payment />} />
        <Route path="/orderConfirmation" element={<OrderConfirmation />} />
        <Route path="/Cart" element={<ShoppingCart />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
