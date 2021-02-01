import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    return (
        <button
            type={props.buttonType}
            className={props.styles}
            onClick={props.click}>
            {props.title}
        </button>
    )
}

Button.PropTypes = {
    styles: PropTypes.string,
    title: PropTypes.string,
    click: PropTypes.func,
    buttonType: PropTypes.string
}