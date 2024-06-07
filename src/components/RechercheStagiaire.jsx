import React, { useState } from "react";
import ListStagiaire from "./ListStagiaire";

export default function RechercheStagiaire({
  listStagiaires,
  filterStagiaire,
  deleteStagiaire,
  searchedStagiaire,
}) {
  const [nom, setNom] = useState("");
  const handleChange = (e) => {
    filterStagiaire(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ListStagiaire
        listStagiaires={searchedStagiaire}
        deleteStagiaire={deleteStagiaire}
      />
    </div>
  );
}
