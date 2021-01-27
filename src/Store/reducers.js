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
        // case actionsTypes.FETCH_MOVIES_SORT_DOCUMENTARY :
        //     return {
        //         ...state,
        //         moviesList: actions.payload.movies.data
        //     }
        default: return state
    }
}

const rootReducer = combineReducers({
    fetchMovies
})

export default rootReducer