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

export function getMoviesSortedDocumentary() {
    return function (dispatch) {
        fetch("http://localhost:4000/movies")
            .then(response => response.json())
            // .then(body => )
            .then(data => {
                const arr = data.data.sort((item) => {
                    item.genres.find('Comedy')
                    //ОСТАНОВИЛСЯ ТУТ НА СОРТИРОВКЕ!
                })
                console.log(arr)
                dispatch({
                    type: actionsTypes.FETCH_MOVIES_LIST,
                    payload: {
                        movies: data
                    }
                })
            })
    }
}
