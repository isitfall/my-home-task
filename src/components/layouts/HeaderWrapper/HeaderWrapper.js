import React from 'react';
import { useLocation } from "react-router";

import styles from "./HeaderWrapper.sass";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";
import Loop from "../../UI/Loop/Loop";

import PropTypes from 'prop-types';

export default function HeaderWrapper(props) {
    const location = useLocation()
    return (
        <div className={styles.HeaderWrapper}>
            <Logo/>
            {props.showMovieDetails || location.pathname.includes('/film/')
                ? <Loop  />
                : <Button styles={props.btnClass} title={'+add movie'} click={props.click}/>
            }

        </div>
    )
}

HeaderWrapper.PropTypes = {
    btnClass: PropTypes.string.isRequired,
    showMovieDetails: PropTypes.bool
}

HeaderWrapper.defaultProps ={
    showLoop: false
}

