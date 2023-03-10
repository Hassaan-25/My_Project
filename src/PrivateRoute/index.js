import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.appState);

  const token = Cookies.get("access_token");

  if (!token && !isLoggedIn) {
    alert("Please log in to view this page.");
    return <Navigate to="/HomePage" />;
  } else {
    return <Component />;
  }
};

export default PrivateRoute;
