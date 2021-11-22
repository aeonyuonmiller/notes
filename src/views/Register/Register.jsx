import React from 'react'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import './Register.css'

const Register = () => {
    return (
        <div className="wrapper">
            <div className="title">
                <h2>🌍</h2>
                <h1>Create <span>your account</span></h1>
            </div>
            <div className="form">
                EMAIL and PASSWORD
                <Button text="Register" />
                <Link href="#" text="Login" />
                <Link href="#" text="Forgot password" />
            </div>
        </div>
    )
}

export default Register
