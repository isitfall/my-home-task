import React from 'react';
import classes from './ResultFilterItem.sass'

export default function ResultFilterItem(props) {
    return (
        <li className={classes.ResultFilterItem} on>
            {props.children}
        </li>
    )
}