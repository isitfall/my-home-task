import { combineReducers } from "redux";
import actionsTypes from "./actionsTypes";
import initialState from "./initialState";

const fetchMovies = (state = initialState, actions) => {
    switch (actions.type) {
        case actionsTypes.FETCH_MOVIES_LIST :
            return {
                ...state,
                moviesList: actions.payload.movies.data
            }
        case actionsTypes.FETCH_MOVIES_SORT_DOCUMENTARY :
            return {
                ...state,
                moviesList: actions.payload.movies
            }
        case actionsTypes.FETCH_MOVIES_SORT_HORROR:
            return {
                ...state,
                moviesList: actions.payload.movies
            }
        case actionsTypes.FETCH_MOVIES_SORT_COMEDY:
            console.log(actions.payload.movies)
            return {
                ...state,
                moviesList: actions.payload.movies
            }
        case actionsTypes.FETCH_MOVIES_SORT_CRIME:
            return {
                ...state,
                moviesList: actions.payload.movies
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
        default: return state
    }
}

const rootReducer = combineReducers({
    fetchMovies
})

export default rootReducer