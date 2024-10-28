import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useDispatch } from "react-redux";
import { registered } from "../redux/userDataSlice";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = JSON.parse(window.localStorage.getItem("isAuth"));

  console.log(isAuth);

  const onSubmit = (data) => {
    dispatch(registered(data));

    navigate("/");

    reset();
  };

  return (
    <form className="register__container" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="register__title">Register</h1>
      <input
        {...register("name", {
          required: "Field is required!",
        })}
        type="text"
        placeholder="Name"
        className="register__input"
      />
      {errors?.name && <p className="error__message">{errors.name?.message}</p>}
      <input
        {...register("email", {
          required: "Incorrect email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
        type="email"
        placeholder="Email"
        className="register__input"
      />
      {errors?.email && (
        <p className="error__message">{errors.email?.message}</p>
      )}
      <input
        {...register("password", {
          required: "Field is required!",
          minLength: { value: 6, message: "min 6 characters" },
        })}
        className="register__input"
        type="password"
        placeholder="password"
      />
      {errors?.password && (
        <p className="error__message">{errors.password?.message}</p>
      )}
      <button className="register__button" disabled={!isValid}>
        Register
      </button>
      <div className="link__container">
        <p className="register__text">Do you have any account?</p>
        <Link className="author__link" to={"/avtor"}>
          Authorization
        </Link>
      </div>
    </form>
  );
}

export default Register;
