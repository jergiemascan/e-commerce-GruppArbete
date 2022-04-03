import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { GiConfirmed } from "react-icons/gi";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { Store } from "../../Store";
import "./OrderConfirmation.css";

function OrderConfirmation() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const redirect = useNavigate();

  return (
    <div>
      <Navbar></Navbar>
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
        <div className="yourOrder">
          <h3>Your Order:</h3>
        </div>
        <div className="confirmationTable-and-button">
          <div className="confirmation-form">
            {cartItems.map((product) => (
              <div className="overview-checkout-flex">
                <div className="checkout-amounts">
                  <li>
                    <div>
                      <h2>{product.quantity}x</h2>
                    </div>
                  </li>
                </div>

                <div className="checkout-items" key={product._id}>
                  <li>
                    <div>
                      <h2>{product.name}</h2>
                    </div>
                  </li>
                </div>
              </div>
            ))}
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
      <Footer></Footer>
    </div>
  );
}

export default OrderConfirmation;