import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./Navbar";
import History from "./User/History";
import "./Products.css";
import Footer from "./Footer";

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
      <div className="products-wrapper">
        {show && <History onClose={hideHistory} />}

        <h1>Plans & Supplements</h1>
        <div className="products-container">
          {products.length > 0 &&
            products.map((product, index) => (
              <div className={`cards products-card-${index}`} key={product._id}>
                <img
                  onClick={() => {
                    redirect(`/products/${product._id}`);
                  }}
                  className="products-image"
                  src={`assets/${product.photo}`}
                  alt="What up baby"
                />
                <h2>{product.name}</h2>
                <h2>&#36;{product.price}</h2>
                <p className="shortdesc">{product.shortdesc}</p>

                <button className="btn-product" type="submit">
                  Add to cart
                </button>
                <Link
                  className="product-link-btn"
                  to={`/products/${product._id}`}
                >
                  Read more..
                </Link>
              </div>
            ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Products;
