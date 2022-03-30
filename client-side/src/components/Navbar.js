import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { Store } from "../Store";
import Profile from "./User/Profile";
import Login from "./Login";
import Register from "./Register";

const Navbar = (props) => {
  const { state } = useContext(Store);
  const { cart } = state;

  // modal
  const [showRegModal, setShowRegModal] = useState(false);
  const showModalRegHandler = () => {
    setShowRegModal(true);
  };
  const hideModalRegHandler = () => {
    setShowRegModal(false);
  };

  const [showLoginModal, setShowLoginModal] = useState(false);
  const showModalLoginHandler = () => {
    setShowLoginModal(true);
  };
  const hideModalHandler = () => {
    setShowLoginModal(false);
  };

  return (
    <nav className="nav">
      {showRegModal && <Register onCloseReg={hideModalRegHandler} />}
      {showLoginModal && <Login onCloseLogin={hideModalHandler} />}
      <div className="icon-profile">
        <Profile onShowHist={props.onShow} />
      </div>
      <div onClick={showModalRegHandler} className="register">
        REGISTER
      </div>
      <div onClick={showModalLoginHandler} className="sign-in">
        SIGN IN
      </div>
      <Link to="/">HOMEPAGE</Link>
      <Link to="/products">PRODUCTS</Link>
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
