import React, {useState} from 'react';
import MovieItem from "../../components/UI/MovieItem/MovieItem";

import pulpPic from '../../assets/images/MoviesList/PulpFict.png'
import bohemianPic from '../../assets/images/MoviesList/Bohemian-Rhapsody-2018-movie-poster.jpg'
import reservoirDogsPic from '../../assets/images/MoviesList/reservoir-dogs.jpg'

import classes from './MoviesList.sass'


export default function MoviesList(props) {

    const [state, setState] = useState({
        movies: [
            {
                id: 1,
                name: 'Pulp Fiction',
                genre: "Action & Adventure",
                year: 2004,
                img: pulpPic
            },
            {
                id: 2,
                name: 'Bohemian Rhapsody',
                genre: "Drama, Biography, Music",
                year: 2017,
                img: bohemianPic
            },
            {
                id: 2,
                name: 'Reservoir Dogs',
                genre: "Oscar winning Movie",
                year: 1994,
                img: reservoirDogsPic
            },
            {
                id: 4,
                name: 'Pulp Fiction',
                genre: "Action & Adventure",
                year: 2004,
                img: pulpPic
            },
            {
                id: 5,
                name: 'Bohemian Rhapsody',
                genre: "Drama, Biography, Music",
                year: 2017,
                img: bohemianPic
            },
            {
                id: 6,
                name: 'Reservoir Dogs',
                genre: "Oscar winning Movie",
                year: 1994,
                img: reservoirDogsPic
            },
        ]
    })



    return (
        <div className={classes.MoviesList}>
            {state.movies.map(elem => {
                return <MovieItem
                    key={elem.id}
                    id={elem.id}
                    name={elem.name}
                    genre={elem.genre}
                    year={elem.year}
                    img={elem.img}/>
                }
            )}
        </div>
    )

}