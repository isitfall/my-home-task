import React from 'react';
import PropTypes from 'prop-types';
import classes from './Inputs.sass';

export default function InputDate(props) {
    return (
        <label htmlFor={props.name} className={classes.label}>
            <span>{props.title}</span>
            <input type="date"
                   name={props.name}
                   onChange={props.change}
                   value={props.value}
            />
        </label>
    )
}

InputDate.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func,
}