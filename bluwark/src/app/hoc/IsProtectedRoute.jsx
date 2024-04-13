import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const IsProtectedRoute = ({ children, ...rest }) => {
  // Check if the user is authenticated (you can implement your own authentication logic)
  const isAuthenticated = /* Your authentication logic here */;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default IsProtectedRoute;