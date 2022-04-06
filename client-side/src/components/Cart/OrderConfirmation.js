import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { GiConfirmed } from "react-icons/gi";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { Store } from "../../Store";
import "./OrderConfirmation.css";
import History from "../User/History";

function OrderConfirmation() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const redirect = useNavigate();
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
      <div className="orderConfirmationResponse">
        {show && <History onClose={hideHistory} />}
        <div className="confirmation-container">
          <div>
            <GiConfirmed color="blue" fontSize="7em"></GiConfirmed>
          </div>
          <div>
            <h1>Thank You For Your Purchase! </h1>
          </div>
          <div>
            <h2>Your Order Has Been Sent.</h2>
          </div>
        </div>

        <div className="confirmation-table-container">
          <div className="yourOrder"></div>
          <div className="confirmationTable-and-button">
            <div className="confirmation-form">
              <div className="overview-checkout-flex">
                <div className="checkout-amounts">
                  <li>
                    <div>
                      <p className="orderHistoryName">
                        You can find your order in the orderhistory under your
                        profile.
                      </p>
                    </div>
                  </li>
                </div>
              </div>
            </div>
            <div className="backToHomeBtn">
              <div>
                <button className="backToHomeBtn">
                  <BsArrowLeftCircleFill
                    onClick={() => redirect("/")}
                    color="blue"
                    fontSize="4em"
                  ></BsArrowLeftCircleFill>
                </button>
              </div>
              <div>
                <p>HOMEPAGE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default OrderConfirmation;
