import React, { useState } from "react";

export default function AjouterStagiaire({ addStagiaire }) {
  const [data, setData] = useState({
    nom: "",
    prenom: "",
    fil: "",
    ville: "",
    photo: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAddStagiaire = () => {
    addStagiaire(data);
  };

  return (
    <div>
      Nom : <input type="text" name="nom" onChange={handleChange} />
      <br />
      Prénom : <input type="text" name="prenom" onChange={handleChange} />
      <br />
      Filiere : <input type="text" name="fil" onChange={handleChange} />
      <br />
      Ville :{" "}
      <select id="" name="ville" onChange={handleChange}>
        <option value="FES">Fes</option>
        <option value="HOCEIMA">Hoceima</option>
        <option value="TANGER">Tanger</option>
      </select>
      <br />
      Photo : <input type="text" name="photo" onChange={handleChange} />
      <br />
      <button onClick={handleAddStagiaire}>Ajouter Stagiaire</button>
    </div>
  );
}
