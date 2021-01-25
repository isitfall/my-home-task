import { combineReducers } from "redux";
import ACTIONS from './actions'

const fetchAllMovies = ( state = null, { type, payload } ) =>
    type === ACTIONS.FETCH_MOVIES_LIST
        ? payload
        : state


const rootReducer = combineReducers({
    fetchAllMovies
})

export default rootReducer
