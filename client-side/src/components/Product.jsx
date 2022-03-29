import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../Store";
import axios from "axios";
import Navbar from "./Navbar";

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      let product = await response.json();
      setProduct([product]);
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

  return (
    <div>
      <Navbar />;
      {product.map((product) => {
        return (
          <div key={product._id}>
            <img src={`../assets/${product.photo}`} alt="Supplement" />
            <h1>{product.name}</h1>
            <h2>{product.price}:-</h2>
            <h4>{product.desc}</h4>
            <button onClick={addToCartHandler} type="submit">
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
