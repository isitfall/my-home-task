import React from 'react';
import MainTitle from "../../UI/MainTitle/MainTitle";
import Rating from "../../UI/Rating/Rating";
import PulpFictImg from '../../../assets/images/MoviesList/PulpFict.png'

import PropTypes from 'prop-types'

import classes from './MovieDetails.sass';


export default function MovieDetails(props) {
    return (
        <div className={classes.MovieDetails}>
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