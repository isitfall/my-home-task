import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";

import DotsIcon from "../DotsIcon/DotsIcon";
import MovieMenu from "../../layouts/MovieMenu/MovieMenu";
import classes from './MovieItem.module.sass'
import PropTypes from 'prop-types';
import { MovieListItemContext } from "../../../Context/Context";

import defaultPoster from '../../../assets/icons/defaultPoster.jpg'


export default function MovieItem(props) {
    const [hovered, setHovered] = useState(false)
    const [isShowMovieMenu, setIsShowMovieMenu] = useState(false)
    const [errImg, setErrImg] = useState(false)
    const context = useContext(MovieListItemContext)

    const showByConditionally = () => {
        return hovered
            ? (isShowMovieMenu
                    ? <MovieMenu large={10} tickness={1} click={changeMenuHandler} movieId={props.id}/>
                    : <DotsIcon click={changeMenuHandler}/>
            )
            : null
    }

    function changeMenuHandler(e) {
        setIsShowMovieMenu(prevState => {
            return !prevState
        })
    }

    function errorImgHandler(e) {
       return  e.type === 'error'
           ?   setErrImg(true)
           : null
    }




    return (
        <div className={` ${classes.MovieItem}` }

             onClick={(e) => context.showMovieDetails(e, props.id)}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => {
                 setHovered(false)
                 setIsShowMovieMenu(false)
             }}
        >

                {showByConditionally()}
                <Link to={`/film/${props.id}`} className={classes.link}>

                    <img src={errImg ? props.defaultImg
                        : props.img}
                         alt="img"
                         onError={errorImgHandler}/>
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
                </Link>



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
    defaultImg: defaultPoster
}




