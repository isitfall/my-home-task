import React from 'react';
// import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import loopIcon from '../../../assets/icons/Loop.png';
import classes from './Loop.module.sass';

export default function Loop(props) {

    return (
        <Link to={"/search/Search%20Query"} className={classes.Loop}>
            <img src={loopIcon} alt="loop"/>
        </Link>
    )
}

Loop.propTypes = {
    click: PropTypes.func
}
