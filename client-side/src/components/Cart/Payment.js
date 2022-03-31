import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DropdownMonth from "./UI/DropdownMonth";
import DropdownYear from "./UI/DropdownYear";
import { useContext } from "react";
import { Store } from "../../Store";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import "./CheckoutForm.css";

function Payment() {
  const [selectedMonth, setSelectedMonth] = useState("Exp Month");
  const [selectedYear, setSelectedYear] = useState("Exp Year");

  let { id } = useParams();
  const [delivery, setDelivery] = useState([]);
  const fetchDelivery = async () => {
    try {
      const response = await fetch(`http://localhost:3001/deliveries/${id}`);
      let delivery = await response.json();
      setDelivery(delivery);
      console.log(delivery);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDelivery();
  }, []);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  function cartTotalSum() {
    const e = cartItems.reduce((e, { price }) => e + price, 0);
    return e;
  }

  const totalAmount = cartTotalSum();

  return (
    <div>
      <Navbar></Navbar>
      <div className="wrapper">
        <div className="form">
          <div className="progressbar">
            <div
              style={{
                width: "100%",
              }}
            ></div>
          </div>
          <div className="form-container">
            <div className="payment-container">
              <div className="header">
                <h1>Checkout</h1>
              </div>
              <div className="body">
                <div className="checkout-overview-container-payment">
                  <ul>
                    <div className="overview-flex">
                      <div className="checkout-items">
                        <li>Order</li>
                        <li>Delivery Method: {delivery.name}</li>
                        <li>Order Total:</li>
                      </div>
                      <div className="checkout-amounts">
                        <li>
                          {" "}
                          {` `}
                          {totalAmount} {` `}&#36;
                        </li>
                        <li> {delivery.price}&#36;</li>
                        <li>{totalAmount + delivery.price} &#36;</li>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>

              <div className="card-details">
                <input type="text" placeholder="Card Number"></input>
                <input type="text" placeholder="Card Name"></input>
              </div>

              <div className="dropdowns-cvv">
                <DropdownMonth
                  selectedMonth={selectedMonth}
                  setSelectedMonth={setSelectedMonth}
                ></DropdownMonth>
                <DropdownYear
                  selectedYear={selectedYear}
                  setSelectedYear={setSelectedYear}
                ></DropdownYear>
                <input type="text" placeholder="CVV"></input>
              </div>
              <div className="credit-cards">
                <div className="mastercard">
                  <FaCcMastercard color="red" fontSize="3.5em"></FaCcMastercard>
                </div>
                <div className="visa-card">
                  <FaCcVisa color="darkblue" fontSize="3.5em"></FaCcVisa>
                </div>
                <div>
                  <FaCcAmex color="blue" fontSize="3.5em"></FaCcAmex>
                </div>
              </div>
            </div>
            <div className="checkout-footer">
              <button className="btnPlaceOrder">Place Order</button>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Payment;
