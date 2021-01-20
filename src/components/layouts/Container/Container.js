import React from 'react';
import styles from './Container.sass'

import PropTypes from 'prop-types'

export default function Container(props) {
    return(
        <div className={styles.Container}>
            {props.children}
        </div>
    )
}

Container.PropTypes = {
    children: PropTypes.element.isRequired
}
