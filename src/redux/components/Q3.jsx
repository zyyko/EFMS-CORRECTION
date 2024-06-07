import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Q3({ selectedYear }) {
  const pays = useSelector((state) => state);
  console.log(pays);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {selectedYear
        ? pays
            .filter((pays) => pays.indepYear === selectedYear)
            .map((pays, key) => (
              <div style={{ border: "1px solid" }} key={key}>
                <img src={pays.image} width={300} />
                <p>{pays.name}</p>
                <p>{pays.surfaceArea}</p>
                <p>{pays.population}</p>
                <p></p>
              </div>
            ))
        : pays.map((pays, key) => (
            <div style={{ border: "1px solid" }} key={key}>
              <img src={pays.image} width={300} />
              <p>{pays.name}</p>
              <p>{pays.surfaceArea}</p>
              <p>{pays.population}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "15px",
                }}
              >
                <NavLink to={"/add/ville/" + pays.code}>Ajouter Ville</NavLink>
                <NavLink to={"/update/ville/" + pays.code}>
                  Modifier Ville
                </NavLink>
              </div>
            </div>
          ))}
    </div>
  );
}
