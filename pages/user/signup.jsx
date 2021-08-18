import React from 'react'

import Navbar from '../../components/Navbar/Navbar'

const signup = (props) => {

    async function registrationHandler(e) {
        e.preventDefault();
        console.log('hi');
        
    }

    return (
        <React.Fragment>
            <Navbar/>
            <h1>Register A New Account</h1>
            <form onSubmit={registrationHandler}>
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" />

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" />
                <button>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default signup
