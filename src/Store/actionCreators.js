import actionsTypes from "./actionsTypes";

export const showMoviesSorted = (title) => {
    switch(title) {
        case 'All':
            return {type: actionsTypes.SHOW_MOVIES}
        case 'Documentary':
            return {type: actionsTypes.SHOW_MOVIES_SORT_DOCUMENTARY}
        case 'Comedy':
            return {type: actionsTypes.SHOW_MOVIES_SORT_COMEDY}
        case 'Horror':
            return {type: actionsTypes.SHOW_MOVIES_SORT_HORROR}
        case 'Crime':
            return {type: actionsTypes.SHOW_MOVIES_SORT_CRIME}
    }
}

export const postMovie = (data) => dispatch => {
    fetch("http://localhost:4000/movies", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method : 'POST',
        body: JSON.stringify({
            ...data,
            runtime: +data.runtime,
            genres: [data.genres]
        })
    })
        .then(res => res.json())
        .then(responseBody => dispatch({
            type: actionsTypes.POST_ADD_MOVIE,
            payload: responseBody
        }))
        .catch(err => console.log(err))
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
                            movies: data,
                            moviesToShow: 'All'
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


export function getMovieById(id) {
    return function (dispatch) {
        fetch(`http://localhost:4000/movies/${id}`)
            .then(res => res.json())
            .then(data => dispatch({
                type: actionsTypes.GET_MOVIE_BY_ID,
                payload: data
            }))
            .catch(err => console.log(err))
    }
}

export function putMovie(data) {
    return function(dispatch) {
        fetch("http://localhost:4000/movies", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({...data})
        })
            .then(res => res.json())
            .then(body => dispatch({
                type: actionsTypes.PUT_UPDATE_MOVIE,
                payload: body
            }))
            .catch(err=>console.log(err))
    }
}

export function deleteMovie(id) {
    return function (dispatch) {
        fetch(`http://localhost:4000/movies/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        })
            .then(dispatch({
                type: actionsTypes.DELETE_MOVIE,
                payload: id
            }))
            .catch(err => console.log(err))
    }
}








