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
                    className={props.error ? classes.errorInput : null}
            >
                <option value="selectGenre">Select Genre</option>
                <option value="Documentary">Documentary</option>
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
                <option value="Crime">Crime</option>
            </select>
            {props.error ? <p className={classes.errorParagraph}>{props.error}</p> : null}
        </label>

    )
}

Select.propTypes = {
    error: PropTypes.string,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    change: PropTypes.func,
}