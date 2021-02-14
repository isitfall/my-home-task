import React from 'react';

import icon from '../../../assets/icons/404.png'
import Button from "../../UI/Button/Button";
import Logo from "../../UI/Logo/Logo";
import MainTitle from "../../UI/MainTitle/MainTitle";
import Container from "../Container/Container";
import Footer from "../Footer/Footer";

import classes from './404.sass'

export default function PageNotFound() {
    return (
            <Container>
                <div className={classes.PageNotFound}>
                    <Logo/>
                    <div className={classes.content}>
                        <MainTitle>Page Not Found</MainTitle>
                        <img src={icon} alt="icon"/>
                        <Button title={'Go back Home'}/>
                    </div>
                </div>
                <Footer />
            </Container>

    )
}