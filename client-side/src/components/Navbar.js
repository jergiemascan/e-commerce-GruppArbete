import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { Store } from "../Store";

const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <nav className="nav">
      <Link to="/register">REGISTER</Link>
      <Link to="/login">SIGN IN</Link>
      <Link to="/">HOMEPAGE</Link>
      <Link to="/products">PRODUCTS</Link>
      <Link to="/cart">
        <IoCartOutline />
        {cart.cartItems.length > 0 && (
          <p className="red">{cart.cartItems.length}</p>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
