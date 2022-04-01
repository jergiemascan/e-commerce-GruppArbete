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

  const updateCartHandler = async (product, quantity) => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: { ...product, quantity },
    });
  };

  const removeItemHandler = (item) => {
    ctxDispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  return (
    <section className="height">
      <Navbar />
      <div className="shopping">
        <h2>Your bag:</h2>
        {cartItems.map((product) => (
          <div className="cart-list" key={product._id}>
            <h3>{product.name}</h3>
            <img
              className="small"
              src={`../assets/${product.photo}`}
              alt="Supplement"
            />
            <div>{product.price}&#36;</div>
            <button
              onClick={() => updateCartHandler(product, product.quantity - 1)}
              disabled={product.quantity === 1}
            >
              -
            </button>
            <span className="quantity">{product.quantity}</span>
            <button
              onClick={() => updateCartHandler(product, product.quantity + 1)}
            >
              +
            </button>
            <button
              className="right"
              onClick={() => removeItemHandler(product)}
            >
              Remove from cart
            </button>
          </div>
        ))}
        <div className="checkout-cart">
          <h3>
            Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)} items) : $
            {cartItems.reduce((a, c) => a + c.price * c.quantity, 0)}
          </h3>

          <button onClick={() => redirect("/checkout")}>Checkout</button>
        </div>
      </div>

      <div className="asd">
        <Footer />
      </div>
    </section>
  );
};

export default ShoppingCart;
