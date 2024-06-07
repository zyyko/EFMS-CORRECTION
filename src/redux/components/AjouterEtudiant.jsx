import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterEtudiant } from "../features/sliceLivres";
import { NavLink } from "react-router-dom";

export default function AjouterEtudiant() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(ajouterEtudiant(data));
  };
  return (
    <div>
      <input
        type="text"
        name="nom"
        placeholder="Nom etudiant"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <input
        type="text"
        placeholder="Filiere"
        name="filiere"
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <button onClick={handleAdd}>Ajouter un etudiant</button>
    </div>
  );
}
