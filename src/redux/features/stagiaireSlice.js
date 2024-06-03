import { createSlice } from "@reduxjs/toolkit";

const stagiaireSlice = createSlice({
  name: "stagiaires",
  initialState: {
    stagiaires: [
      {
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        nom: "Zaid",
        prenom: "Riyad",
        filiere: "TDI",
      },
      {
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        nom: "Ilyas",
        prenom: "Ait baali",
        filiere: "TDI",
      },
      {
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        nom: "Aleksandra",
        prenom: "Aleksandra",
        filiere: "TDI",
      },
      {
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        nom: "olcia",
        prenom: "olcia",
        filiere: "TDI",
      },
    ],
  },
  reducers: {
    addStagiaire: (state, action) => {
      state.stagiaires.push(action.payload);
    },

    deleteStagiaire: (state, action) => {
      return {
        stagiaires: state.stagiaires.filter(
          (stagiaire) => stagiaire.nom === action.payload
        ),
      };
    },
  },
});

export const { addStagiaire, deleteStagiaire } = stagiaireSlice.actions;
export default stagiaireSlice.reducer;
