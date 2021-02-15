import React from 'react';
import { Link } from "react-router-dom";

import icon from '../../assets/icons/404.png'
import Button from "../../components/UI/Button/Button";
import Logo from "../../components/UI/Logo/Logo";
import MainTitle from "../../components/UI/MainTitle/MainTitle";
import Container from "../../components/layouts/Container/Container";
import Footer from "../../components/layouts/Footer/Footer";

import classes from './404.sass'

export default function NoMatch() {
    return (
        <div style={{
            background: "#232323",
            height: '100vh',
            boxSizing: 'border-box'
        }}>
            <Container>
                <div className={classes.PageNotFound}>
                    <Logo/>
                    <div className={classes.content}>
                        <MainTitle>Page Not Found</MainTitle>
                        <img src={icon} alt="icon"/>
                        <Link to={'/'}>
                            <Button title={'Go back to Home'}
                                    styles={classes.button}
                            />
                        </Link>

                    </div>
                </div>
            </Container>
            <Footer />

        </div>

    )
}