import fetchCall from "./fetchcall";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Body from "./Body";



const Search = () => {
    const [estado,setEstado] = useState(false);
    const [movie, setMovie] = useState([]);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const text = params.get("palabra")
    //Datos de la Api
    let apiKey = '8f2a16d4f0d2593718febacdf7b1d495';
    let searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1&query=${text}`;

    useEffect(() => {
        console.log("Se ejecuta useEffect");
        if (text.length >=3) {
            fetchCall(searchEndPoint)
            .then(results => {
                setMovie(results);
                setEstado(false)
            })
        }else{
            setEstado(true);
        }
    },[text]);

    return (
        <ul className="row" id="popularMovies">
            {
                estado?
                <div className="dow">
                    <div className="alert alert-danger text-center" id="alert">Ingresa más de 3 letras</div>
                    <Body></Body>
                </div>
                :
                movie.results == 0?
                <h2 class="text">Tu búsqueda no arrojó resultados</h2>
                :
                movie.results?.map((movie, i) => {
                    return (
                        <div className="col-12 col-sm-6 col-lg-2 my-2" key={i}>
                            <div className="card h-100" key={i}>
                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg'} className="card-img-top" alt="" />
                                <div className="card-body" >
                                    <h5 className="card-title one-line-title">{movie.original_title}</h5>
                                    <Link to={`/detalle/${movie.id}`} className="btn btn-primary">Ver detalle</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </ul>
    )
}
export default Search;