import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Profile = (props) => {
  const [isHover, setIsHover] = useState(false);

  const redirect = useNavigate();

  const signoutHandler = () => {
    localStorage.clear();
    if (window.location.href === "http://localhost:3000/") {
      window.location.reload(true);
    } else {
      redirect("/");
    }
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
        <IoPersonOutline className="profile" />
      </div>
      {isHover && (
        <ul className="dropdown-content">
          <li className="dropdown-item">
            {localStorage.fullName ? localStorage.fullName : "Not logged in"}
          </li>
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
