import "./Curriculo.css";


export default function CurriculoLeandro() {
  return (
    
    <div className="curriculoContainer">
      <main className="main-content">
        {/* PERFIL */}
        <section className="perfil">
          <div className="perfil-header">

            <img src="/img/leandro.jpeg" alt="Foto de perfil" className="perfil-img" /> 

            <div className="perfil-info">
              <h1 className="titulo1">Leandro Seara da Silva</h1>
              <h3 className="titulo3">Estudante</h3>
              <h3 className="titulo3">Front-End Developer</h3>
            </div>
          </div>

          <p className="perfil-text">
            Sou esstudante estudante de Análise e Desenvolvimento de Sistemas,
          </p>

          <p className="paragrafoLi">
            Estou cursando Análise e Desenvolvimento de Sistemas, aprofundando
            conhecimentos em programação, desenvolvimento de software e
            tecnologia, principalmente na área de Front-End.
          </p>

          <p className="paragrafoLi">
            Sou curioso, gosto de aprender novos assuntos e me sinto empolgado
            com novos desafios.
          </p>
        </section>

        {/* EXPERIÊNCIA */}
        <section>
          <h2 className="titulo2">Experiência Profissional</h2>
          <ul className="formatUl">
            <li className="paragrafoLi">2016 - 2023 - Secretaria de Administração de Pernambuco (SAD) - Expresso Cidadão - Assistente Administrativo e Atendente</li>
            <li className="paragrafoLi">2012 - 2013 - Laboratório de Imunopatologia Keizo Asami (LIKA/UFPE) - Estagiário</li>
            <li className="paragrafoLi">2011 - 2012 - Instituto Aggeu Magalhães (FIOCRUZ/PE) - Estagiário</li>
          </ul>
        </section>

        {/* EDUCAÇÃO */}
        <section>
          <h2 className="titulo2">Educação</h2>
          <ul className="formatUl">
            <li className="paragrafoLi">Bacharel em Ciências Biológicas - UPE</li>
            <li className="paragrafoLi">Análise e Desenvolvimento de Sistemas - UNINASSAU (cursando)</li>
          </ul>
        </section>
      </main>

      {/* BARRA LATERAL */}
      <aside className="barra-lateral">
        <div className="contact">
          <h2 className="titulo2">Contato</h2>
          <h3 className="titulo3">telefone:</h3>
          <p className="paragrafoLi">
            (81) 98503-8703
            <br />
          </p>
          <h3 className="titulo3">email:</h3>
          <p className="paragrafoLi">
            leandroseara3@hotmail.com
            <br />
            ou
            <br />
            leandroseara03@gmail.com
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
                alt="LinkedIn"
              />
            </a>
            <a href="https://github.com/LeandroSearadaSilva">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
                alt="GitHub"
              />
            </a>
            <a href="https://www.instagram.com/leandroseara03/">
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </div>

        <div className="habilidades">
          <h2 className="titulo2">🧠 Competências e Habilidades</h2>
          <ul className="formatUl">
            <li className="paragrafoLi">🤝 Comunicação empática e atendimento ao cliente</li>
            <li className="paragrafoLi">🧩 Resolução de problemas e trabalho colaborativo.</li>
            <li className="paragrafoLi">🧘‍♂️ Paciência e calma no atendimento.</li>
            <li className="paragrafoLi">👂 Escuta ativa e comunicação empática.</li>
            <li className="paragrafoLi">🎯 Foco na satisfação do cliente (orientação).</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}