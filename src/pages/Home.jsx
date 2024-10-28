import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, userDataSelector } from "../redux/userDataSlice";

function Home() {
  const { user, userData } = useSelector(userDataSelector);
  console.log(user, userData);
  const dispatch = useDispatch();

  const isAuth = JSON.parse(window.localStorage.getItem("isAuth"));

  const logOutHome = () => {
    dispatch(logout(isAuth));
  };
  return (
    <div className="home__container">
      <h1 className="home__title">Home Page</h1>
      <Link onClick={logOutHome} className="author__link" to={"/avtor"}>
        Log out
      </Link>
      ;
    </div>
  );
}

export default Home;
