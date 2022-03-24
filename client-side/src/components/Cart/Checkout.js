import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CheckoutForm from "./CheckoutForm";

const Checkout = (props) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="wrapper">
        <CheckoutForm></CheckoutForm>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;
