import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

const Profile = (props) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div
      className="dropdown"
      onMouseEnter={(e) => setIsClick(!isClick)}
      onMouseLeave={(e) => {
        setIsClick(false);
      }}
    >
      <div className="dropdown-icon">
        <IoPersonOutline />
      </div>
      {isClick && (
        <ul className="dropdown-content">
          <li className="dropdown-item">History</li>
          <li className="dropdown-item">Sign Out</li>
        </ul>
      )}
    </div>
  );
};

export default Profile;
