import React from 'react';
// import {useHistory} from "react-router";
import { useRouter } from "next/router";

import classes from './HeaderForm.module.sass'
import PropTypes from 'prop-types'

export default function HeaderForm(props) {
    // const history = useHistory()
    const router = useRouter();

    function submitHandler(e) {
        e.preventDefault();

        router.push('/search');
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