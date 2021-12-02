import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "./authContext";

const ProtectedRoute = ({ children }) => {
  const { user, setUser, loading } = useContext(AuthContext);
  const isAuthenticated = user !== null ? true : false;
  return loading ? (
    <p>Loading</p>
  ) : (
    <Route>{() => (isAuthenticated ? children : <Redirect to="/" />)}</Route>
  );
};

export default ProtectedRoute;
