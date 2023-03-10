import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const searchMovie = (e) => {
    let input = e.target.search.value;
    e.preventDefault();
    history.push(`/results?palabra=${input}`)
    e.target.search.value = "";
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MovFlix</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={(event) => searchMovie(event)}>
            <input className="form-control me-2" type="text" name="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header;