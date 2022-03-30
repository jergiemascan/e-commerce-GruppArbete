import React, { useState } from "react";
import DropdownMonth from "./UI/DropdownMonth";
import DropdownYear from "./UI/DropdownYear";
import { FaCcVisa } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";

function Payment() {
  const [selectedMonth, setSelectedMonth] = useState("Exp Month");
  const [selectedYear, setSelectedYear] = useState("Exp Year");
  return (
    <div className="payment-container">
      <div className="checkout-overview-container-payment">
        <ul>
          <div className="overview-flex">
            <div className="checkout-items">
              <li>Order</li>
              <li>Standard Delivery</li>
              <li>Order Total:</li>
            </div>
            <div className="checkout-amounts">
              <li> 99.98 Eur</li>
              <li>4.99 Eur</li>
              <li>104.97 Eur</li>
            </div>
          </div>
        </ul>
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
  );
}

export default Payment;
