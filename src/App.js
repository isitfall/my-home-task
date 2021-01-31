import React, { useState,  useCallback } from 'react';
import { connect } from 'react-redux';

import AddMovie from './containers/MovieEditor/MovieEditor'
import DeleteMovie from "./components/layouts/DeleteMovie/DeleteMovie";
import Header from "./components/layouts/Header/Header";
import MainSection from "./components/layouts/MainSection/MainSection";
import Footer from "./components/layouts/Footer/Footer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { MovieListItemContext } from './Context/Context';

import { getMovieById } from "./Store/actionCreators";

function App(props) {
    const [editMovie, setEditMovie] = useState(false);
    const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);
    const [addMovie, setAddMovie] = useState(false);
    const [deleteMovie, setDeleteMovie] = useState(false)

    const showMovieDetails = useCallback((e) => {
        if (e.target.className.includes('MovieItem') || e.target.tagName === 'IMG') {
            setIsShowMovieDetails(value => true)
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

    function toggleDeleteMovie() {
        toggleHiddenOverflow();
        setDeleteMovie(value => !value )
    }

    function toggleMovieEditor(id) {
        toggleHiddenOverflow();
        props.getMovieById(id)
        setEditMovie(currentVal => !currentVal)
        setAddMovie(currentVal => !currentVal)
    }


    function toggleAddMovie(e) {
        toggleHiddenOverflow()
        setAddMovie(!addMovie)
    }




    return (

            <>
                <MovieListItemContext.Provider value={{
                    toggleDeleteMovie,
                    showMovieDetails,
                    toggleMovieEditor
                }}>
                    {addMovie
                        ? <AddMovie isMovieEditor={editMovie} click={editMovie ? toggleMovieEditor : toggleAddMovie}/> //isMovieEditor prop as boolean
                        : null}
                    {deleteMovie
                        ? <DeleteMovie click = {toggleDeleteMovie}/>
                        : null
                    }
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


const mapDispatchToProps = dispatch => ({
    getMovieById: movieId => dispatch(getMovieById(movieId)) //GET just one movie by movieID,
})

export default connect(null , mapDispatchToProps ) (App)