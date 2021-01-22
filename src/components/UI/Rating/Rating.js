import React from 'react';
import classes from './Rating.sass'
import PropTypes from 'prop-types'

export default function Rating(props) {
    return (
        <div className={classes.Rating}>
            <p>{props.movieRate}</p>
        </div>
    )
}

Rating.propTypes = {
    movieRate: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

Rating.defaultProps = {
    movieRate: 4.3
}

