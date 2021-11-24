import { useRef, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { signup, login, logout, useAuth } from "./firebase";
// import logo from "./logo.svg";
import "./App.css";

// import Login from "./views/Login/Login";
import Button from "./components/Button/Button";
import Splash from "./views/Splash/Splash";
import Loading from "./views/Loading/Loading";

import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import ForgotPassword from "./views/ForgotPassword/ForgotPassword";

function App() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Account already exists!");
    }
    setLoading(false);
  }
  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Already logged in!");
    }
    setLoading(false);
  }
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/forgot-password" exact>
          <ForgotPassword />
        </Route>
      </Switch>
      {/* <Splash /> */}
      <header className="App-header">
        <div>{currentUser?.email}</div>
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <Button
          disabled={loading || currentUser}
          onClick={handleSignup}
          text="Register"
        />
        <button disabled={loading || currentUser} onClick={handleLogin}>
          Login
        </button>
        <button disabled={loading || !currentUser} onClick={handleLogout}>
          Logout
        </button>
      </header>
    </div>
  );
}

export default App;
