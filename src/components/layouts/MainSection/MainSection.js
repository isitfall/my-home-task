import React from 'react';
import Container from "../Container/Container";
import Nav from "../Nav/Nav";
import SearchCounter from "../../UI/SearchCounter/SearchCounter";
import MoviesList from "../../../containers/MoviesList/MoviesList";

import classes from './MainSection.sass'

export default function MainSection() {
    return(
        <section className={classes.MainSection}>
            <Container>
                <Nav/>
                <SearchCounter />
                <MoviesList />
            </Container>
        </section>
    )
}