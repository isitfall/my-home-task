import React, { useState, useContext, useEffect } from 'react';
import DotsIcon from "../DotsIcon/DotsIcon";
import MovieMenu from "../../layouts/MovieMenu/MovieMenu";
import classes from './MovieItem.sass'
import PropTypes from 'prop-types';
import { MovieListItemContext } from "../../../Context/Context";


export default function MovieItem(props) {
    const [hovered, setHovered] = useState(false)
    const [isShowMovieMenu, setIsShowMovieMenu] = useState(false)
    const context = useContext(MovieListItemContext)

    function onHoverHandler() {
        if (isShowMovieMenu) {
            setIsShowMovieMenu(false)
        }
        setHovered(prevState => !prevState)

    }

    function changeMenuHandler(e) {
        setIsShowMovieMenu(prevState => {
            return !prevState
        })
    }



    const showByConditionally = () => {

        if (hovered) {
            if (isShowMovieMenu) {
                return <MovieMenu large={10} tickness={1} click={changeMenuHandler} movieId={props.id}/>
            } else {
                return <DotsIcon click={changeMenuHandler}/>
            }
        } else {
            return null
        }
    }

    return (
        <div className={` ${classes.MovieItem}` }
             onClick={context.showMovieDetails}
             onMouseEnter={onHoverHandler}
             onMouseLeave={onHoverHandler}
        >
            {showByConditionally()}
            <img src={props.img} alt="img"/>
            <div className={classes.description}>
                <span className={classes.name}>
                    {props.title}
                </span>
                <span className={classes.year}>
                    {new Date(props.release_date).getFullYear()}
                </span>
            </div>
            <span className={classes.genre}>
                {props.genre.join(', ')}
            </span>
        </div>
    )
}


MovieItem.PropTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    genre: PropTypes.array.isRequired,
    overview: PropTypes.string.isRequired,
    runtime: PropTypes.number,
    tagline: PropTypes.string,
    vote_average: PropTypes.number
}

MovieItem.defaultProps = {
    img: 'https://risanb.com/img/react.png'
}

