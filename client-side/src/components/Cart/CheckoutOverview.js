import React from "react";
import { useContext } from "react";
import { Store } from "../../Store";
import History from "../User/History";

function CheckoutOverview() {
  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  function overviewTotalAmount() {
    const a = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
    return a;
  }

  const productTotal = overviewTotalAmount();
  return (
    <div className="checkout-overview-container">
      <ul>
        {cartItems.map((product) => (
          <div className="overview-checkout-flex" key={product._id}>
            <div className="checkout-amounts">
              <li>
                <div>{product.quantity}x</div>
              </li>
            </div>

            <div className="checkout-items" key={product._id}>
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
          Total: {""}
          {productTotal}&#36;
        </li>
      </ul>
    </div>
  );
}

export default CheckoutOverview;
