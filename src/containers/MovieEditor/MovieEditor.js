import React, {useState, useEffect, useContext } from 'react';
import {connect} from 'react-redux';
import { useFormik, Field } from "formik";

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

import { MovieListItemContext } from "../../Context/Context";

import { postMovie, putMovie, getMovieById } from "../../Store/actionCreators";

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

    if (values.genres.length === 0) {
        errors.genres = 'Select as least one genre to processed!'
    }

    if (!values.runtime || !+values.runtime) {
        errors.runtime = 'Runtime must be a Number!'
    }

    return errors
}


function MovieEditor(props) {

    const [isShown, setIsShown] = useState(false)

    const context = useContext(MovieListItemContext)

    const formik = useFormik(
        (props.isMovieEditor && props.currentMovie)
        ? {
                initialValues: {
                    ...props.currentMovie,
                },
                validate,
                onReset: values => {
                    return {
                        ...values,
                        title : '',
                        poster_path: '',
                        release_date: null,
                        genres: [],
                        overview: '',
                        runtime: '',
                    }
                },
                onSubmit: values => {
                    props.putMovie(values)
                    props.getMovieById(values.id)
                    context.toggleMovieEditor()
                }
            } : {
                initialValues: {
                    title : '',
                    poster_path: '',
                    release_date: null,
                    genres: [],
                    overview: '',
                    runtime: '',
                },
                validate,
                onSubmit: values => {
                    props.postMovie(values)

                    context.toggleAddMovie()
                    context.toggleSuccess()
                }
            })


    //выглядит как костыль, но РАБОТАЕТ!
    //как только props.currentMovie - тогда сразу в форму попадет текущий список
    useEffect(() => {
        if (props.isMovieEditor) {
            return formik.setValues(() => ({...props.currentMovie}))
        }
    }, [props.currentMovie])

    //довольно таки неплохо тогглит div с чекбоксами
    function toggleShowSelect(e) {
        let attribute ;
        if (e.target.tagName=== 'INPUT' && e.target.attributes.type) {
            attribute = e.target.attributes.type.nodeValue
        }

        if (e.target.tagName === 'SELECT') {
            setIsShown(!isShown)
        } else if (e.target.tagName !== 'SELECT'
            && attribute !== 'checkbox'
            && !e.target.className.includes("optionsWrapper")
            && e.target.tagName !== 'LABEL'
        ) {
            setIsShown(false)
        }
    }

    return (
        <BlurBackground>
            <div className={classes.MovieEditor} onClick={toggleShowSelect}>
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
                        change = {formik.handleChange}
                        error={formik.errors.genres}
                        isShown = {isShown}
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
    getMovieById: id => dispatch(getMovieById(id))
})

export default connect(mapStateToProps, mapDispatchToProps) (MovieEditor)