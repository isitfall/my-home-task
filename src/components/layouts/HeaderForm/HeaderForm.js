import React from 'react';
import classes from './HeaderForm.sass'
import PropTypes from 'prop-types'

export default function HeaderForm(props) {
    return (
        <form className={classes.HeaderForm}>
            <input type="text"
                   placeholder={'What do you want to watch?'}/>
            <input
                type="submit"
                onClick={props.click}
                value={null}

               />
        </form>
    )
}

HeaderForm.propTypes = {
    click: PropTypes.func
}