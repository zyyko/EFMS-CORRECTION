import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [stagiaires, setStagiaires] = useState([
    {
      id: 1,
      matricule: 1454,
      nom: "Alaoui",
      codepostal: 20400,
      ville: "casa",
      moyenne: 12.56,
    },
  ]);
  const [id, setId] = useState(2);
  const [searchedStagiaires, setSearchedStagiaires] = useState();
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({
    matricule: "",
    nom: "",
    codepostal: "",
    ville: "",
    moyenne: "",
  });
  const [stagiaireToEdit, setStagiaireToEdit] = useState();

  const ajouterStagiaire = () => {
    const isMatriculeExists = stagiaires.find(
      (stagiaire) => stagiaire.matricule == data.matricule
    );
    if (isMatriculeExists) {
      setErrors({ ...errors, matricule: "Matricule doit être unique" });
      return;
    }
    if (
      data.matricule &&
      data.nom &&
      data.codepostal &&
      data.ville &&
      data.moyenne
    ) {
      if (data.moyenne < 0 || data.moyenne > 20) {
        setErrors({
          ...errors,
          moyenne: "Moyenne doit être entre 0 et 20",
        });
      } else {
        setErrors({
          matricule: "",
          nom: "",
          codepostal: "",
          ville: "",
          moyenne: "",
        });
        console.log(data);
        setStagiaires([...stagiaires, { ...data, id: id }]);
        setId(id + 1);
        console.log(stagiaires);
      }
    } else {
      setErrors({
        matricule: data.matricule ? "" : "Matricule est obligatoire ",
        nom: data.nom ? "" : "Nom est obligatoire",
        codepostal: data.codepostal ? "" : "Code postal est obligatoire",
        ville: data.ville ? "" : "Ville est obligatoire",
        moyenne: data.moyenne ? "" : "Moyenne est obligatoire",
      });
    }
  };

  const handleDelete = (id) => {
    console.log("clicked");
    console.log(id);
    setStagiaires((prevState) =>
      prevState.filter((stagiaire) => stagiaire.id !== id)
    );
  };

  const handleEdit = (id) => {
    setStagiaireToEdit(stagiaires.find((stagiare) => stagiare.id == id));
    console.log(stagiaireToEdit);
  };

  const handleEmpty = (e) => {
    setData({});
    setStagiaireToEdit();
    setErrors({});
  };

  const handleSearch = () => {
    const filteredStagiaires = stagiaires.filter(
      (stagiaire) => stagiaire.nom == data.nom && stagiaire.ville == data.ville
    );
    setSearchedStagiaires(filteredStagiaires);
    console.log(filteredStagiaires);
  };

  const highestMoyenne = () => {
    // using loop
    /* const highestMoyenne = stagiaires[0].moyenne;

    for (let index = 1; index < stagiaires.length; index++) {
      if (stagiaires[index].moyenne > highestMoyenne) {
        highestMoyenne = stagiaires[index].moyenne;
      }
    } */

    // Methode reduce
    const highestMoyenne = stagiaires.reduce((max, stagiaire) => {
      return stagiaire.moyenne > max ? stagiaire.moyenne : max;
    }, stagiaires[0].moyenne);

    return highestMoyenne;
  };

  const lowestMoyenne = () => {
    const lowestMoyenne = stagiaires.reduce((low, stagiaire) => {
      return stagiaire.moyenne > low ? low : stagiaire.moyenne;
    }, stagiaires[0].moyenne);

    return lowestMoyenne;
  };

  const totalMoyenne = () => {
    console.log(stagiaires);
    let total = 0;
    stagiaires.forEach((stagiaire) => {
      total += Number(stagiaire.moyenne);
    });

    const average = total / stagiaires.length;
    console.log(average);

    return average;
  };

  return (
    <div className="App">
      <h1>Liste des Stagiaires</h1>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Matricule</th>
          <th>Nom</th>
          <th>Ville</th>
          <th>Code Postal</th>
          <th>Moyenne</th>
          <th>Supprimer</th>
          <th>Editer</th>
        </tr>

        {stagiaires.length > 0 ? (
          stagiaires.map((stagiaire, key) => (
            <tr key={key}>
              <td>{stagiaire.id}</td>
              <td>{stagiaire.matricule}</td>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.ville}</td>
              <td>{stagiaire.codepostal}</td>
              <td>{stagiaire.moyenne}</td>
              <td>
                <button onClick={() => handleDelete(stagiaire.id)}>
                  Supprimer
                </button>
              </td>
              <td>
                <button onClick={() => handleEdit(stagiaire.id)}>Editer</button>
              </td>
            </tr>
          ))
        ) : (
          <tr style={{ color: "red" }}>
            <td colSpan={8}>tableau des stagiaires vide</td>
          </tr>
        )}
      </table>
      <h1>Les stagiaires recherchés</h1>
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>Matricule</th>
          <th>Nom</th>
          <th>Ville</th>
          <th>Code Postal</th>
          <th>Moyenne</th>
        </tr>

        {searchedStagiaires?.length > 0 ? (
          searchedStagiaires.map((stagiaire, key) => (
            <tr key={key}>
              <td>{stagiaire.id}</td>
              <td>{stagiaire.matricule}</td>
              <td>{stagiaire.nom}</td>
              <td>{stagiaire.ville}</td>
              <td>{stagiaire.codepostal}</td>
              <td>{stagiaire.moyenne}</td>
            </tr>
          ))
        ) : (
          <tr style={{ color: "red" }}>
            <td colSpan={8}>tableau des stagiaires recherchés est vide</td>
          </tr>
        )}
      </table>
      <hr />
      id :{" "}
      <input
        type="number"
        name="id"
        value={stagiaireToEdit ? stagiaireToEdit.id : id}
        readOnly
      />
      <br />
      Matricule :
      <input
        type="number"
        name="matricule"
        value={
          data.matricule || (stagiaireToEdit ? stagiaireToEdit.matricule : "")
        }
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <br />
      <div style={{ color: "red" }}>{errors.matricule && errors.matricule}</div>
      Nom :{" "}
      <input
        type="text"
        name="nom"
        value={data.nom || (stagiaireToEdit ? stagiaireToEdit.nom : "")}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <br />
      <div style={{ color: "red" }}>{errors.nom && errors.nom}</div>
      Ville :{" "}
      <input
        type="text"
        name="ville"
        value={data.ville || (stagiaireToEdit ? stagiaireToEdit.ville : "")}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <br />
      <div style={{ color: "red" }}>{errors.ville && errors.ville}</div>
      CodePostal :{" "}
      <input
        type="number"
        name="codepostal"
        value={
          data.codepostal || (stagiaireToEdit ? stagiaireToEdit.codepostal : "")
        }
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <br />
      <div style={{ color: "red" }}>
        {errors.codepostal && errors.codepostal}
      </div>
      Moyenne :{" "}
      <input
        type="number"
        name="moyenne"
        value={data.moyenne || (stagiaireToEdit ? stagiaireToEdit.moyenne : "")}
        onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
      />
      <br />
      <div style={{ color: "red" }}>{errors.moyenne && errors.moyenne}</div>
      <button onClick={ajouterStagiaire}>Ajouter</button>
      <button onClick={handleSearch}>Filtrer ville et Nom</button>
      <button onClick={handleEmpty}>Vider</button>
      <button onClick={() => setSearchedStagiaires([])}>
        Initialiser recherche
      </button>
      <br />
      <ul>
        <li>La Moyenne générale la plus Elévée : {highestMoyenne()}</li>
        <li>La Moyenne générale la moins Elévée : {lowestMoyenne()}</li>
        <li>Le Moyenne de la class : {totalMoyenne()}</li>
      </ul>
    </div>
  );
}

export default App;
