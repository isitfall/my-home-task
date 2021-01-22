import React from 'react';
import PropTypes from 'prop-types'
import classes from './MainTitle.sass'

export default function MainTitle(props) {
    return (
        <h2 style={{fontSize: props.fontSize,
            textTransform: props.textTransform,
            fontWeight: props.fontWeight
        }}
            className={classes.title}
        >
            {props.children}
        </h2>
    )
}

MainTitle.propTypes = {
    fontSize: PropTypes.string,
    textTransform: PropTypes.string,
    fontWeight: PropTypes.number
}

