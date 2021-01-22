import React from 'react'
import classes from './MovieMenuItem.sass'

export default function MovieMenuItem(props) {
    return (
        <div className={classes.MovieMenuItem}>
            <p>{props.children}</p>
        </div>
    )
}