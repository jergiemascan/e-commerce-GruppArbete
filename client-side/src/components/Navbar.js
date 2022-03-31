import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { Store } from "../Store";
import Profile from "./User/Profile";

const Navbar = (props) => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <nav className="nav">
      <div className="icon-profile">
        <Profile onShowHist={props.onShow} />
      </div>
      <Link to="/register">REGISTER</Link>
      <Link to="/login">SIGN IN</Link>
      <Link to="/">HOMEPAGE</Link>
      <Link to="/products">PRODUCTS</Link>
      <Link to="/checkout">CHECKOUT</Link>
      <Link to="/Cart">
        <IoCartOutline />
        {cart.cartItems.length > 0 && (
          <p className="red">{cart.cartItems.length}</p>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
