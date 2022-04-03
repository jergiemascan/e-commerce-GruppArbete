import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const [isHover, setIsHover] = useState(false);
  // Halverar namnet i en array, förnamn blir index 0
  const firstName = localStorage.fullName.split(" ")[0];

  const redirect = useNavigate();
  const signoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    redirect("/");
  };

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
          <li className="dropdown-item">{firstName}</li>
          <li className="dropdown-item" onClick={props.onShowHist}>
            History
          </li>
          <li className="dropdown-item" onClick={signoutHandler}>
            Sign Out
          </li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
