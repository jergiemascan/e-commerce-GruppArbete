import React from "react";

function Contact({ inputData, setInputData }) {
  return (
    <div className="contact-container">
      <input
        type="text"
        placeholder="Email"
        value={inputData.email}
        onChange={(event) =>
          setInputData({ ...inputData, email: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Firstname"
        value={inputData.firstname}
        onChange={(event) =>
          setInputData({ ...inputData, firstname: event.target.value })
        }
      ></input>
      <input
        type="text"
        placeholder="Lastname"
        value={inputData.lastname}
        onChange={(event) =>
          setInputData({ ...inputData, lastname: event.target.value })
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
        type="number"
        placeholder="ZIP Code"
        value={inputData.zipcode}
        onChange={(event) =>
          setInputData({ ...inputData, zipcode: event.target.value })
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
    </div>
  );
}

export default Contact;
