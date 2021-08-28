import React, { useRef } from 'react'
import { useRouter } from 'next/router'

import withSession from '../../lib/session';
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
        if(data.loggedIn) {
            router.replace('/');
        }
        else {
            usernameRef.current.value = ''
            passwordRef.current.value = ''
            return
        }

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

export const getServerSideProps = withSession(async function ({ req, res }) {

    const user = req.session.get('user'); // Get the session

    if (!user) { //If there is no user
        return { props: {} }
    }

    return {
        redirect: {
            destination: '/',
            permanent: false,
        }
    }

})



export default login
