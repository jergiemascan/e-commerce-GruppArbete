import React, { useState } from "react";
import CheckoutOverview from "./CheckoutOverview";
import Delivery from "./Delivery";
import Contact from "./Contact";
import Login from "../Login";
import Register from "../Register";

import "./CheckoutForm.css";

function CheckoutForm() {
  const [step, setStep] = useState(0);

  const CheckoutForms = ["Overview", "Contact", "Choose Delivery Method"];

  const DisplayCurrentStep = () => {
    const [showRegModal, setShowRegModal] = useState(false);
    const showModalRegHandler = () => {
      setShowRegModal(true);
    };
    const hideModalRegHandler = () => {
      setShowRegModal(false);
    };

    const [showLoginModal, setShowLoginModal] = useState(false);
    const showModalLoginHandler = () => {
      setShowLoginModal(true);
    };
    const hideModalHandler = () => {
      setShowLoginModal(false);
    };

    if (step === 0) {
      return <CheckoutOverview></CheckoutOverview>;
    } else if (step === 1 && !localStorage.token) {
      return (
        <div className="reg-login">
          {showRegModal && (
            <Register
              onCloseReg={hideModalRegHandler}
              // onClick={hideModalRegHandler}
            />
          )}
          {showLoginModal && <Login onCloseLogin={hideModalHandler} />}
          <button onClick={showModalRegHandler} className="btn-reg">
            REGISTER
          </button>
          <button onClick={showModalLoginHandler} className="btn-reg">
            SIGN IN
          </button>
        </div>
      );
    } else if (step === 1) {
      return (
        <Contact></Contact>
        // <div className="reg-login">
        //   <div className="contact-container">
        //     <input
        //       type="text"
        //       value={localStorage.fullName}
        //       onChange={(event) =>
        //         setInputData({ ...inputData, firstname: event.target.value })
        //       }
        //     ></input>

        //     <input
        //       type="text"
        //       placeholder="Street"
        //       value={inputData.street}
        //       onChange={(event) =>
        //         setInputData({ ...inputData, street: event.target.value })
        //       }
        //     ></input>

        //     <input
        //       type="text"
        //       placeholder="City"
        //       value={inputData.city}
        //       onChange={(event) =>
        //         setInputData({ ...inputData, city: event.target.value })
        //       }
        //     ></input>
        //     <input
        //       type="number"
        //       placeholder="ZIP Code"
        //       value={inputData.zipcode}
        //       onChange={(event) =>
        //         setInputData({ ...inputData, zipcode: event.target.value })
        //       }
        //     ></input>
        //   </div>
        // </div>
      );
    } else if (step === 2) {
      return <Delivery></Delivery>;
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
            hidden={step === 0}
            onClick={() => {
              setStep((currStep) => currStep - 1);
            }}
          >
            Prev
          </button>
          <button
            // disabled={step === 1 && !localStorage.token}
            hidden={
              step === CheckoutForms.length - 1 ||
              (step === 1 && !localStorage.token)
            }
            onClick={() => {
              setStep((currStep) => currStep + 1);
            }}
          >
            {step === 0 ? "Confirm Items" : step === 1 ? "Delivery" : ""}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutForm;
