import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import DropdownMonth from "./UI/DropdownMonth";
import DropdownYear from "./UI/DropdownYear";
import { useContext } from "react";
import { Store } from "../../Store";
import { FaCcVisa, FaProductHunt } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import "./CheckoutForm.css";
import axios from "axios";

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
  console.log(delivery);

  useEffect(() => {
    fetchDelivery();
  }, []);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  console.log(cartItems);
  function cartTotalSum() {
    const e = cartItems.reduce((e, { price }) => e + price, 0);
    return e;
  }

  const totalAmount = cartTotalSum();

  // Jijis ändringar ***
  const orderSubmitHandler = async (e) => {
    e.preventDefault();
    const userToken = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:3001/user/order",
        {
          productname: cartItems.name,
          price: cartItems.price,
          deliveryCost: delivery.name,
          totalAmount: totalAmount + delivery.name,
        },
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (res?.data?.status === "success") {
        console.log("Order submitted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // slutar här ***
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
          {/*jiji ändrar till form */}{" "}
          <form className="form-container" onSubmit={orderSubmitHandler}>
            <div className="payment-container">
              <div className="header">
                <h1>Checkout</h1>
              </div>
              <div className="body">
                <div className="checkout-overview-container-payment">
                  <ul>
                    <div className="overview-flex">
                      {/* *****************jijis ändringar */}

                      <div className="shopping-list">
                        {cartItems.map((product) => (
                          <div className="overview-flex">
                            <div className="checkout-items" key={product._id}>
                              <li>
                                <div value={product.name} name="productname">
                                  {product.name}
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
                      </div>
                      {/******************** * jijis ändringar upp hit */}

                      <div className="checkout-items">
                        <li>Order</li>
                        <li value={delivery.name} name="productname">
                          Delivery Method: {delivery.name}
                        </li>
                        <li>Order Total:</li>
                      </div>
                      <div className="checkout-amounts">
                        <li>
                          {" "}
                          {` `}
                          {totalAmount} {` `}&#36;
                        </li>
                        <li value={delivery.price} name="deliveryCost">
                          {" "}
                          {delivery.price}&#36;
                        </li>
                        <li value={totalAmount} name="totalAmount">
                          {totalAmount + delivery.price} &#36;
                        </li>
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
              <button className="btnPlaceOrder" type="submit">
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
