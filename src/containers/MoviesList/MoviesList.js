import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchMovieList, testRunner } from "../../Store/actionCreators";

import MovieItem from "../../components/UI/MovieItem/MovieItem";
import classes from './MoviesList.sass'



const MoviesList = props => {

    const [state, setState] = useState({
        movies: []
    })


    useEffect(() => {
        fetch("http://localhost:4000/movies")
            .then(response => response.json())
            .then(body => body.data)
            .then(data => setState({movies: data}))
    }, [])

    return (
        <div className={classes.MoviesList}>
            {state.movies.map(elem => {
                return <MovieItem
                    key={elem.id}
                    id={elem.id}
                    title={elem.title}
                    genre={elem.genres}
                    release_date={elem.release_date}
                    img={elem.poster_path}
                    overview={elem.overview}
                    runtime={elem.runtime}
                    tagline={elem.tagline}
                    vote_average={elem.vote_average}
                />
                }
            )}
        </div>
    )

}

const mapStateToProps = (state) => ({
    movies: state.fetchMovies.moviesList
})
const mapDispatchToProps = {
    fetchMovieList,
    testRunner
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)

// export default MoviesList