import React from 'react'
import PropTypes from 'prop-types'
import classes from './DotsIcon.sass'

export default function DotsIcon(props) {
    return (
        <div className={classes.DotsIcon} onClick={props.click}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

DotsIcon.propTypes = {
    click: PropTypes.func
}
