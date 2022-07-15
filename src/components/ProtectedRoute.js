import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isAtuhenticated = JSON.parse(localStorage.getItem("users"));
  if (!isAtuhenticated) {
    return <Navigate to="/" />;
  }
};
export default ProtectedRoute;
