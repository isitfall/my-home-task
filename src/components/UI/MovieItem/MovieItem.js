import React from 'react';
import classes from './MovieItem.sass'
import PropTypes from 'prop-types';

export default function MovieItem(props) {
    return (
        <div className={classes.MovieItem}>
            <img src={props.img} alt=""/>
            <div className={classes.MovieItem__description}>
                <span className={classes.MovieItem__name}>
                    {props.name}
                </span>
                <span className={classes.MovieItem__year}>
                    {props.year}
                </span>
            </div>
            <span className={classes.MovieItem__genre}>
                {props.genre}
            </span>
        </div>
    )
}


MovieItem.PropTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
}