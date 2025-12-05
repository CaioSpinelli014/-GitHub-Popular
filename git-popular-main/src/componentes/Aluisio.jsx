import styles from "./Curriculo.module.css";

export default function Curriculo() {
  return (
    <main className={styles.main}>
      <div className={styles.curriculoContainer}>

        {/* PERFIL */}

        <section className={styles.mainContent}>
          <div className={styles.profileHeader}>
            <img
              src="/img/foto_verde_cinza.png"
              alt="Foto de Perfil"
              className={styles.profilePhoto}
            />

            <div className={styles.profileInfo}>
              <h1 className={styles.profileInfoTitle}>Aluisio R. S. B. Neto</h1>
              <h3 className={styles.profileInfoSubtitle}>Designer Gráfico</h3>
              <h3 className={styles.profileInfoSubtitle}>Front-End Developer</h3>
            </div>
          </div>

          <p className={styles.profileText}>
            Sou Designer Gráfico com mais de 12 anos de experiência em pré-impressão,
            tratamento de imagens. Tenho formação em Administração de Empresas e em
            Computação Gráfica, o que me permite unir visão técnica e estratégica ao lado
            criativo. Ao longo da minha carreira, desenvolvi habilidades com softwares como
            CorelDRAW, Illustrator, Photoshop, InDesign e Acrobat, além de vivência prática
            em impressão digital, diagramação e fechamento de arquivos em alta resolução.
          </p>

          <p className={styles.text}>
            Estou cursando Análise e Desenvolvimento de Sistemas. Essa nova etapa
            representa um grande passo na minha formação profissional, permitindo
            aprofundar conhecimentos em programação, desenvolvimento de software e
            soluções tecnológicas, preparando-me para atuar no mercado de TI com ainda
            mais competência e inovação.
          </p>

          <p className={styles.text}>
            Sou uma pessoa organizada, comprometida e atenta aos detalhes, sempre focado
            em entregar resultados de qualidade e colaborar para o sucesso da equipe e da
            empresa.
          </p>

          {/* EXPERIÊNCIA */}

          <section>
            <h2 className={styles.title2}>Experiência Profissional</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>2023 – 2025 - Agência FlipTravel - Consultor de Viagem</li>
              <li className={styles.listItem}>2011 – 2021 - Gráfica AÚnica - Designer Gráfico</li>
              <li className={styles.listItem}>2007 – 2009 – Mosteiro de São Bento de Olinda - Auxiliar Administrativo</li>
              <li className={styles.listItem}>1999 – 2006 - Buffer Ana Lima Recepções - Gerente</li>
            </ul>
          </section>


          {/* EDUCAÇÃO */}

          <section>
            <h2 className={styles.title2}>Educação</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>Administração de Empresa - FAPE</li>
              <li className={styles.listItem}>Curso de Computação Gráfica SAGA (Adobe)</li>
              <li className={styles.listItem}>Cursando Análise e Desenvolvimento de Sistemas - UNINASSAU</li>
            </ul>
          </section>


          {/* PROJETOS */}

          <section>
            <h2 className={styles.title2}>Projetos</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Site Universitário —{" "}
                <a href="https://github.com/AluisioRSBNeto/Desenvolvimento-Web---Prof-Thiago/tree/main/atividade_site_universitario">
                  Clique aqui
                </a>
              </li>

              <li className={styles.listItem}>
                Desafio Caixa Eletrônico —{" "}
                <a href="https://github.com/AluisioRSBNeto/atividades-frontend/tree/main/desafio_caixa_eletronico">
                  Clique aqui
                </a>
              </li>

              <li className={styles.listItem}>
                Site Sanduíche Programado —{" "}
                <a href="https://github.com/AluisioRSBNeto/sanduiche_programado">
                  Clique aqui
                </a>
              </li>
            </ul>
          </section>
        </section>


        {/* BARRA LATERAL */}

        <aside className={styles.sidebar}>

          {/* CONTATO */}
          <div>
            <h2 className={styles.sidebarTitle}>Contato</h2>

            <p className={styles.sidebarText}>
              Rua do Resende, 39<br />
              Camaragibe-PE - 54.753-145
            </p>

            <p className={styles.sidebarText}>
              (81) 98201-7956<br />
              aluisio.ramalho@yahoo.com.br
            </p>

            <div style={{ marginTop: "20px" }}>
              <a href="https://www.linkedin.com/in/aluisiorsbneto">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </a>

              <a href="https://github.com/AluisioRSBNeto">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                  alt="GitHub"
                  className={styles.socialIcon}
                />
              </a>

              <a href="https://www.instagram.com/aluisioramalho?igsh=MW85bXU3amF6cW1uMg==">
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                  alt="Instagram"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>

          {/* HABILIDADES */}
          <div>
            <h2 className={styles.sidebarTitle}>Conhecimentos</h2>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>HTML - CSS - JavaScript</li>
              <li className={styles.skillItem}>React - API Rest</li>
              <li className={styles.skillItem}>Pacote Office</li>
              <li className={styles.skillItem}>CorelDRAW</li>
              <li className={styles.skillItem}>Adobe Photoshop</li>
              <li className={styles.skillItem}>Adobe Illustrator</li>
              <li className={styles.skillItem}>Adobe InDesign</li>
              <li className={styles.skillItem}>Adobe Acrobat PDF</li>
            </ul>
          </div>

        </aside>
      </div>
    </main>
  );
}
