import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CheckoutForm from "./CheckoutForm";
import History from "../User/History";

const Checkout = (props) => {
  const [show, setShow] = useState(false);
  const showHistory = () => {
    setShow(true);
  };
  const hideHistory = () => {
    setShow(false);
  };
  return (
    <div>
      <Navbar onShow={showHistory}></Navbar>
      {show && <History onClose={hideHistory} />}
      <div className="wrapper">
        <CheckoutForm></CheckoutForm>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;
