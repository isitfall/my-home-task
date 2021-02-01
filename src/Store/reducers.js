import { combineReducers } from "redux";
import actionsTypes from "./actionsTypes";
import initialState from "./initialState";

const fetchMovies = (state = initialState, actions) => {
    switch (actions.type) {
        case actionsTypes.FETCH_MOVIES_LIST :
            return {
                ...state,
                moviesList: actions.payload.movies.data,
                moviesToShow: actions.payload.moviesToShow
            }
        case actionsTypes.SHOW_MOVIES:
            return {
                ...state,
                moviesToShow: 'All'
            }
        case actionsTypes.SHOW_MOVIES_SORT_DOCUMENTARY:
            return {
                ...state,
                documentaryMoviesList: state.moviesList.filter(movie => movie.genres.includes('Documentary')),
                moviesToShow: 'Documentary'
            }
        case actionsTypes.SHOW_MOVIES_SORT_COMEDY:
            return {
                ...state,
                comedyMoviesList: state.moviesList.filter(movie => movie.genres.includes('Comedy')),
                moviesToShow: 'Comedy'
            }
        case actionsTypes.SHOW_MOVIES_SORT_HORROR:
            return {
                ...state,
                horrorMoviesList: state.moviesList.filter(movie => movie.genres.includes('Horror')),
                moviesToShow: 'Horror'
            }
        case actionsTypes.SHOW_MOVIES_SORT_CRIME:
            return {
                ...state,
                crimeMoviesList: state.moviesList.filter(movie => movie.genres.includes('Crime')),
                moviesToShow: 'Crime'
            }
        case actionsTypes.POST_ADD_MOVIE:
            return {
                ...state,
                moviesList: [...state.moviesList, actions.payload]
            }
        case actionsTypes.GET_MOVIE_BY_ID:
            return {
                ...state,
                currentMovie: actions.payload
            }
        case actionsTypes.PUT_UPDATE_MOVIE:

            const newMoviesList = []

            for (let key of state.moviesList) {
                if (key.id === actions.payload.id) {
                    key = actions.payload
                }

                newMoviesList.push(key)
            }

            return {
                ...state,
                moviesList: newMoviesList
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    fetchMovies
})

export default rootReducer