import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();
  const userData = { name, email, password };

  const register = () => {
    window.localStorage.setItem("email", email);
    navigate("/");
  };
  const user = window.localStorage.getItem("email");
  console.log(user);
  return (
    <div className="register__container">
      <h1 className="register__title">Register</h1>
      <input
        className="register__input"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="name"
      />
      <input
        className="register__input"
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="email"
      />
      <input
        className="register__input"
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="new password"
      />
      <button className="register__button" onClick={register}>
        Click
      </button>
      <div className="link__container">
        <p className="register__text">Do you have any account?</p>
        <Link className="author__link" to={"/avtor"}>
          Authorization
        </Link>
      </div>
    </div>
  );
}

export default Register;
