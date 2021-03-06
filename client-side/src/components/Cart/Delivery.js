import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Delivery() {
  const [delivery, setDelivery] = useState([]);
  const iconArray = [
    <GoLocation color="blue" fontSize="2.5em" />,
    <BsTruck color="blue" fontSize="2.5em" />,
    <FaShippingFast color="blue" fontSize="2.5em" />,
  ];

  useEffect(() => {
    async function fetchDeliveryData() {
      try {
        const response = await fetch("http://localhost:3001/deliveries");
        let deliveries = await response.json();
        setDelivery(deliveries);
      } catch (err) {
        console.log(err);
      }
    }
    fetchDeliveryData();
  }, []);

  const redirect = useNavigate();

  return (
    <div className="delivery-container">
      {delivery.map((delivery, i) => (
        <div
          onClick={() => {
            redirect(`/checkout/${delivery._id}`);
          }}
          key={delivery._id}
          className="choose-delivery"
        >
          <h1>{delivery.name}</h1>
          <div>{iconArray[i]}</div>
          <h1>{delivery.price}&#36;</h1>
        </div>
      ))}
    </div>
  );
}

export default Delivery;
