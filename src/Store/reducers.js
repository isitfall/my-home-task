import { combineReducers } from "redux";
import actionsTypes from "./actionsTypes";
import initialState from "./initialState";

const fetchMovies = (state = initialState, actions) => {
    switch (actions.type) {
        case actionsTypes.FETCH_MOVIES_LIST :
            return {
                ...state,
                moviesList: [
                    ...state.moviesList,
                    actions.payload
                ]
            }
        case actionsTypes.FETCH_MOVIES_STARTED : {
            return {
                ...state,
                payload: actions.payload
            }
        }
        case 'dummy':
            return {
                ...state,
                title: 'REDUX MASTER'
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    fetchMovies
})

export default rootReducer