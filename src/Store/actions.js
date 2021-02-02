import actionsTypes from "./actionsTypes";

export const sortMoviesByReleaseDate = () => ({
    type: actionsTypes.FILTER_BY_RELEASE_DATE
})

export const sortMoviesByRating = () => ({
    type: actionsTypes.FILTER_BY_RATING
})