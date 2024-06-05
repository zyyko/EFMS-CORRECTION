import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

export default function NoteList() {
  const notes = useSelector((state) => state.notes);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <h1 style={{ color: "red" }}>
        ila chi note katchark nfs titre o bghiti tsupprimer , ay note 3ndha dak
        titre atms7 , khdm bl ID bach tkon note unique
      </h1>
      {notes.length > 0
        ? notes.map((note, key) => <Note note={note} key={key} />)
        : "Empty ..."}
    </div>
  );
}
