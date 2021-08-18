import React, { useRef } from 'react'
import { useRouter } from 'next/router'

import Navbar from '../../components/Navbar/Navbar';

const login = () => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const router = useRouter();

    async function submitHandler(e) {
        e.preventDefault();

        const enteredUsername = usernameRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const userData = {
            username: enteredUsername,
            password: enteredPassword
        }

        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();
        console.log(data);
        router.replace('/');

    }

    return (
        <React.Fragment>
            <Navbar />
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" ref={usernameRef} />

                <label htmlFor="password">Password</label>
                <input type="password" ref={passwordRef} />
                <button>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default login
