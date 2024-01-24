import React from 'react';
import { useState } from 'react';
import { Wrapper } from "../components/Login/LoginStyle";
import { FaUser, FaLock } from "react-icons/fa";

function LoginSignUp() {
    // State to manage form input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);
    const [error, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState('');

    //function to handle email validation
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(value);
        setIsValidEmail(isValid);
    };

    const validatePassword = (value) => {
        // Simple password validation: at least 6 characters
        const isValid = value.length >= 8;
        setIsValidPassword(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform additional actions if both email and password are valid

        if (email && password) {
            // Perform login logic (e.g., send data to server, check credentials)
            console.log('Login successful!');
            setLoggedIn(true);
        } else {
            console.log('Please enter both username and password.');
            setErrorMessage('Please enter both username and password.');
        }

        if (isValidEmail && isValidPassword) {
            // Your login logic here
            console.log('Login successful!');

        } else {
            console.log('Login failed. Please check your credentials.');
        }

        setEmail('');
        setPassword('');
    };

    return (
        <Wrapper>
            <div className='gridhero2'></div>

            <div className='login-page text-center'>
                <h2></h2>
                {loggedIn && <p className="Success" style={{ color: 'green' }}>Login successful!</p>}
                <form onSubmit={handleSubmit} className='form'>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <label className="email mt-5">Email:
                        <input
                            type="email"
                            id="email"
                            placeholder='Email'
                            className='input-box'
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {!isValidEmail && (
                            <p style={{ color: 'red' }}>Please enter a valid email address.</p>
                        )}
                    </label>
                    <FaUser className='icon' />
                    <br />

                    <label className="password">Password:
                        <input
                            type="password"
                            id="password"
                            className="input-box"
                            placeholder='Password'
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {!isValidPassword && (
                            <p style={{ color: 'red' }}>
                                Password must be at least 6 characters long.
                            </p>
                        )}
                    </label>
                    <FaLock className='icon' />
                    <br />
                    <div htmlFor="">
                        <input type="checkbox" /> Remember me
                        <a href="">Forgot Password</a>
                    </div>
                    <div>
                        <p>Don't have an account?<a href="">Sign Up</a></p>
                    </div>

                    <button type="submit" className='submit'>Login</button>
                </form>
            </div>
        </Wrapper>
    );

}

export default LoginSignUp;