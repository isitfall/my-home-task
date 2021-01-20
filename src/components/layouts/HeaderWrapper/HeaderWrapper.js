import React from 'react';
import styles from "./HeaderWrapper.sass";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";

import PropTypes from 'prop-types';

export default function HeaderWrapper(props) {
    return (
        <div className={styles.HeaderWrapper}>
            <Logo/>
            <Button styles={props.btnClass} title={'+add movie'} click={props.click}/>
        </div>
    )
}

HeaderWrapper.PropTypes = {
    btnClass: PropTypes.string.isRequired
}

