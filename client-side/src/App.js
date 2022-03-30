import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Checkout from "./components/Cart/Checkout";
import ShoppingCart from "./components/ShoppingCart";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/User/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/Cart" element={<ShoppingCart />} />
        <Route path="/*" element={<ErrorPage />} />
        {/* <Route path="/user" element={""}> */}
        <Route path="/profile" element={<Profile />} />

        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
