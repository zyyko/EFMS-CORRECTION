import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Livre({ livre, id }) {
  console.log(id);
  const likes = useSelector((state) => state.find((livre, key) => key === id));
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch({ type: "like", payload: id });
  };
  return (
    <div>
      <img src={livre.poster} alt="" width={350} />
      <h2>{livre.titre}</h2>
      <p>Auteur : {livre.auteur}</p>
      <p>Edition : {livre.edition}</p>
      <button onClick={handleLike}>Like {likes.likes}</button>
    </div>
  );
}
