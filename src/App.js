import logo from "./logo.svg";
import "./App.css";
import Stagiaire from "./components/Stagiaire/Stagiaire";
import ListStagiaires from "./components/Stagiaire/ListStagiaires";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsStagiaire from "./components/Stagiaire/DetailsStagiaire";
import AddStagiaire from "./components/Stagiaire/AddStagiaire";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListStagiaires />} />
          <Route path="/stagiaire/:nom" element={<DetailsStagiaire />} />
          <Route path="/add" element={<AddStagiaire />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
