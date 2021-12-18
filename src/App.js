import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
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
    <AnimatePresence>
      <div className="App">
        <Router>
          <AuthContextProvider>
            <Switch>
              <Route path="/" exact component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <ProtectedRoute exact path="/map">
                <Map />
              </ProtectedRoute>
            </Switch>
          </AuthContextProvider>
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
