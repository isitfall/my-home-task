import React, { useState,  useCallback } from 'react';
import { connect } from 'react-redux';

import AddMovie from './containers/MovieEditor/MovieEditor'
import DeleteMovie from "./components/layouts/DeleteMovie/DeleteMovie";
import Header from "./components/layouts/Header/Header";
import MainSection from "./components/layouts/MainSection/MainSection";
import Footer from "./components/layouts/Footer/Footer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { MovieListItemContext } from './Context/Context';
import ModalWindow from "./components/layouts/ModalWindow/ModalWindow";

import { getMovieById, putMovie, deleteMovie } from "./Store/actionCreators";

function App(props) {
    const [editMovie, setEditMovie] = useState(false); //shows EditMovie form
    const [isShowMovieDetails, setIsShowMovieDetails] = useState(false); //shows Movie details instead of main header
    const [addMovie, setAddMovie] = useState(false); //shows AddMovie form
    const [deleteMovie, setDeleteMovie] = useState(false) //shows DeleteMovie modal window
    const [success, setSuccess] = useState(false) //shows Success ModalWindow

    const showMovieDetails = useCallback((e, movieId) => {
        if (e.target.className.includes('MovieItem') || e.target.tagName === 'IMG') {
            setIsShowMovieDetails(value => true)
            props.getMovieById(movieId)
        }
    }, [isShowMovieDetails])

    const showSearchPanel = useCallback(() => {
        setIsShowMovieDetails(value => false)
    }, [isShowMovieDetails])

    function toggleHiddenOverflow() {
        return document.body.style.overflow
            ? document.body.style.overflow = null
            : document.body.style.overflow = 'hidden'
    }

    function toggleDeleteMovie(movieId) {
        if (!deleteMovie) {
            props.getMovieById(movieId)

            toggleHiddenOverflow()
            setDeleteMovie(value => !value )
        } else {
            toggleHiddenOverflow()
            setDeleteMovie(value => !value )
        }
    }

    function confirmDelete(movieId) {
        props.deleteMovie(movieId)
        toggleHiddenOverflow();
        setDeleteMovie(value => !value )
    }

    function toggleMovieEditor(id) {

        if (!addMovie) {
            props.getMovieById(id)
            toggleHiddenOverflow();
            setEditMovie(currentVal => !currentVal)
            setAddMovie(currentVal => !currentVal)
        } else {
            toggleHiddenOverflow();
            setEditMovie(currentVal => !currentVal)
            setAddMovie(currentVal => !currentVal)
        }
    }


    function toggleAddMovie(e) {
        if (editMovie) {
            setEditMovie(false)
        }
        toggleHiddenOverflow()
        setAddMovie(!addMovie)
    }

    function toggleSuccess() {
        toggleHiddenOverflow()
        setSuccess(!success)
    }




    return (

            <>
                <MovieListItemContext.Provider value={{
                    toggleAddMovie,
                    toggleMovieEditor,
                    toggleDeleteMovie,
                    showMovieDetails,
                    toggleSuccess
                }}>
                    {addMovie
                        ? <AddMovie isMovieEditor={editMovie} click={editMovie ? toggleMovieEditor : toggleAddMovie}/> //isMovieEditor prop as boolean
                        : null}
                    {deleteMovie
                        ? <DeleteMovie click = {toggleDeleteMovie} onConfirm={() => confirmDelete(props.currentMovie.id)}/>
                        : null
                    }
                    {success ? <ModalWindow click={toggleSuccess}/> : null}
                    <Header showMovieDetails={isShowMovieDetails}
                            click={isShowMovieDetails
                                ? showSearchPanel
                                : toggleAddMovie
                            }
                    />
                        <ErrorBoundary>
                            <MainSection />
                        </ErrorBoundary>
                    <Footer />
                </MovieListItemContext.Provider>
           </>
    )

}

const mapStateToProps = state => ({
    currentMovie: state.fetchMovies.currentMovie
})


const mapDispatchToProps = dispatch => ({
    getMovieById: movieId => dispatch(getMovieById(movieId)), //GET just one movie by movieID,
    deleteMovie: movieId => dispatch(deleteMovie(movieId)),
})

export default connect(mapStateToProps , mapDispatchToProps ) (App)