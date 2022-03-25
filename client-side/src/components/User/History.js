import React from "react";
import CtaWrapper from "./CtaWrapper";
import { IoMdClose } from "react-icons/io";

const History = (props) => {
  return (
    <CtaWrapper onClick={props.onClick}>
      <button className="closeModal">
        <IoMdClose onClick={props.onClose} />
      </button>
      <div className="history">
        <h2 className="orderH2">Order History</h2>
        <p>Order Date</p>
        <ul>
          <li>Product name</li>
          <li>Product name</li>
          <li>Product name</li>
          <li>Product name</li>
        </ul>
      </div>
    </CtaWrapper>
  );
};

export default History;
