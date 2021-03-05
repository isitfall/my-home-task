import React from 'react';
import { Route, Switch } from "react-router";

import styles from "./HeaderWrapper.sass";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";
import Loop from "../../UI/Loop/Loop";

import PropTypes from 'prop-types';

export default function HeaderWrapper(props) {
    return (
        <div className={styles.HeaderWrapper}>
            <Logo/>
            <Switch>
                <Route exact path={'/film/:id'}>
                    <Loop  />
                </Route>
                <Route path={'/'}>
                    <Button styles={props.btnClass} title={'+add movie'} click={props.click}/>
                </Route>
            </Switch>

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

