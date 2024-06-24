import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeIssue, supprimerIssue } from "../redux/features/issuesSlice";

export default function IssueList() {
  const issues = useSelector((state) => state.issues);
  const dispatch = useDispatch();

  const handleClose = (id) => {
    dispatch(closeIssue(id));
  };

  const handleDelete = (id) => {
    dispatch(supprimerIssue(id));
  };
  console.log(issues);
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
      {issues?.map((issue, key) => (
        <div
          key={key}
          style={{
            border: "1px solid",
            backgroundColor: issue.status == "Open" ? "red" : "grey",
          }}
        >
          <button onClick={() => handleClose(issue.id)}>Close</button>
          <button onClick={() => handleDelete(issue.id)}>Delete</button>
          <hr />
          <h3>{issue.title}</h3>
          <p>Priority : {issue.priority}</p>
          <p>Status : {issue.status}</p>
          <p></p>
        </div>
      ))}
    </div>
  );
}
