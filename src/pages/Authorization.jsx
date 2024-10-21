import React from "react";
import { Link } from "react-router-dom";
import "./Authorization.css";

function Authorization() {
  return (
    <div className="login__container">
      <h1 className="login__title">Log In</h1>
      <input className="login__input" type="text" placeholder="email" />
      <input className="login__input" type="text" placeholder="password" />
      <button className="login__button">Login</button>
      <div className="link__container">
        <p className="login__text">Need an account?</p>
        <Link className="register__link" to={"/register"}>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Authorization;
