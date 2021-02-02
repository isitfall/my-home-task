import React from 'react';
import {connect} from 'react-redux';

import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import SearchCounter from "../../UI/SearchCounter/SearchCounter";
import MoviesList from "../../../containers/MoviesList/MoviesList";
import NoMovieFound from "../NoMovieFound/NoMovieFound";

import classes from './MainSection.sass'

const MainSection = (props) => {
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

    return(
        <section className={classes.MainSection}>
            <Container>
                <Nav/>
                {
                    props.movies
                    ? moviesArr(props.moviesToShow).length
                        ?(<>
                            <SearchCounter moviesListLength={moviesArr(props.moviesToShow).length}/>
                            <MoviesList />
                        </>)
                        : <NoMovieFound/>
                    : null
                }

            </Container>
        </section>
    )
}

const mapStateToProps = state => ({
    movies: state.fetchMovies.moviesList,
    documentaryMovies: state.fetchMovies.documentaryMoviesList,
    comedyMovies: state.fetchMovies.comedyMoviesList,
    horrorMovies: state.fetchMovies.horrorMoviesList,
    crimeMovies: state.fetchMovies.crimeMoviesList,

    moviesToShow: state.fetchMovies.moviesToShow,

})


export default connect(mapStateToProps, null) (MainSection)