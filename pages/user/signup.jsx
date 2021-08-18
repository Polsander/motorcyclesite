import React, {useRef} from 'react'
import {useRouter} from 'next/router'

import Navbar from '../../components/Navbar/Navbar'

const signup = (props) => {

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const router = useRouter();

    async function registrationHandler(e) {
        e.preventDefault();

        const enteredUsername = usernameRef.current.value;
        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;

        const userData = {
            username: enteredUsername,
            email: enteredEmail,
            password: enteredPassword
        }

        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
        router.replace('/');
        
    }

    return (
        <React.Fragment>
            <Navbar/>
            <h1>Register A New Account</h1>
            <form onSubmit={registrationHandler}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" ref={usernameRef} />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" ref={emailRef} />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" ref={passwordRef} />
                <button>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default signup
