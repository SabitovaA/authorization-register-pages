import React from "react";
import Home from "../pages/Home";
import { Navigate } from "react-router-dom";

function PrivateRoute() {
  const isAuth = window.localStorage.getItem("email");
  return isAuth ? <Home /> : <Navigate to={"/avtor"} />;
}

export default PrivateRoute;
