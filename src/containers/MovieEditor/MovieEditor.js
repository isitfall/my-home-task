import React, { useState, useEffect } from 'react';
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

import { postMovie, putMovie } from "../../Store/actionCreators";

function MovieEditor(props) {

    const [state, setState] = useState({
            title : '',
            poster_path: '',
            release_date: null,
            genres: 'selectGenre',
            overview: '',
            runtime: '',
        })
    const [isInvalid, setIsInvalid] = useState(false)

    useEffect(() => {
        setState((prevState) => {
            return (props.isMovieEditor && props.currentMovie) ? ({
                ...props.currentMovie
            }) : ((!props.isMovieEditor && props.currentMovie) ? ({
                title : '',
                poster_path: '',
                release_date: null,
                genres: 'selectGenre',
                overview: '',
                runtime: '',
            }) : prevState)

        })
    }, [props.currentMovie])


    function resetForm() {
            setState((prevState) => {
                if (props.isMovieEditor && props.currentMovie) {
                    return {
                        ...prevState,
                        title: '',
                        poster_path: '',
                        release_date: '',
                        genres: 'selectGenre',
                        overview: '',
                        runtime: '',
                        }
                    } else {
                        return {
                            title: '',
                            poster_path: '',
                            release_date: '',
                            genres: 'selectGenre',
                            overview: '',
                            runtime: '',
                        }
                    }})
    }


    function changeHandler(e) {
        const {name, value} = e.target

        if (name === 'genres') {
            setIsInvalid(false)
        }

        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function submitForm(e) {

        e.preventDefault();

        setIsInvalid(false)


        if ( state.genres === 'selectGenre') {
            setIsInvalid(true)
            return false
        } else {
            const data = {...state}

            props.isMovieEditor
                ? props.putMovie(data)
                : props.postMovie(data)

            resetForm()
        }
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
                <form onSubmit={submitForm}>
                    {props.isMovieEditor ? <MovieId movieId={state.id} />  : null}
                    <InputText
                        name={'title'}
                        title={'title'}
                        placeholder={'Title here'}
                        inputValue={state.title}
                        change = {changeHandler}
                    />
                    <InputDate
                        name={'release_date'}
                        title={'release date'}
                        placeholder={'Select Date'}
                        inputType={'date'}
                        inputValue={state.release_date}
                        change = {changeHandler}
                    />
                    <InputText
                        name={'poster_path'}
                        title={'movie url'}
                        placeholder={'Movie URL here'}
                        inputValue={state.poster_path}
                        change = {changeHandler}
                    />
                    <Select
                        name={'genres'}
                        title={'genre'}
                        selectValue={state.genres}
                        inputValue={state.genres}
                        change = {changeHandler}
                        isInvalid={isInvalid}
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

const mapStateToProps = state => ({
    currentMovie: state.fetchMovies.currentMovie
})

const mapDispatchToProps = dispatch => ({
    postMovie: data => dispatch(postMovie(data)),   //POST method to add Movie
    putMovie: data => dispatch(putMovie(data)), //UPDATE just one movie by movieID,
})

export default connect(mapStateToProps, mapDispatchToProps) (MovieEditor)