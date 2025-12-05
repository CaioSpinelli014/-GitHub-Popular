import React from 'react'; 
// Importação do arquivo CSS (lunaA.css)
import "./lunaA.css"; 

/**
 * Componente funcional CurriculoAndrezaLuna
 * Renderiza o layout de um currículo em formato de página web.
 */
export default function CurriculoAndrezaLuna() { 
    
    // Caminho da foto estática (melhor prática: armazenar em uma constante)
    const FOTO_URL = "/img/luna.jpeg";
    
    return (
        // O container principal do layout
        <main className="main">
            
            <div className="curriculoContainer">
                
                {/* === BARRA LATERAL (ASIDE) === */}
                <aside className="sidebar">

                    {/* Contato (Removida a div "profile" redundante e tags de citação) */}
                    <div className="sidebarSection">
                        <h2 className="sidebarTitle">Contato</h2>
                        <p className="sidebarText">📍 Recife - PE</p>
                        <p className="sidebarText">📞 (81) 99775-0434 (WhatsApp)</p>
                        <p className="sidebarText">📧 bandeiralunaa@gmail.com</p>
                    </div>

                    {/* HABILIDADES TÉCNICAS */}
                    {/* A propriedade style={{marginBottom: '20px'}} foi removida e deve ser tratada no CSS (.sidebarSection) */}
                    <div className="sidebarSection"> 
                        <h2 className="sidebarTitle">Habilidades Técnicas</h2>
                        <ul className="skillsList">
                            <li className="skillItem">Fundamentos em Lógica, HTML, CSS e JavaScript</li>
                            <li className="skillItem">Noções de Metodologias Ágeis (Scrum)</li>
                            <li className="skillItem">Pacote Office e Sistemas PDV</li>
                            <li className="skillItem">Gestão de Fluxo de Caixa e Estoque</li>
                        </ul>
                    </div>
                    
                    {/* Redes */}
                    {/* A propriedade style={{marginBottom: '20px'}} foi removida e deve ser tratada no CSS (.sidebarSection) */}
                    <div className="sidebarSection">
                        <h2 className="sidebarTitle">Redes</h2>
                        <p className="sidebarText">
                            <a 
                                href="https://linkedin.com/in/andreza-luna-561715229" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </p>
                    </div>
                </aside>

                {/* === CONTEÚDO PRINCIPAL (MAIN CONTENT) === */}
                <section className="mainContent">

                    {/* Título e FOTO (Header) */}
                    <header className="profileHeaderContainer">
                        <div className="profileHeader">
                            {/* Uso da foto placeholder */}
                            <img
                                src={FOTO_URL}
                                alt="Foto de Perfil de Andreza Bandeira"
                                className="profilePhoto" 
                            />
                            <div className="profileInfo">
                                <h1 className="profileInfoTitle">ANDREZA BANDEIRA DE LUNA</h1>
                                <h3 className="profileInfoSubtitle">Desenvolvimento de Sistemas</h3>
                                <h3 className="profileInfoSubtitle">Foco em Programação e Tecnologia</h3>
                            </div>
                        </div>
                    </header>

                    <hr className="divider" /> {/* Classe 'divider' para estilização */}

                    {/* OBJETIVO PROFISSIONAL */}
                    <section className="sectionContent"> {/* Classe 'sectionContent' para consistência */}
                        <h2 className="title2">🎯 Objetivo</h2>
                        <p className="text">
                            Atuar na área de programação e tecnologia.
                        </p>
                    </section>

                    <hr className="divider" />

                    {/* FORMAÇÃO ACADÊMICA */}
                    <section className="sectionContent">
                        <h2 className="title2">🎓 Formação Acadêmica</h2>
                        <div className="textBlock"> {/* Renomeado de .text para .textBlock para evitar conflito com .text */}
                            <h3 className="title3">Graduação em Análise e Desenvolvimento de Sistemas (Cursando)</h3>
                            <p>UNINASSAU - Recife, PE | Previsão de Conclusão: Dezembro/2026</p>
                        </div>
                    </section>
                    
                    <hr className="divider" />

                    {/* EXPERIÊNCIA PROFISSIONAL */}
                    <section className="sectionContent">
                        <h2 className="title2">🛠️ Experiência Profissional</h2>
                        
                        {/* Experiência 1: Empreendedora */}
                        <div className="textBlock">
                            <h3 className="title3">Empreendedora (Barbearia e Autopeças) | 2017 - Atual</h3>
                            <p>
                                Experiência de 8 anos em gestão de negócios, demonstrando autonomia, proatividade e visão estratégica.
                            </p>
                            <ul className="list">
                                <li className="listItem">
                                    Responsável pela administração financeira (controle de caixa e contas a pagar/receber), gestão de compras e estoque.
                                </li>
                                <li className="listItem">
                                    Atendimento ao cliente e negociação com fornecedores.
                                </li>
                            </ul>
                        </div>
                        
                        {/* Experiência 2: Fiscal de Caixa */}
                        <div className="textBlock">
                            <h3 className="title3">Fiscal de Caixa - Tem Melhor em Alimentos | 04/2016 - 12/2016</h3>
                            <ul className="list">
                                <li className="listItem">
                                    Atuação na supervisão e coordenação da frente de caixa.
                                </li>
                                <li className="listItem">
                                    Solucionando divergências de transações e garantindo a conformidade dos procedimentos internos.
                                </li>
                            </ul>
                        </div>
                    </section>

                </section>

            </div>

        </main>
    );
}