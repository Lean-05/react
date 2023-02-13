import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';
    return (
        <div className="col-12 col-sm-6 col-lg-3 my-2" key={movie.id}>
            <div className="card h-100">
                <img src={imageUrl} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title one-line-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview.substr(0, 80).trim()}...</p>
                    <Link to={`/detalle/${movie.id}`} className="btn btn-primary">Ver detalle</Link>
                </div>
            </div>
        </div>
    )
}
export default Card;