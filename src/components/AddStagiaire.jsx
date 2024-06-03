import React, { useState } from "react";
import { addStagiaire } from "../redux/features/stagiaireSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AddStagiaire() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStagiaire(data));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Saisir lien de l'image"
          name="image"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Saisir le nom"
          name="nom"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Saisir le prenom"
          name="prenom"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Saisir le filiere"
          name="filiere"
          onChange={handleChange}
        />
        <br />
        <button>Ajouter</button>
      </form>
    </div>
  );
}
