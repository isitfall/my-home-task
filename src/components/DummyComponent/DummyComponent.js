import React from 'react';
import classes from './DummyComponent.css';
import Pic from '../../assets/kotol.jpg'

const dummyComponent =  props  => (
    <div className={classes.DummyComponent}>
        <h1>It's really works!!</h1>
        <img
            src={ Pic }
            alt="kotol"
            className={classes.KotolImg}/>
    </div>
);

export default dummyComponent;