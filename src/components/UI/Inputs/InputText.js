import React from 'react';
import PropTypes from 'prop-types';
import classes from './Inputs.sass';

export default function InputText(props) {
    return (
        <label htmlFor={props.name} className={classes.label}>
            <span>{props.title}</span>
            <input name={props.name}
                   placeholder={props.placeholder}
                   id={props.name}
                   type='text'
                   onChange={props.changeHandler}/>
        </label>
    )
}

InputText.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func,
}