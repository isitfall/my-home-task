import React from 'react'
import classes from "./MovieId.sass";
import PropTypes from 'prop-types'

export default function MovieId(props) {
    return (
        <div className={classes.movieId}>
            <span>movie id</span>
            <p>{props.movieId}</p>
        </div>
    )
}

MovieId.propTypes = {
    movieId: PropTypes.string
}

MovieId.defaultProps = {
    movieId: 'M032820TH'
}