// Card de cada repositório individual
function ListItem({ repo }) {
  return (
    <div className="card">
      <img src={repo.owner.avatar_url} alt={repo.owner.login} className="avatar" /> 
      <br />
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        {repo.owner.login}
      </a>
      <br />
      <div className="stars">⭐{repo.stargazers_count} Estrelas</div>
      <div className="name"> {repo.forks_count} Forks</div>
      <div className="name"> {repo.language} Liguagem</div>
      <div className="name"> {repo.open_issues_count} Issues</div>
      

    </div>
  );
}

export default ListItem;
