import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";


function ProtectedRoute({ component: Component, ...rest }) {
  

  const user = useSelector((store) => store.client.user);
  
  const isAuthenticated = user && user.token; 

  return (
    <Route
      {...rest} 
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
}

export default ProtectedRoute;