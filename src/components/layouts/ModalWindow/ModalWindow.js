import React, {useContext} from 'react';
import PropTypes from 'prop-types';

import Button from "../../UI/Button/Button";
import ExitButton from "../../UI/ExitButton/ExitButton";
import MainTitle from "../../UI/MainTitle/MainTitle";
import BlurBackground from "../BlurBackground/BlurBackground";
import congratsIcon from '../../../assets/icons/Success.png';
import classes from './ModalWindow.module.sass';

import {MovieListItemContext} from "../../../Context/Context";

export default function ModalWindow(props) {
    const context = useContext(MovieListItemContext)

    return(
        <BlurBackground>
            <div className={classes.ModalWindow}>
                <ExitButton click={context.toggleSuccess}/>
                <img src={congratsIcon} alt="Success"/>
                <MainTitle textAlign={'center'} fontSize={'2.4rem'} fontWeight={300}>Congratulations!</MainTitle>
                <p>This movie has been added to database successfully</p>
            </div>
        </BlurBackground>
    )
}

ModalWindow.propTypes = {
    click: PropTypes.func
}