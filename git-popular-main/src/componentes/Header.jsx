import { Link } from "react-router-dom";
export default function Header({ darkMode, alternarDarkMode }) {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h1> Projetos Populares do GitHub </h1>
      </Link>
      
      <button className="meu-button" onClick={alternarDarkMode}>
        {darkMode ? "☀️ Claro" : "🌙 Escuro"}
      </button>
    </header>
  );
}