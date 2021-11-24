import React, {useRef} from 'react'
import Button from '../../components/Button/Button'
import Link from '../../components/Link/Link'
import './ForgotPassword.css'

const ForgotPassword = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

    return (
        <div className="wrapper">
            <div className="title">
                <div>🌍</div>
                <p>Forgot <span>my password</span></p>
            </div>
            <div className="form">
                <input ref={emailRef} placeholder="Email" />
                {/* <TextInput ref="emailRef" placeholder="Email" /> */}
                <Button text="Send Password" />

            </div>
            <div className="sub-nav">
                <Link href="/register" text="Register" />
                <Link href="/login" text="Login" />
            </div>
        </div>
    )
}

export default ForgotPassword
