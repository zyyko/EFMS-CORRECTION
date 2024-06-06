import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [genre, setGenre] = useState();
  const [taille, setTaille] = useState();
  const [error, setError] = useState("");
  const [poids, setPoids] = useState();

  const handleCalcule = () => {
    if (isNaN(taille)) {
      setError("La taille doit être un entier");
      return;
    }

    if (taille < 150) {
      setError("La taille minimum est: 150cm");
    } else {
      let imc =
        genre === "Homme"
          ? taille - 100 - (taille - 150) / 4
          : taille - 100 - (taille - 150) / 2.5;
      setPoids(imc);
      setError("");
    }
  };

  return (
    <div className="App">
      Taille en CM:
      <br />
      <input type="text" onChange={(e) => setTaille(e.target.value)} />
      <br />
      <div style={{ color: "red" }}>{error && error}</div>
      Génre:
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <select onChange={(e) => setGenre(e.target.value)}>
          <option>Homme</option>
          <option>Femme</option>
        </select>
        <img
          src={genre == "Homme" ? "./homme.png" : "./femme.png"}
          width={80}
        />
      </div>
      <br />
      Poids ideal : <br />
      <input type="text" value={error ? error : poids} />
      <br />
      <button style={{ backgroundColor: "	#87CEEB" }} onClick={handleCalcule}>
        Calculer
      </button>
    </div>
  );
}

export default App;
