import React from 'react';
import PropTypes from 'prop-types'
import classes from './ExitButton.sass'

export default function ExitButton(props) {
    return (
        <div className={classes.ExitButton}>
            <div onClick={props.click}
                 style={{
                     height: `${props.large}px`,
                     width: `${props.large}px`,
                 }}>
                <span style={{height: `${props.tickness}px`}}>{null}</span>
                <span style={{height: `${props.tickness}px`}}>{null}</span>
            </div>
        </div>
    )
}

ExitButton.propTypes ={
    tickness: PropTypes.number,
    large: PropTypes.number,
    click: PropTypes.func
}