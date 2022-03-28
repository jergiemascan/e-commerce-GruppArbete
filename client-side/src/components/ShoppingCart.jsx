import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ShoppingCart.css";

const ShoppingCart = (props) => {
  return (
    <section className="height">
      <Navbar />
      <div className="shopping">
        <h2>Your bag</h2>
        <div>Your items here</div>

        <button>Checkout</button>
      </div>
      <div className="asd">
        <Footer />
      </div>
    </section>
  );
};

export default ShoppingCart;
