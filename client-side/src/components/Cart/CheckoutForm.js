import React, { useState } from "react";
import CheckoutOverview from "./CheckoutOverview";
import Contact from "./Contact";
import Delivery from "./Delivery";
import Payment from "./Payment";
import "./CheckoutForm.css";

function CheckoutForm() {
  const [step, setStep] = useState(0);
  const [inputData, setInputData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    street: "",
    zipcode: "",
    city: "",
  });

  const CheckoutForms = [
    "Overview",
    "Contact",
    "Choose Delivery Method",
    "Payment Details",
  ];

  const DisplayCurrentStep = () => {
    if (step === 0) {
      return <CheckoutOverview></CheckoutOverview>;
    } else if (step === 1) {
      return (
        <Contact inputData={inputData} setInputData={setInputData}></Contact>
      );
    } else if (step === 2) {
      return <Delivery></Delivery>;
    } else {
      return <Payment></Payment>;
    }
  };
  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width:
              step === 0
                ? "25%"
                : step === 1
                ? "50%"
                : step === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{CheckoutForms[step]}</h1>
        </div>
        <div className="body">{DisplayCurrentStep()}</div>
        <div className="checkout-footer">
          <button
            disabled={step === 0}
            onClick={() => {
              setStep((currStep) => currStep - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={step === CheckoutForms.length - 1}
            onClick={() => {
              setStep((currStep) => currStep + 1);
            }}
          >
            {step === 0
              ? "Confirm Items"
              : step === 1
              ? "Delivery"
              : step === 2
              ? "Payment"
              : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
