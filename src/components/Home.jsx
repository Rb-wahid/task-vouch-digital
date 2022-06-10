import React from "react";
import Login from "./Login";
import img from "../assets/img/image.png";

const Home = () => {
  return (
    <div className="d-flex">
      {/* for mobile version */}
      <div className="w-100 vh-100 mx-5 d-flex d-lg-none justify-content-center align-items-center">
        <Login />
      </div>
      {/* for desktop version */}
      <div className="w-50 d-none d-lg-flex justify-content-center align-items-center">
        <Login />
      </div>
      {/* for desktop version */}
      <div className="w-50 d-none d-lg-block">
        <img width="100%" src={img} alt="" />
      </div>
    </div>
  );
};

export default Home;
