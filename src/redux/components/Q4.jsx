import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Q3 from "./Q3";

export default function Q4() {
  const years = useSelector((state) =>
    state.filter((year) => year.indepYear).map((year) => year.indepYear)
  );

  const [selectedYear, setSelectedYear] = useState(null);
  const handleYearClick = (year) => {
    setSelectedYear(year);
    console.log(selectedYear);
  };

  console.log(selectedYear);
  return (
    <div>
      {years.map((year, key) => (
        <p key={key}>
          <a
            href="#"
            style={{ backgroundColor: selectedYear === year ? "yellow" : "" }}
            onClick={() => handleYearClick(year)}
          >
            {year}
          </a>
        </p>
      ))}
      {selectedYear && <Q3 selectedYear={selectedYear} />}
    </div>
  );
}
