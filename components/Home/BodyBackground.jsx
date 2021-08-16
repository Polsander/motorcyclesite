import React from 'react'

import classes from './BodyBackground.module.css';

const BodyBackground = (props) => {
    return (
        <div className={classes.bodychunk}>
            {props.children}
        </div>
    )
}

export default BodyBackground