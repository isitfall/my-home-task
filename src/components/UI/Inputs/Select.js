import React from 'react'
import PropTypes from 'prop-types'
import classes from './Inputs.sass'

export default function Select (props) {

    return (
        <label htmlFor={props.name} className={classes.label}>
            <span>{props.title}</span>
            <select name={props.name}
                    id={props.name}
                    value={props.selectValue}
                    onChange={props.change}
                    className={props.isInvalid ? classes.errorSelect : null}
            >
                <option value="selectGenre">Select Genre</option>
                <option value="Documentary">Documentary</option>
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
                <option value="Crime">Crime</option>
            </select>
            {props.isInvalid ? <p className={classes.errorParagraph}>Select as least one genre to processed</p> : null}
        </label>

    )
}

Select.propTypes = {
    isInvalid: PropTypes.bool,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    change: PropTypes.func,
}