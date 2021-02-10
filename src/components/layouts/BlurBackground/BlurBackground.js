import React from 'react';
import classes from './BlurBackgroud.sass'

import Logo from "../../UI/Logo/Logo";
import Container from "../Container/Container";

export default function BlurBackground(props) {
    return (
        <div className={classes.BlurBackground}>
            <Container>
                <div className={classes.logo}>
                    <Logo/>
                </div>
                {props.children}
            </Container>

        </div>
    )
}