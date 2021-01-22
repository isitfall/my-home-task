import React, { useState, useEffect } from 'react';
import DotsIcon from "../DotsIcon/DotsIcon";
import MovieMenu from "../../layouts/MovieMenu/MovieMenu";
import classes from './MovieItem.sass'
import PropTypes from 'prop-types';


export default function MovieItem(props) {
    const [hovered, setHovered] = useState(false)
    const [isShowMovieMenu, setIsShowMovieMenu] = useState(false)

    function onHoverHandler() {
        if (isShowMovieMenu) {
            setIsShowMovieMenu(false)
        }
        setHovered(prevState => !prevState)

    }

    function changeMenuHandler() {
        setIsShowMovieMenu(prevState => {
            return !prevState
        })
    }



    const showByConditionally = () => {

        if (hovered) {
            if (isShowMovieMenu) {
                return <MovieMenu large={10} tickness={1} click={changeMenuHandler}/>
            } else {
                return <DotsIcon click={changeMenuHandler}/>
            }
        } else {
            return null
        }
    }

    return (
        <div className={classes.MovieItem}
             onMouseEnter={onHoverHandler}
             onMouseLeave={onHoverHandler}
        >
            {showByConditionally()}
            <img src={props.img} alt="img"/>
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