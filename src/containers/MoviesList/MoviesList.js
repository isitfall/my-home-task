import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import MovieItem from "../../components/UI/MovieItem/MovieItem";
import classes from './MoviesList.sass'



const MoviesList = props => {

    return (
        <div className={` ${classes.MoviesList}`}>
            {props.movies
                ? props.movies.map(elem => {
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
            })
            : null }
        </div>
    )

}

const mapStateToProps = (state) => ({
    movies: state.fetchMovies.moviesList
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, null)(MoviesList)

// export default MoviesList