import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
        let product = await response.json();
        setProduct(product);
        console.log(product);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProductData();
  }, []);
  return (
    <div>
      <div>Hej</div>
    </div>
  );
}

export default Product;
