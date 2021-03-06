import React from 'react'
import classes from './NoMovieFound.module.sass'
import MainTitle from "../../UI/MainTitle/MainTitle";

export default function NoMovieFound() {
    return <div className={classes.FoundNothing}>
        <MainTitle fontSize={'3rem'} textTransform={'none'} fontWeight={300}>No Movie Found</MainTitle>
    </div>
}