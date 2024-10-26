import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Authorization.css";

function Authorization() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userInfo = { email, password };

  const user = JSON.parse(window.localStorage.getItem("userData"));

  const author = () => {
    if (
      user &&
      user.email === userInfo.email &&
      user.password === userInfo.password
    ) {
      navigate("/");
    } else {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="login__container">
      <h1 className="login__title">Log In</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="login__input"
        type="text"
        placeholder="email"
      />
      <div className="error__message">{error}</div>
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="login__input"
        type="text"
        placeholder="password"
      />
      <div className="error__message">{error}</div>
      <button onClick={author} className="login__button">
        Login
      </button>
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
