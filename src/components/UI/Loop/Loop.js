import React from 'react';
import PropTypes from 'prop-types';
import loopIcon from '../../../assets/icons/Loop.png';
import classes from './Loop.sass';

export default function Loop(props) {
    return (
        <button onClick={props.click} className={classes.Loop}>
            <img src={loopIcon} alt="loop"/>
        </button>
    )
}

Loop.propTypes = {
    click: PropTypes.func
}
