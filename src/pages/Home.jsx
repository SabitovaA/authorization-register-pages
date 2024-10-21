import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const logOut = () => {};
  return (
    <div className="home__container">
      <h1 className="home__title">Home Page</h1>
      <Link className="author__link" to={"/avtor"}>
        Log out
      </Link>
      ;
    </div>
  );
}

export default Home;
