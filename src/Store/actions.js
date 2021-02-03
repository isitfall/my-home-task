import actionsTypes from "./actionsTypes";

export const sortMoviesByReleaseDate = dispatch => dispatch({
    type: actionsTypes.FILTER_BY_RELEASE_DATE
})

export const sortMoviesByRating = dispatch => dispatch({
    type: actionsTypes.FILTER_BY_RATING
})