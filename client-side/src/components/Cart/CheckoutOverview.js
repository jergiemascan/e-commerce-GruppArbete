import React from "react";
import ShoppingCart from "../ShoppingCart";
import { useContext } from "react";
import { Store } from "../../Store";

function CheckoutOverview() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  function cartTotalSum() {
    const e = cartItems.reduce((e, { price }) => e + price, 0);
    return e;
  }

  const totalAmount = cartTotalSum();
  return (
    <div className="checkout-overview-container">
      <ul>
        {cartItems.map((product) => (
          <div className="overview-flex">
            <div className="checkout-items" key={product._id}>
              <div>{product.quantity}</div>
              <li>
                <div>{product.name}</div>
              </li>
            </div>

            <div className="checkout-amounts">
              <li>
                <div>{product.price}&#36;</div>
              </li>
            </div>
          </div>
        ))}

        <li className="checkout-total">
          Total:{` `}
          {totalAmount} {` `}&#36;
        </li>
      </ul>
    </div>
  );
}

export default CheckoutOverview;
