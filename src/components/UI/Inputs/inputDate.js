import React from 'react';
import PropTypes from 'prop-types';
import classes from './Inputs.sass';

export default function InputDate(props) {
    return (
        <label htmlFor={props.name} className={classes.label}>
            <span>{props.title}</span>
            <input type="date"
                   id={props.name}
                   name={props.name}
                   onChange={props.change}
                   value={props.inputValue}
                   className={ props.error ? classes.errorInput : null}
            />
            {props.error ? <p className={classes.errorParagraph}>{props.error}</p> : null}
        </label>
    )
}

InputDate.propTypes = {
    error: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func,
}