import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../../utils";

const ProtectedRoute = ({ component: Component, ...innerProps }) => {
  const isAuthenticated = isLoggedIn();
  return (
    <Route
      {...innerProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default ProtectedRoute;