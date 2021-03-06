import React from 'react';
import PropTypes from 'prop-types';
import classes from './Inputs.module.sass';

export default function InputText(props) {
    return (
        <label htmlFor={props.name} className={classes.label}>
            <span>{props.title}</span>
            <input name={props.name}
                   placeholder={props.placeholder}
                   id={props.name}
                   type='text'
                   onChange={props.change}
                   value={props.inputValue}
                   className={props.error ? classes.errorInput : null}
                   data-testid={props.testId}
            />
            {props.error ? <p className={classes.errorParagraph}>{props.error}</p> : null}
        </label>
    )
}

InputText.propTypes = {
    error: PropTypes.string,
    inputValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func,
    testId: PropTypes.string
}