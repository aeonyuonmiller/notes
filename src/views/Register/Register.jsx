import React, { useRef, useContext } from 'react'
// import { useHistory } from "react-router-dom";

import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import { AuthContext } from '../../context/authContext'
import './Register.css'

const Register = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const {user, setUser, handleSignup, loading} = useContext(AuthContext)
    // const history = useHistory();
    function handleRegister() {
        handleSignup(emailRef, passwordRef);
    }

    return (
        <div className="wrapper">
            <div className="title">
                <div>🌍</div>
                <p>Create <span>your account</span></p>
            </div>
            <div className="form">
                <input ref={emailRef} placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                {/* <TextInput ref="emailRef" placeholder="Email" /> */}
                <Button text="Register" onClick={handleRegister} />

            </div>
            <div className="sub-nav">
                {/* decomment useHistory */}
                {/* <Button text="test" onClick={() => history.push("/login")} /> */}
                <Link to="/login" text="Login" />
                <Link to="/forgot-password" text="Forgot password" />
            </div>
        </div>
    )
}

export default Register
