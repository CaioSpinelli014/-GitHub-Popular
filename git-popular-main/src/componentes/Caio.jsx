import React from 'react';
// Importação do CSS Module padronizado (necessário para os estilos)
import styles from "./Curriculo.module.css"; 

// Este é um componente estático, replicando a estrutura HTML
export default function CurriculoCaioSpinelliHTML() {
    
    // Caminho da foto estática
    const FOTO_URL = "/img/caio 3x4-70kb.jpg";
    
    return (
        <main className={styles.main}>
            
            <div className={styles.curriculoContainer}>
                
                {/* === BARRA LATERAL (ASIDE) === */}
                <aside className={styles.sidebar}>

                    {/* Contato (Estático) */}
                    <div className={styles.profile}>
                        <h2 className={styles.sidebarTitle}>Contato</h2>
                        <p className={styles.sidebarText}>
                            Estrada Das Ubais, 713 <br />
                            Recife, BR, 52061080
                        </p>
                        <p className={styles.sidebarText}>
                            (81) 9 9666-2409 <br />
                            caio.spinelli4050@gmail.com
                        </p>
                        <p className={styles.sidebarText}>
                            Nasc.: 10/02/2004
                        </p>
                    </div>

                    {/* HABILIDADES (Estrutura Estática) */}
                    <div>
                        <h2 className={styles.sidebarTitle}>Conhecimentos por Nível</h2>
                        
                        {/* Especialista */}
                        <div style={{marginBottom: '20px'}}>
                            <h3 className={styles.sidebarTitle} style={{marginTop: '15px'}}>Especialista</h3>
                            <ul className={styles.skillsList}>
                                <li className={styles.skillItem}>Linguagens: JavaScript, Python, HTML5, CSS, lógica de programação, Java</li>
                                <li className={styles.skillItem}>Português: Língua materna</li>
                            </ul>
                        </div>
                        
                        {/* Proficiente */}
                        <div style={{marginBottom: '20px'}}>
                            <h3 className={styles.sidebarTitle} style={{marginTop: '15px'}}>Proficiente</h3>
                            <ul className={styles.skillsList}>
                                <li className={styles.skillItem}>Soft Skills: Resolução de problemas, comunicação, trabalho em equipe, liderança</li>
                            </ul>
                        </div>
                        
                        {/* Intermediário */}
                        <div style={{marginBottom: '20px'}}>
                            <h3 className={styles.sidebarTitle} style={{marginTop: '15px'}}>Intermediário</h3>
                            <ul className={styles.skillsList}>
                                <li className={styles.skillItem}>Conceitos: Redes de Computadores, Análise de Sistemas, Programação Orientada a Objetos (noções), APIs REST (noções)</li>
                                <li className={styles.skillItem}>Metodologias: Metodologias ativas, Fabricação Digital, Aprendizagem Baseada em Projetos (ABP) / Project Based Learning (PBL), Área maker, Gamificação</li>
                            </ul>
                        </div>
                        
                        {/* Básico */}
                        <div style={{marginBottom: '20px'}}>
                            <h3 className={styles.sidebarTitle} style={{marginTop: '15px'}}>Básico</h3>
                            <ul className={styles.skillsList}>
                                <li className={styles.skillItem}>Banco de Dados: MySQL (básico), SQL (básico)</li>
                                <li className={styles.skillItem}>Ferramentas: Git, django, React, VS Code, PyCharm, Eclipse, Scratch, Arduino</li>
                                <li className={styles.skillItem}>Inglês (A2)</li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* === CONTEÚDO PRINCIPAL (MAIN CONTENT) === */}
                <section className={styles.mainContent}>

                    {/* Título e FOTO (Estático) */}
                    <header>
                        <div className={styles.profileHeader}>
                            {/* Uso da foto estática */}
                            <img
                                src={FOTO_URL}
                                alt="Foto de Perfil de Caio Afonso"
                                className={styles.profilePhoto} 
                            />
                            <div className={styles.profileInfo}>
                                <h1 className={styles.profileInfoTitle}>Caio Afonso Ferreira Spinelli</h1>
                                <h3 className={styles.profileInfoSubtitle}>Técnico em T.I.</h3>
                                <h3 className={styles.profileInfoSubtitle}>Desenvolvedor de Software em Formação</h3>
                            </div>
                        </div>
                    </header>

                    <hr />

                    {/* Objetivo Profissional (Estático) */}
                    <section>
                        <h2 className={styles.title2}>🎯 Objetivo</h2>
                        <p className={styles.profileText}>Em busca de oportunidade, de forma a contribuir para o crescimento da empresa. Criei uma paixão por programação, quero, vou estudar, aprender e focar nas tecnologias para o desenvolvimento de software!</p>
                        <p className={styles.text}>E no caminho para aumentar meus conhecimentos vou fazer mestrado e doutorado!</p>
                    </section>

                    <hr />

                    {/* Histórico Profissional (Estático) */}
                    <section>
                        <h2 className={styles.title2}>🛠️ Histórico Profissional</h2>
                        <div className={styles.text}>
                            <h3 className={styles.title3}>Técnico em T.I</h3>
                            <p>Editora Bagaço, Igarassu, PE | 2023-07 - Atual</p>
                            <ul className={styles.list}>
                                <li className={styles.listItem}><strong>Suporte ao Usurário:</strong> Atender chamados, resolver problemas de software e hardware, Auxiliar usuários com problemas em sistemas, e-mails e acessos.</li>
                                <li className={styles.listItem}><strong>Manutenção de Equipamentos:</strong> Diagnosticar e reparar computadores, impressoras e dispositivos de rede.</li>
                                <li className={styles.listItem}>Instalar e atualizar sistemas operacionais e softwares, Configurar e monitorar redes LAN, WAN e Wi-Fi. Verificar o funcionamento de servidores, roteadores e switches.</li>
                                <li className={styles.listItem}><strong>Controle de Inventário:</strong> Gerenciar o inventário de equipamentos e softwares da empresa; Acompanhar contratos e licenças de software.</li>
                                <li className={styles.listItem}><strong>Backup e Recuperação de Dados:</strong> Realizar backups periódicos de sistemas e dados; Recuperar arquivos em caso de falhas ou ataques cibernéticos, além do ambiente de informática.</li>
                                <li className={styles.listItem}><strong>Adendo:</strong> trabalho e auxilio no setor de produção.</li>
                                <li className={styles.listItem}>Atuação na área de divulgação e capacitação, auxiliando no fornecimento de conteúdos e na formação de equipes, contribuindo para o desenvolvimento de projetos educacionais.</li>
                            </ul>
                        </div>
                    </section>

                    <hr />

                    {/* Formação Acadêmica (Estático) */}
                    <section>
                        <h2 className={styles.title2}>🎓 Formação Acadêmica</h2>
                        <div className={styles.text}>
                            <h3 className={styles.title3}>Tecnólogo em ADS: Programação e T.I</h3>
                            <p>Universidade Uninassau - Recife | Cursando (2025-08 - 2026-01)</p>
                        </div>
                        <div className={styles.text}>
                            <h3 className={styles.title3}>Tecnólogo: Programação e T.I</h3>
                            <p>FIAP - São Paulo, SP | Trancado (2024-01 - 2025-06)</p>
                        </div>
                    </section>

                    <hr />

                    {/* Certificações (Estático) */}
                    <section>
                        <h2 className={styles.title2}>🏅 Certificações e Cursos</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Certificação em Lógica de Programação - 30 horas (remoto) | Udemy | out 2023</li>
                            <li className={styles.listItem}>Certificação em Full Stack - Backend, Frontend e Data Science - Presencial Infity School | mai 2024 - Atual</li>
                            <li className={styles.listItem}>Curso de Python 3 do básico ao avançado - remoto | Udemy | Atual</li>
                            <li className={styles.listItem}>Java COMPLETO Programação Orientada a Objetos + Projetos - remoto | Udemy | Atual</li>
                            <li className={styles.listItem}>Curso completo de Arduino do Zero, Eletrônica + 15 Projetos | Udemy | Atual</li>
                        </ul>
                    </section>

                </section>

            </div>

        </main>
    );
}