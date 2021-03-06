import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
// import {useLocation} from "react-router";
import { useRouter } from "next/router";
import ResultFilterItem from "../../UI/ResultFilterItem/ResultFilterItem";
import classes from './ResultsFilter.module.sass'

import actionsTypes from "../../../Store/actionsTypes";
import { getMoviesSorted, showMoviesSorted } from "../../../Store/actionCreators";
import {sortMoviesByReleaseDate} from "../../../Store/actions";

function ResultFilter(props) {

    const [menuList, setMenuList] = useState([
        {
            title:  'All',
            isActive: true,
            action: actionsTypes.FETCH_MOVIES_LIST
        },
        {
            title: 'Documentary',
            isActive: false,
            action: actionsTypes.SHOW_MOVIES_SORT_DOCUMENTARY
        },
        {
            title: 'Comedy',
            isActive: false,
            action: actionsTypes.SHOW_MOVIES_SORT_COMEDY
        },
        {
            title: 'Horror',
            isActive: false,
            action: actionsTypes.SHOW_MOVIES_SORT_HORROR
        },
        {
            title: 'Crime',
            isActive: false,
            action: actionsTypes.SHOW_MOVIES_SORT_CRIME
        }
    ])
    const router = useRouter();

    //по дефолту - при загрузке получим весь массив фильмов
    useEffect(() => {
        if (router.pathname.includes('/search/') && !props.currentMovie) {
            props.getMoviesSorted(menuList[0].action, menuList[0].title)
        }
    }, [menuList[0].action, router.pathname])


    const clickHandler = (index) => {


        const arr =[...menuList]

        arr.forEach(elem => elem.isActive = false)
        arr[index].isActive = true

        if (router.pathname !== '/') {
            props.showMoviesSorted(menuList[index].title)
        }

        setMenuList(() => arr)
    }

    return (
        <ul className={classes.ResultFilter}>
            {
                menuList.map((item,index) => <ResultFilterItem
                    click={() => clickHandler(index)}
                    isActive={item.isActive}
                    key={item.title}
                >
                    {item.title}
                </ResultFilterItem>)
            }
        </ul>
    )
}

const mapStateToProps = state => ({
    currentMovie: state.fetchMovies.currentMovie
})

const mapDispatchToProps = dispatch => {
    return {
        getMoviesSorted: (actionType, title) => dispatch(getMoviesSorted(actionType, title)),
        showMoviesSorted: title => dispatch(showMoviesSorted(title)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultFilter)
