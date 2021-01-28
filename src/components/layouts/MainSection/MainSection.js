import React from 'react';
import {connect} from 'react-redux';

import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import SearchCounter from "../../UI/SearchCounter/SearchCounter";
import MoviesList from "../../../containers/MoviesList/MoviesList";
import NoMovieFound from "../NoMovieFound/NoMovieFound";

import classes from './MainSection.sass'

const MainSection = (props) => {
    return(
        <section className={classes.MainSection}>
            <Container>
                <Nav/>
                {
                    props.movies
                    ? props.movies.length
                        ?(<>
                            <SearchCounter />
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
    movies: state.fetchMovies.moviesList
})

export default connect(mapStateToProps, null) (MainSection)