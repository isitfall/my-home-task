import React from 'react';
import { useHistory } from "react-router";

import PropTypes from 'prop-types';
import loopIcon from '../../../assets/icons/Loop.png';
import classes from './Loop.sass';

export default function Loop(props) {

    const history = useHistory()

    function redirectToSearchPage() {
        return history.push('/search/Search%20Query')
    }

    return (
        <button onClick={redirectToSearchPage} className={classes.Loop}>
            <img src={loopIcon} alt="loop"/>
        </button>
    )
}

Loop.propTypes = {
    click: PropTypes.func
}
