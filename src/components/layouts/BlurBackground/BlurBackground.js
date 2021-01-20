import React from 'react';
import classes from './BlurBackgroud.sass'

export default function BlurBackground(props) {
    return (
        <div className={classes.BlurBackground}>
            {props.children}
        </div>
    )
}