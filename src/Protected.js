import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const auth = useAuth();
  return auth ? children : <Navigate to="/auth/login" />;
};

function useAuth() {
  if (localStorage.getItem("user-info")) {
    return true;
  } else {
    return false;
  }
}

export default Protected;
