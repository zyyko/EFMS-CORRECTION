import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteStagiaire,
  updateStagiaire,
} from "../redux/features/stagiaireSlice";

export default function EditStagiaire() {
  const { nom } = useParams();
  const [data, setData] = useState({});
  const stagiaire = useSelector((state) =>
    state.stagiaires.stagiaires.find((stagiaire) => stagiaire.nom === nom)
  );

  useEffect(() => {
    if (stagiaire) {
      setData(stagiaire);
    }
  }, [stagiaire]);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateStagiaire(data));
  };

  return (
    <div>
      <form action="" onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="Saisir lien de l'image"
          name="image"
          value={data.image || ""}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Saisir le nom"
          name="nom"
          value={data.nom || ""}
          disabled={true}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Saisir le prenom"
          name="prenom"
          value={data.prenom || ""}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Saisir le filiere"
          name="filiere"
          value={data.filiere || ""}
          onChange={handleChange}
        />
        <br />
        <button>Modifier</button>
      </form>
    </div>
  );
}
