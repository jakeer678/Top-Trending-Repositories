import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ path, element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Route path={path} element={element} />;
};

export default ProtectedRoute;
