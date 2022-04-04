import React, { useState } from "react";

function Contact() {
  const [inputData, setInputData] = useState({
    email: "",
    firstname: "",
    lastname: "",
    street: "",
    zipcode: "",
    city: "",
  });
  return (
    <div className="reg-login">
      <div className="contact-container">
        <input
          type="text"
          value={localStorage.fullName}
          onChange={(event) =>
            setInputData({ ...inputData, firstname: event.target.value })
          }
        ></input>

        <input
          type="text"
          placeholder="Street"
          value={inputData.street}
          onChange={(event) =>
            setInputData({ ...inputData, street: event.target.value })
          }
        ></input>

        <input
          type="text"
          placeholder="City"
          value={inputData.city}
          onChange={(event) =>
            setInputData({ ...inputData, city: event.target.value })
          }
        ></input>
        <input
          type="number"
          placeholder="ZIP Code"
          value={inputData.zipcode}
          onChange={(event) =>
            setInputData({ ...inputData, zipcode: event.target.value })
          }
        ></input>
      </div>
    </div>
  );
}

export default Contact;
