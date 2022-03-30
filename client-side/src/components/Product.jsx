import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
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

  return (
    <div>
      <Navbar />

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
          <button className=" btn-product " type="submit">
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
