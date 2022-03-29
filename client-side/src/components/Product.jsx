import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Product.css";

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [update, setUpdate] = useState();
  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products/${id}`);
      let productData = await response.json();
      setProduct((product) => [...product, productData]);
      console.log(productData);
      console.log(product);
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
      {product.map((product) => {
        return (
          <div className="product-container" key={product._id}>
            <img src={`../assets/${product.photo}`} alt="Supplement" />
            <div>
              <h1>{product.name}</h1>
              <h2>{product.price}:-</h2>
              <h3 className="product-desc">{product.desc}</h3>
              <button type="submit">Add to cart</button>
              <Link to={"/products"}>Product list</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
