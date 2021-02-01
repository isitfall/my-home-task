import React from 'react';
import {connect} from 'react-redux';

import MainTitle from "../../UI/MainTitle/MainTitle";
import Rating from "../../UI/Rating/Rating";
import PulpFictImg from '../../../assets/images/MoviesList/PulpFict.png'

import PropTypes from 'prop-types'

import classes from './MovieDetails.sass';


function MovieDetails(props) {
    return (
    //  budget: 55000000
    // genres: (2) ["Documentary", "Romance"]
    // id: 337167
    // overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins."
    // poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg"
    // release_date: "2018-02-07"
    // revenue: 136906000
    // runtime: 106
    // tagline: "Don't miss the climax"
    // title: "Fifty Shades Freed"
    // vote_average: 6.1
    // vote_count: 1195
        <div className={classes.MovieDetails}>
            {props.currentMovie
                ? (
                    <>
                        <img src={props.currentMovie.poster_path} alt="img"/>
                        <div className={classes.textContent}>
                            <div className={classes.MainContent}>
                                <MainTitle fontSize={'3.3rem'} textTransform={'none'} fontWeight={400}>{props.currentMovie.title}</MainTitle>
                                <Rating movieRate={props.currentMovie.vote_average}/>
                            </div>

                            <p>{props.currentMovie.genres.join(', ')}</p>
                            <p className={classes.pink}><span>{new Date(props.currentMovie.release_date).getFullYear()}</span> <span>{props.movieDuration}min</span></p>
                            <p>{props.currentMovie.overview}</p>
                        </div>
                    </>
                )
                : (
                    <>
                        <img src={props.movieImg} alt="img"/>
                        <div className={classes.textContent}>
                            <div className={classes.MainContent}>
                                <MainTitle fontSize={'3.3rem'} textTransform={'none'} fontWeight={400}>{props.movieName}</MainTitle>
                                <Rating movieRate={props.movieRate}/>
                            </div>

                            <p>{props.movieGenre}</p>
                            <p className={classes.pink}><span>{props.movieYear}</span> <span>{props.movieDuration}min</span></p>
                            <p>{props.movieDescription}</p>
                        </div>
                    </>
                )}

        </div>
    )
}

MovieDetails.propTypes = {
    click: PropTypes.func,
    showMovieDetails: PropTypes.bool,
    movieImg: PropTypes.string,
    movieName: PropTypes.string,
    movieGenre: PropTypes.string,
    movieYear: PropTypes.number,
    movieDuration: PropTypes.number,
    movieDescription: PropTypes.string
}

MovieDetails.defaultProps = {
    movieImg: PulpFictImg,
    movieName: 'Pulp Fiction',
    movieGenre: "Oscar winning Movie",
    movieYear: 1994,
    movieDuration: 154,
    movieDescription: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.'
}

const mapStateToProps = state => ({
    currentMovie: state.fetchMovies.currentMovie
})

export default connect(mapStateToProps, null) (MovieDetails)