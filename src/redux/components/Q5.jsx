import React, { useState } from "react";
import { ajouterVille } from "../actionsCreators";
import { useDispatch } from "react-redux";
import * as ACTIONS_TYPES from "../actionsTypes";
import { useParams } from "react-router-dom";

export default function Q5() {
  const dispatch = useDispatch();
  const [newVille, setNewVille] = useState({});
  const [population, setPopulation] = useState(null);
  const { code } = useParams();

  console.log(code);

  const handleChange = (e) => {
    if (e.target.name === "capital") {
      setNewVille({ ...newVille, [e.target.name]: e.target.checked });
    } else {
      setNewVille({ ...newVille, [e.target.name]: e.target.value });
    }
  };

  const handleAdd = () => {
    dispatch({
      type: ACTIONS_TYPES.AJOUTER_VILLE,
      payload: { newVille, code },
    });
  };

  const handleUpdate = () => {
    dispatch({
      type: ACTIONS_TYPES.MODIFIER_POPULATION,
      payload: { population, code },
    });
  };
  return (
    <div>
      Name : <input type="text" name="name" onChange={handleChange} />
      <br />
      District :{" "}
      <input type="district" name="district" onChange={handleChange} />
      <br />
      Population :{" "}
      <input type="number" name="population" onChange={handleChange} />
      <br />
      <input type="checkbox" name="capital" onChange={handleChange} /> : Capital
      <br />
      <button onClick={handleAdd}>Ajouter Ville</button>
      <hr />
      <div>
        <h1>Update Population</h1>
        Population :{" "}
        <input
          type="population"
          onChange={(e) => setPopulation(e.target.value)}
        />
        <button onClick={handleUpdate}>Modifier</button>
      </div>
    </div>
  );
}
