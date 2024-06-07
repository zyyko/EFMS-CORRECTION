import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Q6() {
  const continents = useSelector((state) =>
    state.map((pays) => pays.continent)
  );

  const handleContinentChange = (e) => {
    setContinent(e.target.value);
    setPopulation(null);
  };

  const handlePopulationChange = (e) => {
    setPopulation(e.target.value);
    setContinent(null);
  };
  const pays = useSelector((state) => state);
  console.log(pays);

  const [continent, setContinent] = useState();
  const [population, setPopulation] = useState();
  return (
    <div>
      <select onChange={handleContinentChange}>
        {continents.map((con, key) => (
          <option>{con}</option>
        ))}
      </select>
      <br />
      <input
        type="text"
        placeholder="Ou chercher par population"
        onChange={handlePopulationChange}
      />
      {pays.map((pays, key) => {
        if (pays.continent === continent) {
          return (
            <div
              style={{
                border: "1px solid",
                width: 350,
                display: "block",
                margin: "0 auto",
              }}
              key={key}
            >
              <img src={pays.image} width={300} />
              <p>{pays.name}</p>
              <p>{pays.surfaceArea}</p>
              <p>{pays.population}</p>
            </div>
          );
        } else if (pays.population === parseInt(population)) {
          return (
            <div
              style={{
                border: "1px solid",
                width: 350,
                display: "block",
                margin: "0 auto",
              }}
              key={key}
            >
              <img src={pays.image} width={300} />
              <p>{pays.name}</p>
              <p>{pays.surfaceArea}</p>
              <p>{pays.population}</p>
            </div>
          );
        }
      })}
    </div>
  );
}
