import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Profile from "./User/Profile";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <p className="icon-profile">
        <Profile onShowHist={props.onShow} />
      </p>
      <Link to="/register">REGISTER</Link>
      <Link to="/login">SIGN IN</Link>
      <Link to="/">
        <IoCartOutline />
      </Link>
    </nav>
  );
};

export default Navbar;
