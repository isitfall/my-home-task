import React from 'react';
// import { Link } from "react-router-dom";
import Link from "next/link";

import PropTypes from 'prop-types';
import loopIcon from '../../../assets/icons/Loop.png';
import classes from './Loop.module.sass';

export default function Loop(props) {

    return (
        <Link href={"/search/"} className={classes.Loop}>
            <img src={loopIcon} alt="loop"/>
        </Link>
    )
}

Loop.propTypes = {
    click: PropTypes.func
}
