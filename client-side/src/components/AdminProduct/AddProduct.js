import React from "react";
import Bildwoman from "../../bilder/pt-women.jpg";

const addProduct = () => {
  return (
    <div>
      <form>
        <div>
          <h2>Add Product</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input name="name"></input>
          </div>
          <div>
            <label htmlFor="photo">Photo</label>
            {/* <img src={Bildwoman} alt={"woman working out"}></img> */}
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input name="price"></input>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea name="description"></textarea>
          </div>
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default addProduct;
