import React from 'react';
import {useHistory} from "react-router";

import classes from './HeaderForm.sass'
import PropTypes from 'prop-types'

export default function HeaderForm(props) {
    const history = useHistory()

    function submitHandler(e) {
        e.preventDefault()

        history.push('/search/Search%20Query')
    }

    return (
        <form className={classes.HeaderForm}>
            <input type="text"
                   placeholder={'What do you want to watch?'}/>
            <input
                type="submit"
                onClick={submitHandler}
                value={'search'}

               />
        </form>
    )
}

HeaderForm.propTypes = {
    click: PropTypes.func
}