import React from "react";
import { Link } from "react-router-dom";
import img404 from "../../media/notfound.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="text-center mt-2 mb-5 pb-5 mx-5">
        <h1 className="fw-bolder mt-4">Oopss!!!...</h1>
        <img
          className="w-75 mx-auto d-block my-3"
          src={img404}
          alt="404 image"
        />
        <h1 className="fw-bolder mt-2">Page Not Found || URL is broken</h1>

        <Link className="btn btn-dark rounded-10" to="/home">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
