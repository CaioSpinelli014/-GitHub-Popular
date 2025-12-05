import ListItem from "./ListItem";

// Lista de repositórios + paginação
function List({ repos, reposLength, currentPage, totalPages, nextPage, prevPage }) {
  return (
    <div>
      <div className="card-grid">
        {/* Mapeia cada repositório e mostra o componente ListItem */}
        {repos.map((repo) => (
          <ListItem key={repo.id} repo={repo} />
        ))}
      </div>

      {/* Paginação */}
      {reposLength > 5 && (
        <div className="pagination">
          <button className="meu-button" onClick={prevPage} disabled={currentPage === 1}>
            ⬅ Anterior
          </button>
          <span>
            Página {currentPage} de {totalPages}
          </span>
          <button className="meu-button" onClick={nextPage} disabled={currentPage === totalPages}>
            Próximo ➡
          </button>
        </div>
      )}
    </div>
  );
}

export default List;
