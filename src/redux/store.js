import { createStore } from "redux";
import * as ACTIONS_TYPES from "./actionsTypes";

const pays = [
  {
    code: "USA",
    name: "United States",
    continent: "North America",
    surfaceArea: 9833517,
    image:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    indepYear: 1776,
    population: 331002651,
    cities: [
      {
        name: "Washington, D.C.",
        district: "District of Columbia",
        population: 692683,
        capital: true,
      },
      {
        name: "New York City",
        district: "New York",
        population: 8419600,
        capital: false,
      },
    ],
  },
  {
    code: "FRA",
    name: "France",
    continent: "Europe",
    surfaceArea: 551695,
    image: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    indepYear: 843,
    population: 67081000,
    cities: [
      {
        name: "Paris",
        district: "Île-de-France",
        population: 2140526,
        capital: true,
      },
      {
        name: "Marseille",
        district: "Provence-Alpes-Côte d'Azur",
        population: 861635,
        capital: false,
      },
    ],
  },
  {
    code: "JPN",
    name: "Japan",
    continent: "Asia",
    surfaceArea: 377975,
    image: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    indepYear: -660,
    population: 125960000,
    cities: [
      {
        name: "Tokyo",
        district: "Kanto",
        population: 13929286,
        capital: true,
      },
      {
        name: "Osaka",
        district: "Kansai",
        population: 2758410,
        capital: false,
      },
    ],
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.AJOUTER_VILLE:
      return state.map((pays) => {
        if (pays.code === action.payload.code) {
          return { ...pays, cities: [...pays.cities, action.payload.newVille] };
        }
        return pays;
      });
    case ACTIONS_TYPES.MODIFIER_POPULATION:
      return state.map((pays) => {
        if (pays.code === action.payload.code) {
          return { ...pays, population: action.payload.population };
        }
        return pays;
      });
    default:
      return state;
  }
};

const store = createStore(reducer, pays);

export default store;
