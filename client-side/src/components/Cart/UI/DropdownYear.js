import React, { useState } from "react";
import "./DropdownYear.css";

function DropdownYear({ selectedYear, setSelectedYear }) {
  const [isActive, setIsActive] = useState(false);
  const years = [
    "2023",
    "2024",
    "2025",
    "2026",
    "2027",
    "2028",
    "2029",
    "2030",
  ];
  return (
    <div className="dropdown-year">
      <div
        className="dropdown-year-btn"
        onClick={(e) => setIsActive(!isActive)}
      >
        {selectedYear} <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-years">
          {years.map((year) => (
            <div
              onClick={(e) => {
                setSelectedYear(year);
                setIsActive(false);
              }}
              className="dropdown-year"
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropdownYear;
