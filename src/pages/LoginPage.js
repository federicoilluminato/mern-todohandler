import React from 'react'
import { useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth'

const userCredentials = {};

const LoginPage = () => {
    const location = useLocation();
    // console.log(location)
    const { login } = useAuth();

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar Sesión</button>
        </div>
    )
}

export default LoginPage
