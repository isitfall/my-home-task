import actionsTypes from "./actionsTypes";

export const postMovie = (data) => dispatch => {
    fetch("http://localhost:4000/movies", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method : 'POST',
        body: JSON.stringify({
            title: data.title,
            poster_path: data.movieUrl,
            overview: data.overview,
            release_date: data.releaseDate,
            runtime: +data.runtime,
            genres: [data.genre]
        })
    })
        .then(res => res.json())
        .then(responseBody => dispatch({
            type: actionsTypes.POST_ADD_MOVIE,
            payload: responseBody
        }))
        .catch(res => console.log(res))
}

export function getMoviesSorted(actionType, title) {
    return function (dispatch) {
        fetch("http://localhost:4000/movies")
            .then(response => response.json())
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
                    return dispatch({
                        type: actionType,
                        payload: {
                            movies: arr,
                        }
                    })
                }

            })
            .catch(res => console.log(res.status))
    }
}


//остановился тут
export function getMovieById(id) {
    return function (dispatch) {
        fetch(`http://localhost:4000/movies/${id}`)
            .then(res => res.json())
            .then(data => dispatch({
                type: actionsTypes.GET_MOVIE_BY_ID,
                payload: data
            }))
    }
}

export function putMovie(id) {
    return function(dispatch) {
        fetch("http://localhost:4000/movies", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: null
        })
            .then(res => console.log(res))
    }
}
