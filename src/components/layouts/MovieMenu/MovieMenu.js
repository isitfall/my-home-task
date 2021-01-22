import React from 'react'
import classes from './MovieMenu.sass'
import PropTypes from 'prop-types';
import MovieMenuItem from "../../UI/MovieMenuItem/MovieMenuItem";
import ExitButton from "../../UI/ExitButton/ExitButton";

export default function MovieMenu(props) {
    return (
        <div className={classes.MovieMenu}>
            <ExitButton click={props.click} large={props.large} tickness={props.tickness}/>
            <MovieMenuItem>Edit</MovieMenuItem>
            <MovieMenuItem>Delete</MovieMenuItem>
        </div>
    )
}

MovieMenu.propTypes = {
    click: PropTypes.func
}