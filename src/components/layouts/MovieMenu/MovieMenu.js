import React, { useContext } from 'react'
import {connect} from 'react-redux'
import {getMovieById} from "../../../Store/actionCreators";

import classes from './MovieMenu.module.sass'
import PropTypes from 'prop-types';
import MovieMenuItem from "../../UI/MovieMenuItem/MovieMenuItem";
import ExitButton from "../../UI/ExitButton/ExitButton";
import { MovieListItemContext } from "../../../Context/Context";

function MovieMenu(props) {
    const context = useContext(MovieListItemContext)

    return (
        <div className={classes.MovieMenu}>
            <ExitButton click={props.click} large={props.large} tickness={props.tickness}/>
            <MovieMenuItem click={() => context.toggleMovieEditor(props.movieId)}>Edit</MovieMenuItem>
            <MovieMenuItem click={() => context.toggleDeleteMovie(props.movieId)}>Delete</MovieMenuItem>
        </div>
    )
}

MovieMenu.propTypes = {
    click: PropTypes.func,
    movieId: PropTypes.number
}

const mapDispatchToProps = dispatch => ({
    getMovieById: id => dispatch(getMovieById(id))
})

export default connect(null, mapDispatchToProps) (MovieMenu)
