import React, { useState, useEffect } from 'react';
import AddMovie from './containers/MovieEditor/MovieEditor'
import DeleteMovie from "./components/layouts/DeleteMovie/DeleteMovie";
import Header from "./components/layouts/Header/Header";
import MainSection from "./components/layouts/MainSection/MainSection";
import Footer from "./components/layouts/Footer/Footer";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

export default function App() {

    const [showMovieDetails, setShowMovieDetails] = useState(false);
    const [addMovie, setAddMovie] = useState(false);
    const [deleteMovie, setDeleteMovie] = useState(false)

    function toggleShowMovieDetails() {
        setShowMovieDetails(!showMovieDetails)
    }

    function toggleAddMovie() {
        document.body.style.overflow
            ? document.body.style.overflow = null
            : document.body.style.overflow = 'hidden'
        setAddMovie(!addMovie)
    }

    return (
        <>
            {addMovie
                ? <AddMovie click={toggleAddMovie}/> //isMovieEditor prop as boolean
                : null}
            {deleteMovie
                ? <DeleteMovie click = {console.log('DeleteMovie')}/>
                : null
            }
            <Header showMovieDetails={showMovieDetails}
                click={showMovieDetails
                    ? toggleShowMovieDetails
                    : toggleAddMovie
                }
            />
            <ErrorBoundary>
                <MainSection />
            </ErrorBoundary>
            <Footer />
        </>
    )

}