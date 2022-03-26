import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import ProductStyling from "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const redirect = useNavigate();
  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch("http://localhost:3001/products");
        let products = await response.json();
        setProducts(products);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProductData();
  }, []);

  return (
    <div className="product-wrapper">
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img
              onClick={() => {
                redirect(`/products/${product._id}`);
              }}
              className="product-image"
              src={`assets/${product.photo}`}
              alt="What up baby"
            />
            <h1>{product.name}</h1>
            <h2>{product.price}:-</h2>
            <h3>{product.desc.slice(0, 50)}.</h3>
            <button type="submit">Add to cart</button>
            <Link to={`/products/${product._id}`}>Info</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
