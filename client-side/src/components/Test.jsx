import React, { useState } from "react";
// import Axios from "axios";

function Test() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const submit = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");

      let data = await response.json();
      for (let product of data) {
        console.log(data);
        setName(data[0].name);
        setPrice(data[0].price);
        setDesc(data[0].desc);

        // setName(data[1].name);
        // setPrice(data[1].price);
        // setDesc(data[1].desc);

        // setName(data[2].name);
        // setPrice(data[2].price);
        // setDesc(data[2].desc);

        // let nameProduct = product.name;
        // console.log(nameProduct.name);
      }
      //   console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  //   const submit = async () => {
  //     try {
  //       let response = await fetch("http://localhost:3001/products");
  //       //   let data = await response.json()
  //       // console.log(response);
  //       let data = await response.json();
  //       console.log(data[0].name);
  //       // console.log(data[0].price);
  //       // console.log(data[0].desc);
  //       // console.log(data[1].name);
  //
  //
  //       //{data[0].title}
  //       // for (let info of data) {
  //       // //   console.log(info.price);
  //       // }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  return (
    <div>
      <button onClick={submit} type="submit">
        Hej
      </button>

      <p>{name}</p>
      <p>{price}</p>
      <p>{desc}</p>
    </div>
  );
}

export default Test;
