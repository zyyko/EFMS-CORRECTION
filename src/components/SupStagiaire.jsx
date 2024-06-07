import React, { useState } from "react";

export default function SupStagiaire({ deleteStagiaire }) {
  const [nomToDelete, setNomToDelete] = useState();

  const handleDelete = () => {
    deleteStagiaire(nomToDelete);
  };
  return (
    <div>
      <h1>Supprimer un Stagiaire</h1>
      <input
        type="text"
        placeholder="nom"
        onChange={(e) => setNomToDelete(e.target.value)}
      />
      <br />
      <button onClick={handleDelete}>Supprimer un stagiaire</button>
    </div>
  );
}
