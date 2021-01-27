import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import ResultFilterItem from "../../UI/ResultFilterItem/ResultFilterItem";
import classes from './ResultsFilter.sass'

import actionsTypes from "../../../Store/actionsTypes";
import {getMovieList} from "../../../Store/actionCreators";

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
            action: actionsTypes.FETCH_MOVIES_SORT_DOCUMENTARY
        },
        {
            title: 'Comedy',
            isActive: false,
            action: actionsTypes.FETCH_MOVIES_SORT_COMEDY
        },
        {
            title: 'Horror',
            isActive: false,
            action: actionsTypes.FETCH_MOVIES_SORT_HORROR
        },
        {
            title: 'Crime',
            isActive: false,
            action: actionsTypes.FETCH_MOVIES_SORT_CRIME
        }
    ])

    //по дефолту - при загрузке получим весь массив фильмов
    useEffect(() => props.getMoviesList(), [])


    const clickHandler = (index) => {
        const arr =[...menuList]

        arr.forEach(elem => elem.isActive = false)
        arr[index].isActive = true
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

const mapDispatchToProps = dispatch => {
    return {
        getMoviesList: () => dispatch(getMovieList()),
    }
}

export default connect(null, mapDispatchToProps)(ResultFilter)
