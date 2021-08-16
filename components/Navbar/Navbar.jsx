import React, { useState } from 'react'

import DropDown from './DropDown';


import classes from './Navbar.module.css';



const Navbar = () => {
    return (
        <div className={classes.navigation}>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <a className={`navbar-brand ${classes.navmain}`} href="#">Navbar</a>
                    <button className={`navbar-toggler ${classes.navbtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <DropDown/>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar

