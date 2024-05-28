import { createSlice } from "@reduxjs/toolkit";

const initialChambresState = [
  { num: 101, type: "simple", prix: 50 },
  { num: 102, type: "double", prix: 80 },
  { num: 103, type: "suite", prix: 120 },
  { num: 104, type: "simple", prix: 55 },
];

const chambresSlice = createSlice({
  name: "chambres",
  initialState: initialChambresState,
  reducers: {},
});

export default chambresSlice.reducer;
