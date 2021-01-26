import actionsTypes from "./actionsTypes";

export function fetchMovieList () {
 return function (dispatch) {
     const response = fetch("http://localhost:4000/movies").then(response => response.json())

     dispatch({
         type: actionsTypes.FETCH_MOVIES_LIST,
         payload: response
     })
 }
}

export const testRunner = () => {
    return {
        type: actionsTypes.FETCH_MOVIES_STARTED,
        payload: {
            title: 'its IN'
        }
    }
}
