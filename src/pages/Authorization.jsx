import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Authorization.css";
import { useForm } from "react-hook-form";

function Authorization() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const navigate = useNavigate();

  const isAuth = JSON.parse(window.localStorage.getItem("isAuth"));
  console.log(isAuth);

  const onSubmit = (data) => {
    console.log(data);
    if (!isAuth) {
      setErrorEmail("You don't have an account");
      return;
    }
    let hasError = false;
    if (isAuth.email !== data.email) {
      setErrorEmail("Incorrect email or you don't have an account");
      hasError = true;
    }
    if (isAuth.password !== data.password) {
      setError("Incorrect password");
      hasError = true;
    }
    if (!hasError) {
      navigate("/");
    }
    reset();
  };

  return (
    <form className="login__container" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="login__title">Log In</h1>
      <input
        {...register("email", {
          required: "Incorrect email or you dont have account",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
        type="email"
        placeholder="Email"
        className="login__input"
      />
      {errors?.email && (
        <p className="error__message">{errors.email?.message}</p>
      )}
      <div className="error__message">{errorEmail}</div>
      <input
        {...register("password", {
          required: "Field is required!",
          minLength: { value: 6, message: "min 6 characters" },
        })}
        className="login__input"
        type="password"
        placeholder="password"
      />
      {errors?.password && (
        <p className="error__message">{errors.password?.message}</p>
      )}
      <div className="error__message">{error}</div>
      <button disabled={!isValid} className="login__button">
        Login
      </button>
      <div className="link__container">
        <p className="login__text">Need an account?</p>
        <Link className="register__link" to={"/register"}>
          Register
        </Link>
      </div>
    </form>
  );
}

export default Authorization;
