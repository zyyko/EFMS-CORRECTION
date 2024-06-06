import { createSlice } from "@reduxjs/toolkit";

const voyagesState = [
  {
    id: 1,
    intitule: "Istanbul La magnifique",
    prix: "8900DH",
    source: "https://via.placeholder.com/400x300?text=Istanbul",
  },
  {
    id: 2,
    intitule: "Paris La Ville Lumière",
    prix: "12000DH",
    source: "https://via.placeholder.com/400x300?text=Paris",
  },
  {
    id: 3,
    intitule: "New York La Ville qui ne dort jamais",
    prix: "15000DH",
    source: "https://via.placeholder.com/400x300?text=New+York",
  },
  {
    id: 4,
    intitule: "Tokyo La Métropole",
    prix: "14000DH",
    source: "https://via.placeholder.com/400x300?text=Tokyo",
  },
  {
    id: 5,
    intitule: "Sydney L'iconique",
    prix: "13000DH",
    source: "https://via.placeholder.com/400x300?text=Sydney",
  },
];

const voyagesSlice = createSlice({
  name: "voyages",
  initialState: voyagesState,
  reducers: {},
});

export default voyagesSlice.reducer;
