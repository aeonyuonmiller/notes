import React, { useRef, useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Register.css";

import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { user, setUser, handleSignup, loading } = useContext(AuthContext);

  function handleRegister() {
    handleSignup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className="registerWrapper">
      <div className="title">
        <div>🌍</div>
        <p>
          Create <span>your account</span>
        </p>
      </div>
      <div className="form">
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <Button text="Register" onClick={handleRegister} />
      </div>
      <div className="sub-nav">
        <Link to="/login" text="Login" />
        <Link to="/forgot-password" text="Forgot password" />
      </div>
    </div>
  );
};

export default Register;
