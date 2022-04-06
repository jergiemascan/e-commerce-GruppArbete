import React, { useEffect, useState } from "react";
import CtaWrapper from "./CtaWrapper";
import { IoMdClose } from "react-icons/io";
import Axios from "axios";
import * as moment from "moment";

const History = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function getHistory() {
      try {
        const userId = localStorage.getItem("userId");
        const response = await Axios.get(
          `http://localhost:3001/user/find/${userId}`
        );
        setState(response.data.data);
        if (response.data.data === null) {
          setState(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getHistory();
  }, []);

  return (
    <CtaWrapper onClick={props.onClick}>
      <div className="closeModal">
        <IoMdClose onClick={props.onClose} />
      </div>
      <h2 className="orderH2">Order History</h2>
      <div className="history-scroll">
        {state.length === 0 && (
          <h2 className="order-found">{"No order found"}</h2>
        )}
        {state.map((article) => (
          <div className="history" key={article._id}>
            <h2 className="order-date">
              Order Date: {moment(article.createdAt).format("YYYY-MM-DD")}
            </h2>

            <ul className="shopping-history-list">
              <h2 className="h4Articles">Articles</h2>
              {article.products
                ? article.products.map((e) => (
                    <li key={e._id}>
                      <h4 className="h4Articles">
                        Product name:{" "}
                        <span className="span-history"> {e.name}</span>
                      </h4>

                      <h4 className="h4Articles">Quantity: {e.quantity}</h4>
                      <h4 className="h4Articles">
                        Unit Price:{" "}
                        <span className="articles">{e.price} &#36;</span>
                      </h4>
                    </li>
                  ))
                : ""}
              <div className="article-list">
                <h4>Delivery method:</h4>
                <span className="span-history">
                  {article.deliveryCost.name}
                </span>
              </div>
              <div className="article-list">
                <h4> Price:</h4>
                <span className="shipping-fee">
                  {article.deliveryCost.price} &#36;
                </span>
              </div>
              <h2 className="h4Articles">
                Total Amount:
                <span className="articles">{article.totalAmount}&#36;</span>
              </h2>
            </ul>
          </div>
        ))}
      </div>
    </CtaWrapper>
  );
};

export default History;
