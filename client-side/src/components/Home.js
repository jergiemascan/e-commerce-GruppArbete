import React from "react";
import Navbar from "./Navbar";
import { IoCartOutline } from "react-icons/io5";
import SportMan from "../bilder/sports-wear-store-banner-img-1.jpg";
import SportWoman from "../bilder/sports-wear-store-banner-img-2.jpg";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="main">
        <div className="left">
          <img className="bild1" src={SportMan} alt="man in gym" />
          <img className="bild1" src={SportWoman} alt="woman in gym" />
        </div>
        <div className="right">
          <h1>LET'S LEVEL UP YOUR GAME</h1>
          <h2>Fitness Ready</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button className="btn">
            <IoCartOutline className="btn-cart" /> SHOP NOW
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
