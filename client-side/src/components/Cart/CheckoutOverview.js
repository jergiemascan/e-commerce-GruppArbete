import React from "react";

function CheckoutOverview() {
  return (
    <div className="checkout-overview-container">
      <ul>
        <div className="overview-flex">
          <div className="checkout-items">
            <li>1x Amino</li>
            <li>2x SuperDuper Creatin</li>
            <li>1x Whey 100 Magic</li>
            <li>3x PWO</li>
          </div>
          <div className="checkout-amounts">
            <li>16 Eur</li>
            <li>22 Eur</li>
            <li>18.99 Eur</li>
            <li>42.29 Eur</li>
          </div>
        </div>

        <li className="checkout-total">Total: 99.98 Eur</li>
      </ul>
    </div>
  );
}

export default CheckoutOverview;
