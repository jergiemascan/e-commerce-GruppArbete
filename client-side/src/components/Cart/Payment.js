import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DropdownMonth from "./UI/DropdownMonth";
import DropdownYear from "./UI/DropdownYear";
import { useContext } from "react";
import { Store } from "../../Store";
import { useNavigate } from "react-router-dom";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import "./CheckoutForm.css";
import axios from "axios";

function Payment() {
  const redirect = useNavigate();

  const [selectedMonth, setSelectedMonth] = useState("Exp Month");
  const [selectedYear, setSelectedYear] = useState("Exp Year");

  let { id } = useParams();
  const [delivery, setDelivery] = useState([]);
  const fetchDelivery = async () => {
    try {
      const response = await fetch(`http://localhost:3001/deliveries/${id}`);
      let delivery = await response.json();
      setDelivery(delivery);
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
    {
      const a = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
      return a;
    }
  }

  const totalAmount = cartTotalSum() + delivery.price;

  const orderSubmitHandler = async (e) => {
    e.preventDefault();
    // const userToken = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    console.log(userId);
    try {
      console.log(delivery);

      const res = await axios.post("http://localhost:3001/user/order", {
        // cartItems innehåller delivery och totalAmount :) (Se linje 54 och 55)
        userId: userId,
        products: cartItems,
        deliveryCost: delivery,
        totalAmount: totalAmount,
      });
      if (res?.data?.status === "success") {
        console.log("Order submitted");
        ctxDispatch({
          type: "CLEAR_CART",
        });
        redirect("/orderConfirmation");
      }
    } catch (error) {
      console.log(error);
    }
  };

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

          <form className="form-container" onSubmit={orderSubmitHandler}>
            <div className="payment-container">
              <div className="header">
                <h1>Checkout</h1>
              </div>
              <div className="body">
                <div className="checkout-overview-container-payment">
                  <ul>
                    <div className="overview-flex">
                      {cartItems.map((product) => (
                        <div className="shopping-list">
                          <div className="checkout-items">
                            <li>
                              <div value={product.name} name="productname">
                                {product.quantity}x {product.name}
                              </div>
                            </li>
                          </div>

                          <div className="checkout-amounts">
                            <li>
                              <div value={product.price} name="price">
                                {product.price}&#36;
                              </div>
                            </li>
                          </div>
                        </div>
                      ))}
                      <div className="shopping-list">
                        <div className="checkout-items">
                          <li value={delivery.name} name="productname">
                            Delivery: {delivery.name}
                          </li>
                          <div className="payment-order-total">
                            <li>Order Total:</li>
                          </div>
                        </div>
                        <div className="checkout-amounts">
                          <li value={delivery.price} name="deliveryCost">
                            {" "}
                            {delivery.price}&#36;
                          </li>
                          <div className="payment-order-total">
                            <li value={totalAmount} name="totalAmount">
                              {totalAmount}
                              &#36;
                            </li>
                          </div>
                        </div>
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
              <button
                className="btnPlaceOrder"
                type="submit"
                // onClick={() => redirect("/orderConfirmation")}
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Payment;
