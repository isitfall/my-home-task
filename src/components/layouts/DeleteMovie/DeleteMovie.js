import React from 'react'

import BlurBackground from "../BlurBackground/BlurBackground";
import Button from "../../UI/Button/Button";
import ExitButton from "../../UI/ExitButton/ExitButton";
import MainTitle from "../../UI/MainTitle/MainTitle";

import classes from './DeleteMovie.module.sass'

export default function DeleteMovie(props) {
    return (
        <BlurBackground>
            <div className={classes.DeleteMovie}>
                <ExitButton click={props.click}/>
                <MainTitle fontSize={'2rem'}>Delete Movie</MainTitle>
                <p>Are you sure you want to delete this movie?</p>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <Button click={props.onConfirm} title={'confirm'} styles={classes.button}/>
                </div>

            </div>
        </BlurBackground>
    )
}

const mapStateToProps = state => ({
    currentMovie: state.fetchMovies.currentMovie
})


