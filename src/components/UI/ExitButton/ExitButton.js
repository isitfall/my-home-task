import React from 'react';
import PropTypes from 'prop-types'
import classes from './ExitButton.sass'

export default function ExitButton(props) {
    return (
        <div className={classes.ExitButton}>
            <div onClick={props.click}>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

ExitButton.propTypes ={
    click: PropTypes.func
}