import { Component } from "react";
import Card from "./Card";
import fetchCall from "./fetchcall";

class Body extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    /*Montamos el Componente */
    componentDidMount() {
        console.log("Se creo el componente");
        let apiKey = '8f2a16d4f0d2593718febacdf7b1d495';
        let popularEndPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=es-ES&sort_by=popularity.desc&page=1`;
        fetchCall(popularEndPoint)
            .then(movie => {
                this.setState({ movies: movie })
            })
    }

    render() {
        return (
            <ul className="row" id="popularMovies">
                {
                    this.state.movies.results?.map((movie,i) => {
                        return (
                            <Card movie={movie} key={i} ></Card>
                        )
                    })
                }
            </ul>
        )
    }
}

export default Body;