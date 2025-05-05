import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles, currentUser }) => {
  if (!currentUser || !allowedRoles.includes(currentUser.roles[0])) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;