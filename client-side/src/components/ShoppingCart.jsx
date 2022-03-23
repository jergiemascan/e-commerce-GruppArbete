import React from "react";
import Navbar from "./Navbar";

const ShoppingCart = () => {
  return (
    <section className="shopping">
      <Navbar />
      <h2>Your bag</h2>
      <div>Your items here</div>
      <button>Continue shopping</button>
      <button>Checkout</button>
    </section>
  );
};

export default ShoppingCart;
