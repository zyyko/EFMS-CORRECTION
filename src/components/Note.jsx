import React from "react";
import { useDispatch } from "react-redux";
import { removeNote } from "../redux/features/notesSlice";

export default function Note({ note }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeNote(note.titre));
  };
  return (
    <div style={{ border: "1px solid" }}>
      <h3>{note.titre}</h3>
      <p>
        {note.contenu}
        <br />
        <button style={{ backgroundColor: "red" }} onClick={handleDelete}>
          Supprimer
        </button>
      </p>
    </div>
  );
}
