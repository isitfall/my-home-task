import React from 'react';
import styles from './Container.module.sass'

import PropTypes from 'prop-types'

export default function Container(props) {
    return(
        <div className={styles.Container}>
            {props.children}
        </div>
    )
}

// Container.propTypes = {
//     children: PropTypes.element.isRequired
// }
