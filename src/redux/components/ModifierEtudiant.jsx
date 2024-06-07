import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { modifierEtudiant } from "../features/sliceLivres";

export default function ModifierEtudiant() {
  const { id } = useParams();
  const etudiant = useSelector((state) =>
    state.etudiants.dbEtudiant.find((etudiant) => etudiant.id === id)
  );

  const dispatch = useDispatch();

  const [newData, setNewData] = useState({
    id: etudiant.id,
    nom: etudiant.nom,
    filiere: etudiant.filiere,
  });

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch(modifierEtudiant(newData));
    console.log(etudiant);
  };

  return (
    <div>
      <input
        type="text"
        name="id"
        placeholder="Nom etudiant"
        value={etudiant.id}
        disabled={true}
        onChange={handleChange}
      />
      <input
        type="text"
        name="nom"
        placeholder="Nom etudiant"
        defaultValue={etudiant.nom}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Filiere"
        name="filiere"
        defaultValue={etudiant.filiere}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Modifier etudiant</button>
    </div>
  );
}
