import React from 'react';
import {connect} from 'react-redux'
import classes from './SearchCounter.sass'

export default function SearchCounter(props) {
    return <h2 className={classes.h2}>
        <span>{
            props.moviesListLength
                ? props.moviesListLength
                :'39'
        }</span> movies found</h2>
}

// const mapStateToProps = (state) => ({
//     moviesListLength: state.fetchMovies.moviesList
// })

// export default connect(mapStateToProps, null) (SearchCounter)

