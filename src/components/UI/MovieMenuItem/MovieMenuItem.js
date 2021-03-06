import React from 'react'
import classes from './MovieMenuItem.module.sass'
import PropTypes from 'prop-types'

export default function MovieMenuItem(props) {
    return (
        <div onClick={props.click} className={classes.MovieMenuItem}>
            <p>{props.children}</p>
        </div>
    )
}

MovieMenuItem.propTypes = {
    click: PropTypes.func
}