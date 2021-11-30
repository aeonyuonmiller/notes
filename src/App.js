import { useRef, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { signup, login, logout, useAuth } from "./firebase";
import "./App.css";
import { AuthContextProvider } from "./context/authContext";

// import Splash from "./views/Splash/Splash";
// import Loading from "./views/Loading/Loading";
import Login from "./views/Login/Login";
import Register from "./views/Register/Register";
import ForgotPassword from "./views/ForgotPassword/ForgotPassword";
import Map from "./views/Map/Map";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/map" component={Map} />
        </Switch>
        {/* <header className="App-header">
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
      </header> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
