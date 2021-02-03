import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

import { sortMoviesByReleaseDate, sortMoviesByRating } from "../../Store/actions";
import classes from './ResultsSort.sass'


function ResultsSort (props) {
    const [moviesList, setMoviesList] = useState(null)
    const [state, setState] = useState('releaseDate')

    useEffect(() => {
        setMoviesList(() => props.moviesList ? props.moviesList.length : null)
    }, [props.moviesList])

    useEffect(() => {
        console.log('action running')
        if (props.moviesList) {
            switch (state) {
                case 'releaseDate' :
                    return props.sortMoviesByReleaseDate()
                case 'byRating' :
                    return props.sortMoviesByRating()
                default:
                    return props.sortMoviesByReleaseDate()
            }
        }

    }, [state, moviesList])




    function changeHandler(event) {
        setState(event.target.value)
    }


    return (
        <div className={classes.ResultsSort}>
            <span className={classes.ResultsSort__name}>sort by</span>
            <div className={classes.ResultsSort__select}>
                <select name="SortResults"
                        id="SortResults"
                        value={state}
                        onChange={changeHandler}
                >
                    <option value="releaseDate">Release date</option>
                    <option value="byRating">Rating</option>
                </select>
            </div>
        </div>
    )

}


const mapStateToProps = state => ({
    moviesList: state.fetchMovies.moviesList
})

const mapDispatchToProps = dispatch => ({
    sortMoviesByReleaseDate: () => dispatch(sortMoviesByReleaseDate),
    sortMoviesByRating: () => dispatch(sortMoviesByRating)
})


export default connect(mapStateToProps, mapDispatchToProps) (ResultsSort)


