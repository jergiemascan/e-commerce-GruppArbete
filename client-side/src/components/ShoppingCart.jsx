import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { useContext } from "react";
import { Store } from "../Store";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  console.log(cartItems);

  return (
    <section className="height">
      <Navbar />
      <div className="shopping">
        <h2>Your bag</h2>
        <div>Your items here</div>
        {cartItems.map((product) => (
          <div>
            {console.log(product)}
            <div>{product.name}</div>
            <img src={`../assets/${product.photo}`} alt="Supplement" />
            <div>{product.price}</div>
          </div>
        ))}

        <button>Checkout</button>
      </div>

      <div className="asd">
        <Footer />
      </div>
    </section>
  );
};

export default ShoppingCart;
