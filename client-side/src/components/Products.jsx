import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import History from "./User/History";
import "./Products.css";

function Products(props) {
  const [products, setProducts] = useState([]);
  const redirect = useNavigate();

  // kopplar jijis histori här
  const [show, setShow] = useState(false);
  const showHistory = () => {
    setShow(true);
  };
  const hideHistory = () => {
    setShow(false);
  };

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
    <div>
      <Navbar onShow={showHistory} />
      <div className="product-wrapper">
        {show && <History onClose={hideHistory} />}

        <h1>Plans</h1>
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
              {/* <h3 className="product-desc">{product.desc.slice(0, 50)}</h3> */}
              <button type="submit">Add to cart</button>
              <Link to={`/products/${product._id}`}>Read more</Link>
            </div>
          ))}
        </div>
        <h1>Supplements</h1>
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
              {/* <h3 className="product-desc">{product.desc.slice(0, 50)}</h3> */}
              <button type="submit">Add to cart</button>
              <Link to={`/products/${product._id}`}>Read more</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
