import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterIssue } from "../redux/features/issuesSlice";

export default function AddIssueForm() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(ajouterIssue({ ...data, status: "Open" }));
  };

  return (
    <div>
      <fieldset>
        <legend>New Issue</legend>
        <input type="number" name="id" id="" onChange={handleChange} />
        <input type="text" name="title" id="" onChange={handleChange} />
        <select name="priotiy" id="" onChange={handleChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
        <br />
        <input type="text" name="description" id="" onChange={handleChange} />
        <br />
        <button onClick={handleAdd}>ADD</button>
      </fieldset>
    </div>
  );
}
