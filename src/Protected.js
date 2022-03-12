import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/auth/login" />;
};

function useAuth() {
  if (localStorage.getItem("user")) {
    return true;
  } else {
    return false;
  }
}

export default Protected;
