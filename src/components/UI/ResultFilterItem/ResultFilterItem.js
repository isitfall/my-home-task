import React from 'react';
import PropTypes from 'prop-types'
import classes from './ResultFilterItem.sass'

export default function ResultFilterItem({isActive, click, children}) {
    return (
        <li className={ isActive
            ? [classes.ResultFilterElem, classes.active].join(' ')
            : classes.ResultFilterElem
        }
        onClick={click}
        >
            {children}
        </li>
    )
}

ResultFilterItem.propTypes = {
    isActive: PropTypes.bool,
    click: PropTypes.func
}
