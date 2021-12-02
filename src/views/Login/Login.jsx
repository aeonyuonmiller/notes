import React, { useRef, useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './Login.css'

import Button from '../../components/Button/Button'
import Linker from '../../components/Link/Link'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {user, setUser, handleLogin, loading} = useContext(AuthContext)
    
    // function handleEnter() {
    //     handleLogin(emailRef.current.value, passwordRef.current.value);
    // }

    return (
        <div className="wrapper">
            <div className="title">
                <div>🌍</div>
                <p>Login <span>your account</span></p>
            </div>
            <div className="form">
                <input ref={emailRef} placeholder="Email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <Button text="Login" />
            </div>
            <div className="sub-nav">
                <Linker to="/" text="Register" />
                <Linker to="/forgot-password" text="Forgot password" />
            </div>
        </div>
    )
}

export default Login
