import React from 'react';

import ResultsFilter from '../ResultsFilter/ResultsFilter'
import ResultsSort from "../../../containers/ResultsSort/ResultsSort";

import classes from './Nav.sass'


export default function Nav () {
    return (
        <div className={classes.SectionHeader}>
            <ResultsFilter/>
            <ResultsSort/>
        </div>
    )
}