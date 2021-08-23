import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn, isClient } from "../../utils";

const PublicRoute = ({ component: Component, ...innerProps }) => {
  const isAuthenticated = isLoggedIn();
  const isClientUser = isClient();
  return (
    <Route
      {...innerProps}
      render={(props) =>
        !isAuthenticated ? <Component {...props} /> : isClientUser?<Redirect to="/dashboard" />:<Redirect to="/agent/agent-dashboard" />
      }
    />
  );
}

export default PublicRoute;