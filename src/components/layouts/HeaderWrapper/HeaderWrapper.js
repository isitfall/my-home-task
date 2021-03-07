import React from 'react';
// import { Route, Switch } from "react-router";
import { useRouter } from "next/router";

import styles from "./HeaderWrapper.module.sass";
import Logo from "../../UI/Logo/Logo";
import Button from "../../UI/Button/Button";
import Loop from "../../UI/Loop/Loop";

import PropTypes from 'prop-types';

export default function HeaderWrapper(props) {
    const router = useRouter();

    return (
        <div className={styles.HeaderWrapper}>
            <Logo/>

            {props.showMovieDetails || router.pathname.includes('/film/')
                ? <Loop  />
                : <Button styles={props.btnClass} title={'+add movie'} click={props.click}/>
            }
            {/*<Switch>*/}
            {/*    <Route exact path={'/film/:id'}>*/}
            {/*        <Loop  />*/}
            {/*    </Route>*/}
            {/*    <Route path={'/'}>*/}
            {/*        <Button styles={props.btnClass} title={'+add movie'} click={props.click}/>*/}
            {/*    </Route>*/}
            {/*</Switch>*/}

        </div>
    )
}

HeaderWrapper.propTypes = {
    btnClass: PropTypes.string.isRequired,
    showMovieDetails: PropTypes.bool
}

HeaderWrapper.defaultProps ={
    showLoop: false
}

