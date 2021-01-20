import React from 'react';
import classes from './HeaderForm.sass'

export default function HeaderForm() {
    return (
        <form className={classes.HeaderForm}>
            <input type="text"
                   placeholder={'What do you want to watch?'}/>
            <input
                type="submit"
                value={'search'}
               />
        </form>
    )
}