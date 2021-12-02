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
import ProtectedRoute from "./context/protectedRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <ProtectedRoute exact path="/map">
            <Map />
          </ProtectedRoute>
        </Switch>
        {/* 
        <button disabled={loading || currentUser} onClick={handleLogin}>
          Login
        </button>
        */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
