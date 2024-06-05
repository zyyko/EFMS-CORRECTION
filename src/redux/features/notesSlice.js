import { createSlice } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    removeNote: (state, action) => {
      console.log("Payload abnadem", action.payload);
      return state.filter((item) => item.titre !== action.payload);
    },
  },
});

export const { addNote, removeNote } = notesSlice.actions;
export default notesSlice.reducer;
