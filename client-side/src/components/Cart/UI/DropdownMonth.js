import React, { useState } from "react";
import "./DropdownMonth.css";

function DropdownMonth({ selectedMonth, setSelectedMonth }) {
  const [isActive, setIsActive] = useState(false);
  const months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selectedMonth} <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-months">
          {months.map((month) => (
            <div
              onClick={(e) => {
                setSelectedMonth(month);
                setIsActive(false);
              }}
              className="dropdown-month"
            >
              {month}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownMonth;
