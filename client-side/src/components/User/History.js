import React from "react";
import CtaWrapper from "./CtaWrapper";
import { IoMdClose } from "react-icons/io";

// import Axios from "axios";

const History = (props) => {
  // try{
  //   const response= await Axios.get('/user/checkout)

  //     if(response.status==200){
  //       this.orders = response.data
  //       this.len = Object.keys(this.orders).length
  //       let i
  //       for(i=0;i<this.len;i++){
  //           this.totalCost[i] = this.orders[i].totalPrice
  //           this.orderdate.push((this.orders[i].createdDate).substring(0,10))
  //           this.orderList.push({
  //             pid:this.orders[i].id
  //           })
  //       }
  //     }

  // }catch(error){
  //     console.log(error)
  // };
  // }
  const numberOfOrders = "";
  const orderList = "anArraytoStoreListofTheOrders";
  const totalCost = "totalOfOrder";
  const orderDate = "datePerOrder";

  // för inloggade user(current user)
  // nested routes for user.. GET /userId/checkout
  // if (!req.body.user) req.body.user = req.params.userId;

  return (
    <CtaWrapper onClick={props.onClick}>
      <div className="closeModal">
        <IoMdClose onClick={props.onClose} />
      </div>
      <h2 className="orderH2">Order History</h2>
      <div className="history">
        <h4>Order Date</h4>
        <ul>
          <li>Product name</li>
          <li>Product name</li>
          <li>Product name</li>
          <li>Product name</li>
        </ul>
        <h4>Total Amount</h4>
      </div>
    </CtaWrapper>
  );
};

export default History;
