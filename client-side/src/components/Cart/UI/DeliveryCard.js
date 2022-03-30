import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../CheckoutForm.css";

const DeliveryContent = ({ active, count, onClick }) => {
  return (
    <div className="delivery-container">
      <div
        onClick={onClick}
        className={
          active ? "choose-delivery choosen-delivery" : "choose-delivery"
        }
      ></div>
    </div>
  );
};

const DeliveryCard = () => {
  const [chosen, setChosen] = useState();
  const test = [1, 2, 3];

  return (
    <div className="App">
      {test.map((t) => (
        <DeliveryContent
          key={t}
          count={t}
          active={t === chosen}
          onClick={() => setChosen(t)}
        />
      ))}
    </div>
  );
};

export default DeliveryCard;
