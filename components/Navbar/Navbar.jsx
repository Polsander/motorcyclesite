import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

import DropDown from './DropDown';


import classes from './Navbar.module.css';



const Navbar = () => {

    const router = useRouter();

    async function logoutHandler(e) {
        e.preventDefault();
        const response = await fetch('/api/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const callback = await response.json();
        console.log(callback);
        router.replace('/');
    }

    return (
        <div className={classes.navigation}>
            <nav className="navbar navbar-expand-lg  ">
                <div className="container-fluid">
                    <Link href="/"><span className={`navbar-brand ${classes.navmain}`}>Navbar</span></Link>
                    <button className={`navbar-toggler ${classes.navbtn}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                            <DropDown />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className={`nav-link ${classes.subnav}`}><Link href="/user">Link</Link></span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link ${classes.subnav}`}><Link href="/user">Link</Link></span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link ${classes.subnav}`}><Link href="/user">Link</Link></span>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <span className={`nav-link ${classes.subnav}`}><Link href="/user/login">Login</Link></span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link ${classes.subnav}`}><Link href="/user/signup">Register</Link></span>
                            </li>
                            <li className="nav-item">
                                <span className={`nav-link ${classes.subnav}`}><button onClick={logoutHandler}>Logout</button></span>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Navbar

