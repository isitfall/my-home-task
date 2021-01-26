import React, { useContext } from 'react'
import classes from './MovieMenu.sass'
import PropTypes from 'prop-types';
import MovieMenuItem from "../../UI/MovieMenuItem/MovieMenuItem";
import ExitButton from "../../UI/ExitButton/ExitButton";
import { MovieListItemContext } from "../../../Context/Context";

export default function MovieMenu(props) {
    const context = useContext(MovieListItemContext)

    return (
        <div className={classes.MovieMenu}>
            <ExitButton click={props.click} large={props.large} tickness={props.tickness}/>
            <MovieMenuItem click={context.toggleMovieEditor}>Edit</MovieMenuItem>
            <MovieMenuItem click={context.toggleDeleteMovie}>Delete</MovieMenuItem>
        </div>
    )
}

MovieMenu.propTypes = {
    click: PropTypes.func
}