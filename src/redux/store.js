import { createStore } from "redux";
import reducer from "./reducer";

const initialState = [
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    nom: "zaid",
    prenom: "riyad",
    filiere: "TDI",
  },
  {
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    nom: "zakaria",
    prenom: "taouaf",
    filiere: "TDI",
  },
  {
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    nom: "olcia",
    prenom: "aleksandra",
    filiere: "TDI",
  },
];

export const store = createStore(reducer, initialState);
