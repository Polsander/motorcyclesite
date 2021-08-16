import React from 'react'

import classes from './HeaderText.module.css';

const HeaderText = () => {
    return (
        <div className="row text-center mt-5">
            <div className={classes.styletext}>
                <h1>The Best Motorcycle Routes</h1>
                <h1>In <span>Canada</span></h1>
            </div>
        </div>

    )
}

export default HeaderText