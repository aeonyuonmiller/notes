import { useRef, useState } from "react";
import { signup, login, logout, useAuth } from "./firebase";
// import logo from "./logo.svg";
import "./App.css";

import Login from "./views/Login/Login";

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
      <Login />
      <header className="App-header">
        <div>Logged in as: {currentUser?.email} </div>
        <input ref={emailRef} placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button disabled={loading || currentUser} onClick={handleSignup}>
          Register
        </button>
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
