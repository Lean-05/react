import { Link } from "react-router-dom"

const Info = ({movie}) =>{
    let imageDetail = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';
    return (
        <div className="row " id="movieDetail">
            <div className="col-12 col-md-4">
                <img src={imageDetail} alt="" id="movieImg" className="rounded img-thumbnail" />
            </div>
            <div className="col-12 col-md-8" id="movieInfo">
                <h2>Título: {movie.original_title} </h2>
                <h5>Géneros: </h5>
                <ul className="generos">
                    {
                        movie.genres?.map((genero, i) => {
                            return (
                                <li key={i}>
                                    {genero.name}
                                </li>
                            )
                        })
                    }
                </ul>
                <h5>Reseña: </h5>
                <p className="info"> {movie.overview || 'Sin reseña.'} </p>
                <h5 id="rating">Rating: {movie.vote_average} </h5>
                <Link to="/" className="btn btn-dark my-3">volver al listado</Link>
            </div>
        </div>
    )
}

export default Info;