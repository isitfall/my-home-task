import React from 'react';
import Container from "../../components/layouts/Container/Container";
import HeaderWrapper from "../../components/layouts/HeaderWrapper/HeaderWrapper";
import HeaderContent from "../../components/layouts/HeaderContent/HeaderContent";

import styles from './Header.sass';


export default function Header(props) {
    return (
        <header className={styles.Header}>
            <div className={styles.Header__blur}>
                <Container>
                    <HeaderWrapper btnClass={styles.Header__btn} click={props.click}/>
                    <HeaderContent/>
                </Container>
            </div>
        </header>
    )
}