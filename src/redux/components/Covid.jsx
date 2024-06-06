import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Covid() {
  const [data, setData] = useState([]);
  console.log(data);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/countries"
        );
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((country, key) => (
          <li key={key}>
            {country.country} --------------- {country.cases}
          </li>
        ))}
      </ul>
    </div>
  );
}
