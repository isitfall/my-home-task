import React from 'react';
import Logo from "../../UI/Logo/Logo";

import classes from './Footer.module.sass'

export default function Footer() {
    return (
        <footer className={classes.footer}>
            <Logo />
        </footer>
    )
}