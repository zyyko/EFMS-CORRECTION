import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Chambres() {
  const [type, setType] = useState();
  const chambres = useSelector((state) => state.chambres);
  const connectedUserId = useSelector((state) =>
    state.clients.find((client) => client.connected == true)
  );
  return (
    <div>
      <select name="" id="" onChange={(e) => setType(e.target.value)}>
        <option value="" disabled>
          Choisissez un type
        </option>
        {chambres.map((chambre) => (
          <option>{chambre.type}</option>
        ))}
      </select>
      <div>
        <ul>
          {chambres
            .filter((chambre) => chambre.type == type)
            .map((chambre) => (
              <div style={{ border: "1px solid" }}>
                <p>numero : {chambre.num}</p>
                <p>type : {chambre.type}</p>
                <p>prix : {chambre.prix}</p>
                <NavLink
                  to={"/reservation/" + connectedUserId.id + "/" + chambre.num}
                >
                  Reserver
                </NavLink>
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}
