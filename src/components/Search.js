import fetchCall from "./fetchcall";
import { useState, useEffect, useRef } from "react";



const Search = () => {
    const [users, setUser] = useState([]);
    const [text, setText] = useState("");
    const texto = useRef();
    //Datos de la Api
    let apiKey = '8f2a16d4f0d2593718febacdf7b1d495';
    let searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1&query=${text}`;

    useEffect(() =>{
        console.log("Se ejecuta useEffect");
        fetchCall(searchEndPoint)
            .then(results => {
                setUser(results);
            })
    },[text]);

    const searchMovie = (e) =>{
        e.preventDefault();
        console.log("Estamos buscando un resultado");
        console.log(texto.current);
    }

    let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'images/no-poster.jpg';
    return (
        <div className="col-12 col-sm-6 col-lg-2 my-2">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title one-line-title">{movie.original_title}</h5>
                    {/*<a href="detalle.html?movieId=${movie.id}" className="btn btn-primary">Ver detalle </a>*/}
                </div>
            </div>
        </div>
    )
}
export default Search;