import React from 'react';
import AddMovie from './containers/MovieEditor/MovieEditor'
import DeleteMovie from "./components/layouts/DeleteMovie/DeleteMovie";
import Header from "./containers/Header/Header";
import MainSection from "./containers/MainSection/MainSection";
import Footer from "./components/layouts/Footer/Footer";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addMovie: false,
            deleteMovie: true
        }

        this.addMovieToggle = this.addMovieToggle.bind(this)
        this.deleteMovieToggle = this.deleteMovieToggle.bind(this)
    }

    addMovieToggle() {
        let overflow = document.body.style.overflow

        if ( overflow === '') {
            overflow = 'hidden'
        } else {
            overflow = ''
        }

        this.setState(state => {
            return {addMovie : !state.addMovie}
        })
    }

    deleteMovieToggle() {
        let overflow = document.body.style.overflow

        if ( overflow === '') {
            overflow = 'hidden'
        } else {
            overflow = ''
        }

        this.setState(state => {
            return {deleteMovie : !state.deleteMovie}
        })
    }


    render() {
        if (this.state.addMovie) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style = null
        }

        return (
            <>
                {this.state.addMovie
                    ? <AddMovie click={this.addMovieToggle}/> //isMovieEditor prop as boolean
                    : null}
                {this.state.deleteMovie
                    ? <DeleteMovie click = {this.deleteMovieToggle}/>
                    : null
                }
                <Header click={this.addMovieToggle}/>
                <MainSection />
                <Footer />
            </>
        )
    }
}