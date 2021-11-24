import React, {useRef} from 'react'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import './Register.css'

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

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
                <Button text="Register" />

            </div>
            <div className="sub-nav">
                <Link href="/login" text="Login" />
                <Link href="/forgot-password" text="Forgot password" />
            </div>
        </div>
    )
}

export default Register
