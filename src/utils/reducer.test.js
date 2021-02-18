import { fetchMovies } from "../Store/reducers";
import actionsTypes from "../Store/actionsTypes";

describe('fetchMovie reducer testing', () => {

    const moviesList = [
        {
            id: 1,
            genres: ['Documentary', 'Comedy'],
            release_date: 2018,
            vote_average: 6.6
        },
        {
            id: 2,
            genres: ['Horror', 'Crime'],
            release_date: 2020,
            vote_average: 7.2
        }
    ]

    it('reducer FETCH_MOVIES_LIST should return object = {moviesList as Array, moviesToShow as string}', function () {

        let state = {}
        state = fetchMovies(state, {
            type: actionsTypes.FETCH_MOVIES_LIST, payload: {
                movies: {
                    data: moviesList
                },
                moviesToShow: 'All'
            }
        })

        expect(state).toEqual({
            moviesList: moviesList,
            moviesToShow: 'All'
        })
    });


    it('reducer SHOW_MOVIES should return obj = {moviesToShow as string} ', function () {
        let state = {moviesList: moviesList,}

        state = fetchMovies(state, {
            type: actionsTypes.SHOW_MOVIES,
            payload: {
                moviesToShow: 'All'
            }
        })

        expect(state).toEqual({
            moviesList: moviesList,
            moviesToShow: 'All'
        })

    });

    it('reducer SHOW_MOVIES_SORT_DOCUMENTARY should return obj = {moviesList as array, documentaryMoviesList as array, moviesToShow as string} ', function () {
        let state = {moviesList: moviesList,}

        state = fetchMovies(state, {
            type: actionsTypes.SHOW_MOVIES_SORT_DOCUMENTARY,
            payload: {
                moviesToShow: 'Documentary'
            }
        })

        expect(state).toEqual({
            moviesList: moviesList,
            documentaryMoviesList: [{
                id: 1,
                genres: ['Documentary', 'Comedy'],
                release_date: 2018,
                vote_average: 6.6
            }],
            moviesToShow: 'Documentary'
        })

    });

    it('reducer SHOW_MOVIES_SORT_COMEDY should return obj = {moviesList as array, comedyMoviesList as array, moviesToShow as string} ', function () {
        let state = {moviesList: moviesList,}

        state = fetchMovies(state, {
            type: actionsTypes.SHOW_MOVIES_SORT_COMEDY,
            payload: {
                moviesToShow: 'Comedy'
            }
        })

        expect(state).toEqual({
            moviesList: moviesList,
            comedyMoviesList: [{
                id: 1,
                genres: ['Documentary', 'Comedy'],
                release_date: 2018,
                vote_average: 6.6
            }],
            moviesToShow: 'Comedy'
        })

    });

    it('reducer SHOW_MOVIES_SORT_HORROR should return obj = {moviesList as array, horrorMoviesList as array, moviesToShow as string} ', function () {
        let state = {moviesList: moviesList,}

        state = fetchMovies(state, {
            type: actionsTypes.SHOW_MOVIES_SORT_HORROR,
            payload: {
                moviesToShow: 'Horror'
            }
        })

        expect(state).toEqual({
            moviesList: moviesList,
            horrorMoviesList: [{
                id: 2,
                genres: ['Horror', 'Crime'],
                release_date: 2020,
                vote_average: 7.2
            }],
            moviesToShow: 'Horror'
        })

    });

    it('reducer SHOW_MOVIES_SORT_CRIME should return obj = {moviesList as array, crimeMoviesList as array, moviesToShow as string} ', function () {
        let state = {moviesList: moviesList,}

        state = fetchMovies(state, {
            type: actionsTypes.SHOW_MOVIES_SORT_CRIME,
            payload: {
                moviesToShow: 'Crime'
            }
        })

        expect(state).toEqual({
            moviesList: moviesList,
            crimeMoviesList: [{
                id: 2,
                genres: ['Horror', 'Crime'],
                release_date: 2020,
                vote_average: 7.2
            }],
            moviesToShow: 'Crime'
        })

    });

    it('reducer POST_ADD_MOVIE should return obj ={ moviesList as array with one new item }', () => {

        let state = {
            moviesList
        }

        const newMovie = {
            id: 3,
            genres: ['Documentary', 'Comedy', 'Horror'],
            release_date: 2021,
            vote_average: 7.7
        }

        state = fetchMovies(state, {
            type: actionsTypes.POST_ADD_MOVIE,
            payload: newMovie
        })

        expect(state).toEqual({
            moviesList: [...moviesList, newMovie]
        })
    })

    it('reducer GET_MOVIE_BY_ID should return obj= { moviesList as array, currentMovie as object }', () => {
        let state = {
            moviesList
        }

        const currentMovie = moviesList[0].movieId

        state = fetchMovies(state, {
            type: actionsTypes.GET_MOVIE_BY_ID,
            payload: currentMovie
        })

        expect(state).toEqual({
            moviesList,
            currentMovie
        })

    })

    it('reducer PUT_UPDATE_MOVIE should return  obj= { moviesList as array with updated value} ', () => {
        let state = {
            moviesList
        }

        const updatedMovie = {
            id: 1,
            genres: ['Crime'],
            release_date: 2021,
            vote_average: 7.2
        }

        state = fetchMovies(state, {
            type: actionsTypes.PUT_UPDATE_MOVIE,
            payload: updatedMovie
        })

        expect(state).toEqual({
            moviesList: [
                updatedMovie,
                {
                    id: 2,
                    genres: ['Horror', 'Crime'],
                    release_date: 2020,
                    vote_average: 7.2
                },

            ]
        })
    })

    it('reducer FILTER_BY_RELEASE_DATE should return  obj= { moviesList as array which filtered by the release_date }', () => {
        let state = {
            moviesList
        }

        state = fetchMovies(state, {
            type: actionsTypes.FILTER_BY_RELEASE_DATE
        })

        expect(state).toEqual({
            moviesList
        })
    })

    it('reducer FILTER_BY_RATING should return  obj= { moviesList as array which filtered by the vote_average }', () => {
        let state = {
            moviesList
        }
        state = fetchMovies(state, {
            type: actionsTypes.FILTER_BY_RATING
        })
        expect(state).toEqual({
            moviesList: moviesList.reverse()
        })
    })

    it('reducer DELETE_MOVIE should return  obj= { moviesList as array without one elem }', () => {
        let state = {
            moviesList,
        }

        state = fetchMovies(state, {
            type: actionsTypes.DELETE_MOVIE,
            payload: 1
        })
        expect(state).toEqual({
            moviesList: [
                {
                    id: 2,
                    genres: ['Horror', 'Crime'],
                    release_date: 2020,
                    vote_average: 7.2
                }
            ],
            currentMovie: null
        })
    })
})