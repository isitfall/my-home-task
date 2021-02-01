import React from 'react';
import PropTypes from 'prop-types'
import classes from './BtnsFormEditor.sass'
import Button from "../../UI/Button/Button";

export default function BtnsFormEditor(props) {
    return (
        <div className={classes.wrapper}>
            <Button
                buttonType={'reset'}
                styles={classes.removeBtn}
                title={'reset'}
                click={props.click}
            />
            <Button
                buttonType={"submit"}
                styles={classes.addBtn}
                title={'save'}
            />
        </div>
    )
}

BtnsFormEditor.propTypes ={
    click: PropTypes.func
}