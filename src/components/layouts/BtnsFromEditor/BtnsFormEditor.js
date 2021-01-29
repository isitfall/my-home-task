import React from 'react';
import PropTypes from 'prop-types'
import classes from './BtnsFormEditor.sass'
import Button from "../../UI/Button/Button";

export default function BtnsFormEditor(props) {
    return (
        <div className={classes.wrapper}>
            <Button
                styles={classes.removeBtn}
                title={'reset'}
                click={props.click}
            />
            <Button
                styles={classes.addBtn}
                title={'save'}
            />
        </div>
    )
}

BtnsFormEditor.propTypes ={
    click: PropTypes.func
}