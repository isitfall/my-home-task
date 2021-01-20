import React from 'react';
import Container from "../../components/layouts/Container/Container";
import Nav from "../../components/layouts/Nav/Nav";
import SearchCounter from "../../components/UI/SearchCounter/SearchCounter";
import MoviesList from "../MoviesList/MoviesList";

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