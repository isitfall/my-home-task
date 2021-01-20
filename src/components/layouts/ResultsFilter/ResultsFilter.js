import React from 'react';
import ResultFilterItem from "../../UI/ResultFilterItem/ResultFilterItem";
import classes from './ResultsFilter.sass'

export default function ResultFilter() {
    return (
        <ul className={classes.ResultFilter}>
            <ResultFilterItem>All</ResultFilterItem>
            <ResultFilterItem>Documentary</ResultFilterItem>
            <ResultFilterItem>Comedy</ResultFilterItem>
            <ResultFilterItem>Horror</ResultFilterItem>
            <ResultFilterItem>Crime</ResultFilterItem>
        </ul>
    )
}
