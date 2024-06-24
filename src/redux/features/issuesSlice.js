import { createSlice } from "@reduxjs/toolkit";

const initState = [
  {
    id: 1,
    title: "Crash on Login",
    description:
      "The application crashes when a user tries to log in with an incorrect password",
    priority: "High",
    status: "Open",
  },
  {
    id: 2,
    title: "Crash on Login",
    description:
      "The application crashes when a user tries to log in with an incorrect password",
    priority: "High",
    status: "Open",
  },
  {
    id: 3,
    title: "Crash on Login",
    description:
      "The application crashes when a user tries to log in with an incorrect password",
    priority: "High",
    status: "Open",
  },
];

const issuesSlice = createSlice({
  name: "issues",
  initialState: initState,
  reducers: {
    ajouterIssue: (state, action) => {
      state.push(action.payload);
    },
    updateIssue: (state, action) => {
      return state.map((issue) => {
        if (issue.id == action.payload) {
          return { ...issue, ...action.payload };
        }
        return issue;
      });
    },
    closeIssue: (state, action) => {
      return state.map((issue) => {
        if (issue.id == action.payload) {
          return { ...issue, status: "Closed" };
        }
        return issue;
      });
    },
    supprimerIssue: (state, action) => {
      return state.filter((issue) => issue.id !== action.payload);
    },
  },
});

export default issuesSlice.reducer;
export const { ajouterIssue, updateIssue, closeIssue, supprimerIssue } =
  issuesSlice.actions;
