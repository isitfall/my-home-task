import React, { Component } from 'react';

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



export default class MovieEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title : '',
            releaseDate: '',
            movieUrl: '',
            genre: 'selectGenre',
            overview: '',
            runtime: '',
        }

        this.changeSelectHandler = this.changeSelectHandler.bind(this)
    }

    changeSelectHandler(e) {
        this.setState({genre: e.target.value})
    }



    render() {
        return (
            <BlurBackground>
                <div className={classes.MovieEditor}>
                    <ExitButton click={this.props.click}/>
                    <MainTitle fontSize={'2rem'}>{this.props.isMovieEditor ? 'Edit Movie' : 'Add Movie'}</MainTitle>
                    <form onSubmit={event => event.preventDefault()}>
                        {this.props.isMovieEditor ? <MovieId />  : null}
                        <InputText
                            name={'title'}
                            title={'title'}
                            placeholder={'Title here'}
                            value={this.state.title}
                        />
                        <InputDate
                            name={'date'}
                            title={'release date'}
                            placeholder={'Select Date'}
                            inputType={'date'}
                        />
                        <InputText
                            name={'url'}
                            title={'movie url'}
                            placeholder={'Movie URL here'}
                        />
                        <Select
                            name={'genre'}
                            title={'genre'}
                            selectValue={this.state.genre}
                            change = {this.changeSelectHandler}
                        />
                        <InputText
                            name={'overview'}
                            title={'overview'}
                            placeholder={'Overview here'}
                        />
                        <InputText
                            name={'runtime'}
                            title={'runtime'}
                            placeholder={'Runtime here'}
                        />
                        <BtnsFormEditor
                        />
                    </form>

                </div>


            </BlurBackground>
        )
    }
}

MovieEditor.propTypes = {
    isMovieEditor: PropTypes.bool
}

MovieEditor.defaultProps = {
    isMovieEditor: false
}