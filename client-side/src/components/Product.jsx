import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Store } from "../Store";
import Navbar from "./Navbar";
import History from "./User/History";
import Footer from "./Footer";
import "./Product.css";

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      let product = await response.json();
      setProduct(product);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addToCartHandler = () => {
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: product,
    });
  };

  // kopplar jijis histori här
  const [show, setShow] = useState(false);
  const showHistory = () => {
    setShow(true);
  };
  const hideHistory = () => {
    setShow(false);
  };

  return (
    <div>
      <Navbar onShow={showHistory} />
      {show && <History onClose={hideHistory} />}

      <div className="product-container" key={product._id}>
        <img
          className="product-image"
          src={`../assets/${product.photo}`}
          alt="Supplement"
        />
        <div className="product-card">
          <h1>{product.name}</h1>
          <h2>&#36;{product.price}</h2>
          <p className="product-desc">{product.desc}</p>
          <button
            onClick={addToCartHandler}
            className=" btn-product "
            type="submit"
          >
            Add to cart
          </button>
          <Link className="product-link-btn" to={"/products"}>
            Back to products..
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
