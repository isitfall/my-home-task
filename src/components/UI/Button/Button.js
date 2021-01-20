import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
    return (
        <button
            className={props.styles}
            onClick={props.click}>
            {props.title}
        </button>
    )
}

Button.PropTypes = {
    styles: PropTypes.string,
    title: PropTypes.string,
    click: PropTypes.func
}