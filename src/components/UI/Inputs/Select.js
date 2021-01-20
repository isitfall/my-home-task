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
            >
                <option value="selectGenre">Select Genre</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Action">Action</option>
            </select>
        </label>

    )
}

Select.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func,
}