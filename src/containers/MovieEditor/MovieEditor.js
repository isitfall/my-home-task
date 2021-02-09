import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { useFormik } from "formik";

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

//validation form
const validate = values => {
    const errors = {}

    if (!values.title) {
        errors.title = 'Title is Required!'
    }

    if (!values.poster_path || !values.poster_path.includes('http')) {
        errors.poster_path = 'Poster URL is Required!'
    }

    if (!values.overview) {
        errors.overview = 'Overview is Required!'
    }

    if (values.genres === 'selectGenre') {
        errors.genres = 'Select as least one genre to processed!'
    }

    if (!values.runtime || !+values.runtime) {
        errors.runtime = 'Runtime must be a Number!'
    }

    return errors
}


function MovieEditor(props) {

    const formik = useFormik(
        (props.isMovieEditor && props.currentMovie)
        ? {
                initialValues: {
                    ...props.currentMovie
                },
                validate,
                onReset: values => {
                    return {
                        ...values,
                        title : '',
                        poster_path: '',
                        release_date: null,
                        genres: 'selectGenre',
                        overview: '',
                        runtime: '',
                    }
                },
                onSubmit: values => {
                    props.putMovie(values)
                }
            } : {
                initialValues: {
                    title : '',
                    poster_path: '',
                    release_date: null,
                    genres: 'selectGenre',
                    overview: '',
                    runtime: '',
                },
                validate,
                onSubmit: values => {
                    props.postMovie(values)
                }
            })


    //выглядит как костыль, но РАБОТАЕТ!
    //как только props.currentMovie - тогда сразу в форму попадет текущий список
    useEffect(() => {
        return formik.setValues(() => ({...props.currentMovie}))
    }, [props.currentMovie])



    return (
        <BlurBackground>
            <div className={classes.MovieEditor}>
                <ExitButton click={props.click}/>
                <MainTitle fontSize={'2rem'}>
                    {props.isMovieEditor
                    ? 'Edit Movie'
                    : 'Add Movie'}
                </MainTitle>
                <form onSubmit={formik.handleSubmit}>
                    {props.isMovieEditor ? <MovieId movieId={formik.values.id} />  : null}
                    <InputText
                        name={'title'}
                        title={'title'}
                        placeholder={'Title here'}
                        inputValue={formik.values.title}
                        change = {formik.handleChange}
                        error={formik.errors.title}
                    />
                    <InputDate
                        name={'release_date'}
                        title={'release date'}
                        placeholder={'Select Date'}
                        inputType={'date'}
                        inputValue={formik.values.release_date}
                        change = {formik.handleChange}
                        error={formik.errors.release_date}
                    />
                    <InputText
                        name={'poster_path'}
                        title={'movie url'}
                        placeholder={'Movie URL here'}
                        inputValue={formik.values.poster_path}
                        change = {formik.handleChange}
                        error={formik.errors.poster_path}
                    />
                    <Select
                        name={'genres'}
                        title={'genre'}
                        selectValue={formik.values.genres}
                        inputValue={formik.values.genres}
                        change = {formik.handleChange}
                        error={formik.errors.genres}
                    />
                    <InputText
                        name={'overview'}
                        title={'overview'}
                        placeholder={'Overview here'}
                        inputValue={formik.values.overview}
                        change = {formik.handleChange}
                        error={formik.errors.overview}
                    />
                    <InputText
                        name={'runtime'}
                        title={'runtime'}
                        placeholder={'Runtime here'}
                        inputValue={formik.values.runtime}
                        change = {formik.handleChange}
                        error={formik.errors.runtime}
                    />
                    <BtnsFormEditor click={formik.handleReset}
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