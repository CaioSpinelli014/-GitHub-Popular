// Importa o React, que é a base da biblioteca
import React from "react";
// Importa o ReactDOM, responsável por renderizar os componentes na tela
import ReactDOM from "react-dom/client";
// Importa o componente principal da aplicação
import App from "./App";
// Importa o CSS principal
import "./App.css";

// Cria o ponto principal de renderização dentro da div "root" (em public/index.html)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renderiza o componente App dentro do React.StrictMode (modo que ajuda a identificar erros)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
