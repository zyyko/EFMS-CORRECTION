import logo from "./logo.svg";
import "./App.css";
import ListStagiaire from "./components/ListStagiaire";
import { useState } from "react";
import AjouterStagiaire from "./components/AjouterStagiaire";
import SupStagiaire from "./components/SupStagiaire";
import RechercheStagiaire from "./components/RechercheStagiaire";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import ListEtudiant from "./redux/components/ListEtudiant";
import ModifierEtudiant from "./redux/components/ModifierEtudiant";

function App() {
  const listStagiaires = [
    {
      nom: "CHAKIRI",
      prenom: "Laila",
      ville: "Fes",
      fil: "Web designer",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      nom: "OUAFI",
      prenom: "Anas",
      ville: "Tanger",
      fil: "Web et ful",
      photo: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      nom: "BADRAOUI",
      prenom: "Ikram",
      ville: "Tanger",
      fil: "Dev",
      photo: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      nom: "NACIRI",
      prenom: "Hassan",
      ville: "Casablanca",
      fil: "Dev",
      photo: "https://randomuser.me/api/portraits/men/21.jpg",
    },
  ];

  const [stagiaires, setStagiaires] = useState(listStagiaires);
  const [searchedStagiaire, setSearchedStagiaire] = useState(listStagiaires);
  const deleteStagiaire = (nom) => {
    console.log(nom);
    const filteredStagiaires = stagiaires.filter(
      (stagiaire) => stagiaire.nom !== nom
    );

    setStagiaires(filteredStagiaires);
    setSearchedStagiaire(filteredStagiaires);
  };

  const addStagiaire = (newStagiaire) => {
    console.log(newStagiaire);
    setStagiaires([...stagiaires, newStagiaire]);
    console.log(stagiaires);
  };

  const filterStagiaire = (nom) => {
    console.log(nom);
    const filteredStagiaires = stagiaires.filter((stagiaire) =>
      stagiaire.nom.toLowerCase().includes(nom.toLowerCase())
    );
    setSearchedStagiaire(filteredStagiaires);
    console.log(searchedStagiaire);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <ListStagiaire
                listStagiaires={stagiaires}
                deleteStagiaire={deleteStagiaire}
              />
            }
          />
          <Route
            path="/add"
            element={<AjouterStagiaire addStagiaire={addStagiaire} />}
          />
          <Route
            path="/delete"
            element={<SupStagiaire deleteStagiaire={deleteStagiaire} />}
          />
          <Route
            path="/search"
            element={
              <RechercheStagiaire
                searchedStagiaire={searchedStagiaire}
                deleteStagiaire={deleteStagiaire}
                filterStagiaire={filterStagiaire}
              />
            }
          />
          <Route path="/Exercice2" element={<ListEtudiant />} />
          <Route path={"/modifier/:id"} element={<ModifierEtudiant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
