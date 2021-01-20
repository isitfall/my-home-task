import React from 'react';
import PropTypes from 'prop-types'
import classes from './MainTitle.sass'

export default function MainTitle(props) {
    return (
        <h2 style={{fontSize: props.fontSize}} className={classes.title}>{props.children}</h2>
    )
}

MainTitle.propTypes = {
    fontSize: PropTypes.string
}

