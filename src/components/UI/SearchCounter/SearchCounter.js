import React from 'react';
import styles from './SearchCounter.sass'

export default function SearchCounter(props) {
    return <h2> <span>{props.counter || '39'}</span> movies found </h2>
}