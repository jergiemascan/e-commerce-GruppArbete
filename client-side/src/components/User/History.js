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
        const userToken = localStorage.getItem("token");
        const response = await Axios.get(
          `http://localhost:3001/user/find/${userToken}`
        );

        console.log(response.data);
        setState(response.data.data);
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
      <div>
        {state.map((article) => (
          <div className="history" key={article._id}>
            <h2 className="order-date">
              Order Date: {moment(article.createdAt).format("YYYY-MM-DD")}
            </h2>
            <ul className="shopping-history-list">
              {article.products
                ? article.products.map((e) => (
                    <li key={e._id}>
                      <h2 className="h4Articles">Articles</h2>
                      <h4 className="h4Articles">
                        Product name: {e.productId}
                      </h4>
                      <h4 className="h4Articles">Quantity: {e.quantity}</h4>
                    </li>
                  ))
                : ""}
              <h4 className="h4Articles">
                Unit Price: <span className="articles">{article.price} kr</span>
              </h4>
              <h2 className="h4Articles">
                Total Amount:
                <span className="articles">{article.totalAmount} kr</span>
              </h2>
            </ul>
          </div>
        ))}
      </div>
    </CtaWrapper>
  );
};

export default History;
