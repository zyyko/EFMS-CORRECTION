import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddStagiaire() {
  const [newStagiaire, setNewStagiaire] = useState({});
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "AJOUTER_STAGIAIRE", payload: newStagiaire });
  };
  return (
    <div>
      <input
        type="text"
        name="image"
        placeholder="Saisir le lien de l'image"
        onChange={(e) =>
          setNewStagiaire({ ...newStagiaire, [e.target.name]: e.target.value })
        }
      />
      <br />
      <input
        type="text"
        placeholder="Saisir le nom"
        name="nom"
        onChange={(e) =>
          setNewStagiaire({ ...newStagiaire, [e.target.name]: e.target.value })
        }
      />
      <br />
      <input
        type="text"
        placeholder="Saisir le prenom"
        name="prenom"
        onChange={(e) =>
          setNewStagiaire({ ...newStagiaire, [e.target.name]: e.target.value })
        }
      />
      <br />
      <input
        type="text"
        placeholder="Saisir la filiere"
        name="filiere"
        onChange={(e) =>
          setNewStagiaire({ ...newStagiaire, [e.target.name]: e.target.value })
        }
      />
      <br />
      <button onClick={handleAdd}>Ajouter</button>
    </div>
  );
}
