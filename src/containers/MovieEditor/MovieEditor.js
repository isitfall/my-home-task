import React, { useState, useRef } from 'react';

import classes from './MovieEditor.sass'
import PropTypes from 'prop-types'

import BlurBackground from "../../components/layouts/BlurBackground/BlurBackground";
import InputDate from "../../components/UI/Inputs/inputDate";
import InputText from "../../components/UI/Inputs/InputText";
import Select from "../../components/UI/Inputs/Select";
import BtnsFormEditor from "../../components/layouts/BtnsFromEditor/BtnsFormEditor";
import ExitButton from "../../components/UI/ExitButton/ExitButton";
import MainTitle from "../../components/UI/MainTitle/MainTitle";
import MovieId from "../../components/UI/MovieId/MovieId";



export default function MovieEditor(props) {

    const [state, setState] = useState({
            title : '',
            releaseDate: '',
            movieUrl: '',
            genre: 'selectGenre',
            overview: '',
            runtime: '',
        })
    const form = useRef(null)

    function resetForm() {
        setState(() =>({
            title : '',
            releaseDate: '',
            movieUrl: '',
            genre: 'selectGenre',
            overview: '',
            runtime: '',
            })
        )
    }


    function changeSelectHandler(e) {
        const {name, value} = e.target
        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }




    return (
        <BlurBackground>
            <div className={classes.MovieEditor}>
                <ExitButton click={props.click}/>
                <MainTitle fontSize={'2rem'}>
                    {props.isMovieEditor
                    ? 'Edit Movie'
                    : 'Add Movie'}
                </MainTitle>
                <form ref={form} onSubmit={event => {
                    event.preventDefault();
                    console.log(state)
                }}>
                    {props.isMovieEditor ? <MovieId />  : null}
                    <InputText
                        name={'title'}
                        title={'title'}
                        placeholder={'Title here'}
                        value={state.title}
                        change = {changeSelectHandler}
                    />
                    <InputDate
                        name={'date'}
                        title={'release date'}
                        placeholder={'Select Date'}
                        inputType={'date'}
                        change = {changeSelectHandler}
                    />
                    <InputText
                        name={'url'}
                        title={'movie url'}
                        placeholder={'Movie URL here'}
                        change = {changeSelectHandler}
                    />
                    <Select
                        name={'genre'}
                        title={'genre'}
                        selectValue={state.genre}
                        change = {changeSelectHandler}
                    />
                    <InputText
                        name={'overview'}
                        title={'overview'}
                        placeholder={'Overview here'}
                        change = {changeSelectHandler}
                    />
                    <InputText
                        name={'runtime'}
                        title={'runtime'}
                        placeholder={'Runtime here'}
                        change = {changeSelectHandler}
                    />
                    <BtnsFormEditor click={resetForm}
                    />
                </form>
            </div>
        </BlurBackground>
    )

}

MovieEditor.propTypes = {
    isMovieEditor: PropTypes.bool
}

MovieEditor.defaultProps = {
    isMovieEditor: false
}