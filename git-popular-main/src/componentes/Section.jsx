// Botões de seleção de linguagem
function Section({ languages, activeLang, setActiveLang }) {
  return (
    <section className="filter-buttons">
      {languages.map((lang) => (
        <button
          key={lang}
          className={activeLang === lang ? "active" : ""}
          onClick={() => setActiveLang(lang)}
        >
          {lang}
        </button>
      ))}
    </section>
  );
}

export default Section;
