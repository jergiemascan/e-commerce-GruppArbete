import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import Profile from "./User/Profile";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div className="icon-profile">
        <Profile onShowHist={props.onShow} />
      </div>
      <Link to="/register">REGISTER</Link>
      <Link to="/login">SIGN IN</Link>
      <Link to="/Cart">
        <IoCartOutline />
      </Link>
    </nav>
  );
};

export default Navbar;
