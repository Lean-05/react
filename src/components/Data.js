import { Component } from "react";
import fetchCall from "./fetchcall";
import Info from "./Info";

class Data extends Component {
    constructor(props) {
        super();
        this.state = {
            movieId: props.match.params.id,
            movies: []
        }
    }

    componentDidMount() {
        console.log("Se creo el componente en detail");
        const movie_Id = this.state.movieId;
        let apiKey = '8f2a16d4f0d2593718febacdf7b1d495';
        let detailEndPoint = `https://api.themoviedb.org/3/movie/${movie_Id}?api_key=${apiKey}&language=es-ES`;
        fetchCall(detailEndPoint)
            .then(movie => {
                this.setState({ movies: movie })
            })
    }
    render() {
        return (
           <Info movie={this.state.movies}/>
        )
    }
}
export default Data;