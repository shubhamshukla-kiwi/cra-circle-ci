import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn, isClient } from "../../utils";

const ProtectedRoute = ({ component: Component, ...innerProps }) => {
  const isAuthenticated = isLoggedIn();
  const isClientUser = isClient();
  return (
    <Route
      {...innerProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : isClientUser?<Redirect to="/login" />:<Redirect to="/agent/login" />
      }
    />
  );
}

export default ProtectedRoute;