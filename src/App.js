import logo from "./logo.svg";
import "./App.css";
import ListStagiaire from "./components/ListStagiaire";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailStagiaire from "./components/DetailStagiaire";
import AddStagiaire from "./components/AddStagiaire";
import Header from "./components/Header";
import StagiairesApi from "./components/StagiairesApi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListStagiaire />} />
          <Route path="/add" element={<AddStagiaire />} />
          <Route path="/:nom" element={<DetailStagiaire />} />
          <Route path="/stagiairesApi" element={<StagiairesApi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
