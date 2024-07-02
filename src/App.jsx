import { useState,} from "react";
import "./App.css";

//PARTE DAS FUNÇÕES
function App() {
  const [inputId, setInputId] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [origin, setOrigin] = useState("");
  const [location, setLocation] = useState("");
  const [created, setCreated] = useState("");
  const [image, setImage] = useState("");
  const [episode, setEpisode] = useState("");
  

  const searchChar = async () => {
    const url = `https://rickandmortyapi.com/api/character/${inputId}`;
    const response = await fetch(url);
    const returne = await response.json();
    // AONDE RETORNA E PUXA AS FUNÇÕES
    setName(returne.name);
    setStatus(returne.status);
    setSpecies(returne.species);
    setGender(returne.gender);
    setOrigin(returne.origin.name);
    setLocation(returne.location.name);
    setCreated(returne.created);
    setImage(returne.image);

    const episodeNumbers = returne.episode.map((url) => url.split("/").pop());
    const episodes = episodeNumbers.join(", ");
    setEpisode(episodes);

    setImage(returne.image);
  };
  //CONVERTENDO DE STRING PARA NÚMERO E FUNÇÃO DO INPUT
  const handleSubmit = (event) => {
    event.preventDefault();
    searchChar();
    setInputId(Number(inputId));
  
  };
  // USE EFFECT, FUNÇÃO QUE SÓ DIGITA O ID NO CAMPO DE PESQUISA E JÁ PESQUISA AUTOMATICAMENTE...
  // USEI O USE EFFECT PARA PUXAR O PRIMEIRO PERSONAGEM ASSIM QUE O SITE ATUALIZAR OU ENTRAR.
 

  // BOTÕES DE PRÓXIMO E ANTERIOR
  const charNext = () => {
    setInputId((nextId) => nextId + 1);
  };

  const charPrev = () => {
    setInputId((prevId) => (prevId > 1 ? prevId - 1 : 1));
  };
  // LAYOUT COM AS INFORMAÇÕES
  return (
    <>
      <div header="true" className="container text-center">
        <div className="row align-items-center">
          <div className="col"></div>
          <div className="col">
            <img src="./ricklogo.png" className="card-img" alt="logo" />
          </div>
          <div className="col"></div>
        </div>
      </div>
      <main>
        <div className="container px-4 text-center">
          <div className="row gx-5">
            <div className="col">
              <div className="p-3 bg-light">
                <img src={image} alt="personagem" width="75%" height="50%" />
              </div>
            </div>
            <div className="col">
              <div className="p-3 border bg-light">
                <ul className="list-group">
                  <li className="list-group-item">
                    Name: <span id="name"></span>
                    {name || "- - -"}
                  </li>
                  <li className="list-group-item">
                    Status:{" "}
                    <span className="tx-n" id="status">
                      {" "}
                    
                    </span>
                    {status || ""}
                  </li>
                  <li className="list-group-item">
                    Espécies: <span id="species"></span>
                    {species || ""}
                  </li>
                  <li className="list-group-item">
                    Gênero: <span id="gender"></span>
                    {gender || ""}
                  </li>
                  <li className="list-group-item">
                    Origem: <span id="origin"></span>
                    {origin || ""}
                  </li>
                  <li className="list-group-item">
                    Localidade: <span id="location"></span>
                    {location || ""}
                  </li>
                  <li className="list-group-item">
                    Criada: <span id="created"></span>
                    {created || ""}
                  </li>
                </ul>
              </div>
              <form className="row g-3" />
              <div className="col-auto ">
                <label htmlFor="staticEmail2" className="visually-hidden">
                  ID DO PERSONAGEM
                </label>
                <input
                  type="text"
                  className="form-control-plaintext"
                  readOnly
                />
              </div>
              <div className="col-auto d-flex">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  ID DO PERSONAGEM
                </label>
                <form onSubmit={handleSubmit}>
                  <input
                    
                    className="form-control"
                    id="id"
                    placeholder="DIGITE O ID"
                    value={inputId}
                    onChange={(e) => setInputId(Number(e.target.value))}
                    
                  />
                  <button className="btn btn-primary mb-3 d-flex">
                    Pesquisar
                  </button>
                  <button className="page-link" onClick={charPrev}>
                      Anterior
                    </button>
                    <button className="page-link" onClick={charNext}>
                      Próximo
                    </button>
                </form>
              </div>
              <div nav="true" aria-label="...">
      
                   
      
                <div>
                  <li className="list-group-item">
                    Episódios:{" "}
                    <span
                      className="tx-n"
                      id="episode"
                      style={{
                        display: "inline-block",
                        width: "320px",
                        whiteSpace: "wrap",
                        overflow: "hidden",
                        // textOverflow: "ellipsis",
                        lineHeight: "1",
                        verticalAlign: "middle",
                      }}
                    >
                      {" "}
                      {episode || "- - -"}
                    </span>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
