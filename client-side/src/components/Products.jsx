import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import History from "./User/History";
import "./Products.css";
import Footer from "./Footer";

function Products() {
  const [products, setProducts] = useState([]);
  const redirect = useNavigate();
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
      <div className="products-wrapper">
        {show && <History onClose={hideHistory} />}
        <h1 className="plans">Plans and Supplements</h1>
        <div className="products-container">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className={`cards products-card-${index}`} key={product._id}>
                <div className="specs">
                  <img
                    onClick={() => {
                      redirect(`/products/${product._id}`);
                    }}
                    className="products-image"
                    src={`assets/${product.photo}`}
                    alt="What up baby"
                  />
                  <h3>{product.name}</h3>
                  <h3>&#36;{product.price}</h3>
                  <Link
                    className="product-link-btn"
                    to={`/products/${product._id}`}
                  >
                    <button className="btn-product">Read more..</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
      {products.length > 5 && <Footer />}
    </div>
  );
}

export default Products;
