import React, { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Delivery() {
  return (
    <div className="delivery-container">
      <div className="choose-delivery">
        <h1>Pickup Location</h1>
        <GoLocation color="blue" fontSize="4em"></GoLocation>
        <h1>FREE</h1>
      </div>
      <div className="choose-delivery">
        <h1>Standard 3 - 4 Days</h1>
        <BsTruck color="blue" fontSize="4em"></BsTruck>
        <h1>4.99 Eur</h1>
      </div>
      <div className="choose-delivery">
        <h1>Express 1 - 2 Days</h1>
        <FaShippingFast color="blue" fontSize="4em"></FaShippingFast>
        <h1>8.99 Eur</h1>
      </div>
    </div>
  );
}

export default Delivery;
