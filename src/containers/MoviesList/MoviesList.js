import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

import MovieItem from "../../components/UI/MovieItem/MovieItem";
import classes from './MoviesList.sass'



const MoviesList = props => {

    const moviesArr = (moviesToShow) => {
        switch (moviesToShow){
            case 'All':
                return props.movies
            case 'Documentary':
                return props.documentaryMovies
            case 'Comedy':
                return props.comedyMovies
            case 'Horror':
                return props.horrorMovies
            case 'Crime':
                return props.crimeMovies
            default: return null
        }
    }


    return (
        <div className={` ${classes.MoviesList}`}>
            {props.movies
                ? moviesArr(props.moviesToShow).map(elem => {
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
    movies: state.fetchMovies.moviesList,
    documentaryMovies: state.fetchMovies.documentaryMoviesList,
    comedyMovies: state.fetchMovies.comedyMoviesList,
    horrorMovies: state.fetchMovies.horrorMoviesList,
    crimeMovies: state.fetchMovies.crimeMoviesList,

    moviesToShow: state.fetchMovies.moviesToShow
})


export default connect(mapStateToProps, null)(MoviesList)
