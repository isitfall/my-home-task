import React, { useState } from 'react';
import {connect} from 'react-redux';

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

import { postMovie } from "../../Store/actionCreators";

function MovieEditor(props) {

    const [state, setState] = useState({
            title : '',
            releaseDate: '',
            movieUrl: '',
            genre: 'selectGenre',
            overview: '',
            runtime: '',
        })


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


    function changeHandler(e) {
        const {name, value} = e.target
        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function submitForm(e) {
        e.preventDefault();

        const data = {...state}
        props.postMovie(data)

        resetForm()
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
                <form onSubmit={props.isMovieEditor ? null : submitForm}>
                    {props.isMovieEditor ? <MovieId />  : null}
                    <InputText
                        name={'title'}
                        title={'title'}
                        placeholder={'Title here'}
                        inputValue={state.title}
                        change = {changeHandler}
                    />
                    <InputDate
                        name={'releaseDate'}
                        title={'release date'}
                        placeholder={'Select Date'}
                        inputType={'date'}
                        inputValue={state.releaseDate}
                        change = {changeHandler}
                    />
                    <InputText
                        name={'movieUrl'}
                        title={'movie url'}
                        placeholder={'Movie URL here'}
                        inputValue={state.movieUrl}
                        change = {changeHandler}
                    />
                    <Select
                        name={'genre'}
                        title={'genre'}
                        selectValue={state.genre}
                        inputValue={state.genre}
                        change = {changeHandler}
                    />
                    <InputText
                        name={'overview'}
                        title={'overview'}
                        placeholder={'Overview here'}
                        inputValue={state.overview}
                        change = {changeHandler}
                    />
                    <InputText
                        name={'runtime'}
                        title={'runtime'}
                        placeholder={'Runtime here'}
                        inputValue={state.runtime}
                        change = {changeHandler}
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

const mapDispatchToProps = dispatch => ({
    postMovie: data => dispatch(postMovie(data))   //POST method to add Movie
})

export default connect(null, mapDispatchToProps) (MovieEditor)