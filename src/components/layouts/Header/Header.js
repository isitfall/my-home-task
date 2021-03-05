import React from 'react';
import { Switch, Route } from "react-router";

import Container from "../Container/Container";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
import HeaderContent from "../HeaderContent/HeaderContent";
import MovieDetails from "../MovieDetails/MovieDetails";

import PropTypes from 'prop-types'

import styles from './Header.sass';


export default function Header(props) {

    return (
        <header className={styles.Header}>
            <div className={styles.blur}>
                <Container>
                    <HeaderWrapper
                        btnClass={styles.btn}
                        showMovieDetails = {props.showMovieDetails}
                        click={props.click}/>

                    <Switch>
                        <Route exact path={'/film/:id'}>
                            <MovieDetails {...props}/>
                        </Route>
                        <Route path={'/'}>
                            <HeaderContent/>
                        </Route>
                    </Switch>

                </Container>
            </div>
        </header>
    )
}

Header.propTypes = {
    click: PropTypes.func,
    showMovieDetails: PropTypes.bool
}