import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import History from "../User/History";

const Profile = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={(e) => setIsHover(!isHover)}
      onMouseLeave={(e) => {
        setIsHover(false);
      }}
    >
      <div className="dropdown-icon">
        <IoPersonOutline />
      </div>
      {isHover && (
        <ul className="dropdown-content">
          <li className="dropdown-item">Jiji Mascan</li>
          <li className="dropdown-item" onClick={props.onShowHist}>
            History
          </li>
          <li className="dropdown-item">Sign Out</li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
