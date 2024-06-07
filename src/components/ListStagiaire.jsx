import React from "react";

export default function ListStagiaire({ listStagiaires, deleteStagiaire }) {
  const handleDelete = (nom) => {
    deleteStagiaire(nom);
  };

  return (
    <>
      <h1>List des stagiaires</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {listStagiaires.map((stagiaire, key) => (
          <div style={{ border: "1px solid" }} key={key}>
            <img src={stagiaire.photo} />
            <p>
              Nom et prénom : {stagiaire.nom} {stagiaire.prenom}
            </p>
            <p>Ville : {stagiaire.ville}</p>
            <p>Filiere : {stagiaire.fil}</p>
            <button onClick={() => handleDelete(stagiaire.nom)}>
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
