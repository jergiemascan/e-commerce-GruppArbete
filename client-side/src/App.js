import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Checkout from "./components/Cart/Checkout";
import ShoppingCart from "./components/ShoppingCart";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Routes>
        <Route path="/Cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
