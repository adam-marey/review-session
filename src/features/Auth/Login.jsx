import React, {useState} from 'react'
import {useRegisterMutation, useLoginMutation} from "./authSlice.js";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    // initial states

    const [isLogin, setIsLogin] = useState(true);  // hooks goes to the top level of the function
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // data that comes from the slice
    const [login] = useLoginMutation() // hooks
    const [register] = useRegisterMutation()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    // helper function to toggle between login and register

    const authAction = isLogin ? 'Login' : 'Register'
    const altCopy = isLogin
    ? "Need an Account? Register here. "
    : "Already have an account? Login here."

    // we need to send a request authentication action to the api
    const handleSubmit = async (e) => {
        e.preventDefault()
        const authMethod = isLogin ? login : register
        const credentials = {username, password}
        setLoading(true)
        setError(null)

        try {
            // we need to unwrap here if we want to catch error
            const response = await authMethod(credentials).unwrap()
            console.log("token", response.token)

            setTimeout(() => {
                navigate('/profile')
            }, 5000);
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }


    return (
        <div>
            <h1>{authAction}</h1>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete='username'
                />
                <label>Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete='current-password'
                />
                <button>{authAction}</button>
                <a onClick={() => setIsLogin(!isLogin)}>
                    {altCopy}
                </a>
                {loading && <p>Loading....</p>}
                {error && <p>error.data.error.message</p>}
            </form>
        </div>
    )
}

export default Login
