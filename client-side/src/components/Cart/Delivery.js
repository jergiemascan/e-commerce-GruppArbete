import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShippingFast } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { GoLocation } from "react-icons/go";

function Delivery() {
  const [delivery, setDelivery] = useState([]);

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
      {delivery.map((delivery) => (
        <div
          onClick={() => {
            redirect(`/checkout/${delivery._id}`);
          }}
          key={delivery.id}
          className="choose-delivery"
        >
          <h1>{delivery.name}</h1>
          {delivery.description}
          <h1>{delivery.price}&#36;</h1>
        </div>
      ))}
    </div>
  );
}

export default Delivery;

{
  // const DeliveryMethodObjects = [
  //   {
  //     id: "62449cfdf8272d09e904c139",
  //     name: "Pickup Location",
  //     description: <GoLocation color="blue" fontSize="4em"></GoLocation>,
  //     price: 0,
  //   },
  //   {
  //     id: "62449e55f8272d09e904c13a",
  //     name: "Standard 3 - 4 Days",
  //     description: <BsTruck color="blue" fontSize="4em"></BsTruck>,
  //     price: 2.99,
  //   },
  //   {
  //     id: "62449ef1f8272d09e904c13b",
  //     name: "Express 1 - 2 Days",
  //     description: (
  //       <FaShippingFast color="blue" fontSize="4em"></FaShippingFast>
  //     ),
  //     price: 5.99,
  //   },
  // ];
  /* <div className="delivery-container">
<div
  onClick={handleClick}
  className={"choose-delivery " + (active ? "choosen-delivery" : "")}
>
  <h1>Pickup Location</h1>
  <GoLocation color="blue" fontSize="4em"></GoLocation>
  <h1>FREE</h1>
</div>

<div
  onClick={handleClick}
  className={"choose-delivery " + (active ? "choosen-delivery" : "")}
>
  <h1>Standard 3 - 4 Days</h1>
  <BsTruck color="blue" fontSize="4em"></BsTruck>
  <h1>4.99 &#36;</h1>
</div>

<div
  onClick={handleClick}
  className={"choose-delivery " + (active ? "choosen-delivery" : "")}
>
  <h1>Express 1 - 2 Days</h1>
  <FaShippingFast color="blue" fontSize="4em"></FaShippingFast>
  <h1>8.99 &#36;</h1>
</div>
</div> */
}
