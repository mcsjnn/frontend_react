import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles, currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/login" />; // Redirige al inicio de sesión si no está autenticado
  }
  if (!allowedRoles.some((role) => currentUser.roles.includes(role))) {
    return <Navigate to="/" />; // Redirige al inicio si no tiene el rol adecuado
  }
  return children;
};

export default ProtectedRoute;