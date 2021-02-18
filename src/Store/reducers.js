import { combineReducers } from "redux";
import actionsTypes from "./actionsTypes";
import initialState from "./initialState";

export const fetchMovies = (state = initialState, actions) => {
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
        case actionsTypes.FILTER_BY_RELEASE_DATE:
            return {
                ...state,
                moviesList: [...state.moviesList].sort((first, second) => {
                    const a = new Date(first.release_date);
                    const b = new Date(second.release_date);
                    return a < b ? -1 : a > b ? 1 : 0;
                })
            }
        case actionsTypes.FILTER_BY_RATING :
            return {
                ...state,
                moviesList: [...state.moviesList].sort((first, second) => {
                    const a = first.vote_average;
                    const b = second.vote_average;
                    return a > b ? -1 : a < b ? 1 : 0;
                })
            }
        case actionsTypes.DELETE_MOVIE:
            return {
                ...state,
                moviesList: [...state.moviesList].filter(movie => movie.id !== actions.payload),
                currentMovie: null
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    fetchMovies
})

export default rootReducer