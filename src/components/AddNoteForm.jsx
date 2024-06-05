import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/features/notesSlice";

export default function AddNoteForm() {
  const [data, setData] = useState({});
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      Titre : <input type="text" name="titre" onChange={handleChange} />
      <br />
      Contenu : <input type="text" name="contenu" onChange={handleChange} />
      <br />
      <button>Ajouter</button>
    </form>
  );
}
