import React, { useState } from "react";
import Navbar from "./Navbar";
import { IoCartOutline } from "react-icons/io5";
import SportMan from "../bilder/sports-wear-store-banner-img-1.jpg";
import SportWoman from "../bilder/sports-wear-store-banner-img-2.jpg";
import HeartIcon from "../bilder/icon-1.png";
import thoraxIcon from "../bilder/icon-4.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import History from "./User/History";

const Home = () => {
  // kopplar jijis histori här
  const [show, setShow] = useState(false);
  const showHistory = () => {
    setShow(true);
  };
  const hideHistory = () => {
    setShow(false);
  };
  return (
    <div>
      <Navbar onShow={showHistory} />
      <main className="main">
        {show && <History onClose={hideHistory} />}
        <div className="left">
          <img className="bild1" src={SportMan} alt="man in gym" />
          <img className="bild1" src={SportWoman} alt="woman in gym" />
        </div>
        <div className="right">
          <h1 className="h1-home">LET'S LEVEL UP YOUR GAME</h1>
          <h2 className="h2-home">Fitness Ready</h2>
          <p className="home-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link to="/products" className="btn">
            <IoCartOutline className="btn-cart" /> SHOP NOW
          </Link>
        </div>
      </main>
      <div className="explore-collection">
        {/* <h2 className="h2-collection">EXPLORE OUR EXCLUSIVE PRODUCTS</h2> */}
        <div className="offer">
          <div className="home-div">
            <img src={HeartIcon} alt="heart icon" className="img-home"></img>
            <h3 className="h3-home"> HEALTH SUPPLEMENTS</h3>
            <p className="span-home">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudianda.
            </p>
          </div>
          <div className="home-div">
            <img src={thoraxIcon} alt="body icon" className="img-home"></img>
            <h3 className="h3-home"> OUR PLANS</h3>
            <p className="span-home">
              Veritatis obcaecati tenetur iure eius earum ut molestias
              architecto voluptate aliquam nihil, eveniet aliquid.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
