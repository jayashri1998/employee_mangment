import React from "react";
import { Navigate } from "react-router-dom";
import { getToken, isTokenExpired, refreshToken } from "../utils/utils";

const PrivateRoute = ({ children }) => {
  const token = getToken();

  if (!token || isTokenExpired()) {
    return <Navigate to="/" />;
  }
  refreshToken();

  return children;
};

export default PrivateRoute;
