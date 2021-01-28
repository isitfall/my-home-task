import actionsTypes from "./actionsTypes";


export function getMovieList () {
    return function (dispatch) {
        fetch("http://localhost:4000/movies")
            .then(response => response.json())
            .then(data => dispatch({
                type: actionsTypes.FETCH_MOVIES_LIST,
                payload: {
                    movies: data,
                }
            }))
    }
}

export function getMoviesSorted(actionType, title) {
    return function (dispatch) {
        fetch("http://localhost:4000/movies")
            .then(response => response.json())
            // .then(body => )
            .then(data => {
                if (title === 'All') {
                    return  dispatch({
                        type: actionsTypes.FETCH_MOVIES_LIST,
                        payload: {
                            movies: data
                        }
                    })
                } else {
                    const arr = data.data.filter((item) =>  item.genres.includes(title))
                    console.log(actionType, title)
                    console.log(arr)
                    return dispatch({
                        type: actionType,
                        payload: {
                            movies: arr,
                        }
                    })
                }

            })
    }
}
