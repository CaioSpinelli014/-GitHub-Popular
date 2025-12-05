import { Link } from "react-router-dom"; // 1. Importa o componente 'Link' do React Router DOM para navegação interna sem recarregar a página.

// 2. Define e exporta o componente funcional padrão do rodapé.
export default function Footer() {
  
  // 3. O componente retorna a marcação JSX (o que será renderizado na tela).
  return (
    // 4. Define o elemento de rodapé HTML, aplicando estilos inline básicos para formatação centralizada.
    <footer style={{padding:'20px',textAlign:'center'}}>
      <details>
        <summary className="Ssummary">Quem somos</summary>
        

      <Link to="/curriculo">Currículo Aluisio</Link> 
      

      <span style={{ margin: '0 15px' }}>|</span> 
      

      <Link to="/CurriculoCaioSpinelli">Currículo Caio</Link> 
      
      <span style={{ margin: '0 15px' }}>|</span>

      <Link to="/CurriculoLeandro">Currículo leandro</Link>

      <span style={{ margin: '0 15px' }}>|</span>

      <Link to="/CurriculoAndrezaLuna">Currículo luna</Link>
     
      <br/> 
      
      © 2025 — Curriculo dos integrantes

      </details>
      
    </footer>
  );
}