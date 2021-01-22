import React from 'react';
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
                    {props.showMovieDetails
                        ? <MovieDetails {...props}/>
                        : <HeaderContent/>
                    }

                </Container>
            </div>
        </header>
    )
}

Header.propTypes = {
    click: PropTypes.func,
    showMovieDetails: PropTypes.bool
}