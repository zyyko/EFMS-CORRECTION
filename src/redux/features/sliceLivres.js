import { createSlice } from "@reduxjs/toolkit";

const initStat = {
  dbEtudiant: [
    { id: "Etudiant 1", nom: "ELOUAFI ANASS", filiere: "DD WEB FULL STACK" },
    { id: "Etudiant 2", nom: "ETARAFI OUFAE", filiere: "DD OPTION MOBILE" },
    { id: "Etudiant 3", nom: "ELSABIR HAMZA", filiere: "DD WEB DESIGNER" },
  ],
};

const sliceEtudiants = createSlice({
  name: "etudiants",
  initialState: initStat,
  reducers: {
    ajouterEtudiant: (state, action) => {
      const lastItem = state.dbEtudiant[state.dbEtudiant.length - 1].id;
      let nextId = parseInt(lastItem[lastItem.length - 1]) + 1;
      nextId = `Etudiant ${nextId}`;
      console.log(nextId);
      state.dbEtudiant.push({ ...action.payload, id: nextId });
    },
    supprimerEtudiant: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        dbEtudiant: state.dbEtudiant.filter(
          (etudiant) => etudiant.id !== action.payload
        ),
      };
    },

    modifierEtudiant: (state, action) => {
      return {
        ...state,
        dbEtudiant: state.dbEtudiant.map((etudiant) => {
          if (etudiant.id === action.payload.id) {
            return { ...etudiant, ...action.payload };
          }

          return etudiant;
        }),
      };
    },
  },
});

export const { ajouterEtudiant, supprimerEtudiant, modifierEtudiant } =
  sliceEtudiants.actions;
export default sliceEtudiants.reducer;
