import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const redirect = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <section className="height">
      <Navbar />
      <div className="shopping">
        <h2>Your bag:</h2>
        {cartItems.map((product) => (
          <div key={product._id}>
            <div>{product.name}</div>
            <img src={`../assets/${product.photo}`} alt="Supplement" />
            <div>{product.price}</div>
          </div>
        ))}

        <button onClick={() => redirect("/checkout")}>Checkout</button>
      </div>

      <div className="asd">
        <Footer />
      </div>
    </section>
  );
};

export default ShoppingCart;
