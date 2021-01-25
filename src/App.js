import React, { useState,  useCallback } from 'react';
import { Provider } from 'react-redux';
import store from "./Store/store";

import AddMovie from './containers/MovieEditor/MovieEditor'
import DeleteMovie from "./components/layouts/DeleteMovie/DeleteMovie";
import Header from "./components/layouts/Header/Header";
import MainSection from "./components/layouts/MainSection/MainSection";
import Footer from "./components/layouts/Footer/Footer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import { MovieListItemContext } from './Context/Context';

export default function App() {
    const [editMovie, setEditMovie] = useState(false);
    const [isShowMovieDetails, setIsShowMovieDetails] = useState(false);
    const [addMovie, setAddMovie] = useState(false);
    const [deleteMovie, setDeleteMovie] = useState(false)

    const showMovieDetails = useCallback(() => {
        setIsShowMovieDetails(value => true)
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

    function toggleMovieEditor() {
        toggleHiddenOverflow();
        setEditMovie(currentVal => !currentVal)
        setAddMovie(currentVal => !currentVal)
    }


    function toggleAddMovie() {
        toggleHiddenOverflow()
        setAddMovie(!addMovie)
    }




    return (

            <>
                <Provider store={store}>
                    <MovieListItemContext.Provider value={{
                        toggleDeleteMovie,
                        showMovieDetails,
                        toggleMovieEditor
                    }}>
                    {addMovie
                        ? <AddMovie isMovieEditor={editMovie} click={toggleAddMovie}/> //isMovieEditor prop as boolean
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
                </Provider>
           </>
    )

}