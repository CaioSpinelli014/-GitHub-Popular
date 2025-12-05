import { Routes, Route } from "react-router-dom";
import {useEffect, useState} from "react";

import Header from "./componentes/Header";
import Section from "./componentes/Section";
import List from "./componentes/List";
import Curriculo from "./componentes/Aluisio";
import CurriculoCaioSpinelli from "./componentes/Caio";
import CurriculoLeandro from "./componentes/Leandro";
import CurriculoAndrezaLuna from "./componentes/luna";
import Footer from "./componentes/Footer";

function App() {

  const languages = ["Todos", "JavaScript", "Python", "Go", "Ruby", "Java"];

  const [activeLang, setActiveLang] = useState("Todos");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const reposPerPage = 5;

  const fetchRepos = async (language) => {
    setLoading(true);
    setCurrentPage(1);

    let url = "";
    if (language === "Todos") {
      url = `https://api.github.com/search/repositories?q=stars:>10000&sort=stars&order=desc&per_page=28`;
    } else {
      url = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=28`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setRepos(data.items || []);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos(activeLang);
  }, [activeLang]);

  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
  const totalPages = Math.ceil(repos.length / reposPerPage);

  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const alternarDarkMode = () => setDarkMode((prev) => !prev);

  return (
    
      <div className={darkMode ? "container dark-mode" : "container"}>

      <Header darkMode={darkMode} alternarDarkMode={alternarDarkMode}/>

      {/* Rotas do seu site */}
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Section
                languages={languages}
                activeLang={activeLang}
                setActiveLang={setActiveLang}
              />

              {loading ? (
                <p>Carregando repositórios...</p>
              ) : (
                <List
                  repos={currentRepos}
                  reposLength={repos.length}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  nextPage={nextPage}
                  prevPage={prevPage}
                />
              )}
            </>
          }
        />

        {/* Página do currículo */}
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/CurriculoCaioSpinelli" element={<CurriculoCaioSpinelli />} />
        <Route path="/CurriculoLeandro" element={<CurriculoLeandro />} />
        <Route path="/CurriculoAndrezaLuna" element={<CurriculoAndrezaLuna />} />

      </Routes>

      <Footer />
    </div>
    
  );
}

export default App;
