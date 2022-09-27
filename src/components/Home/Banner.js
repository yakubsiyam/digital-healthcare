import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../media/heroImg.png";
import heroImgC from "../../media/heroImgC.png";

const Banner = () => {
  return (
    <div className="container mb-4">
      <div className="row justify-content-between align-items-center">
        <div className="mx-auto col-lg-6 col-10 order-lg-2">
          <img className="w-100 p-3" src={heroImg} alt="banner img" />
        </div>
        <div className="col-lg-6 order-lg-1 pe-4">
          <p className="mb-2 text-second ">15% OFF EVERYTHING</p>
          <h1 className="mb-3">
            Providing Best
            <span className="text-main"> Medical Care</span>
          </h1>
          <small className="mb-2 d-block text-secondary">
            The health and well-being of our patients and their health care team
            will always be our priority, so we follow the best practices for
            cleanliness.
          </small>
          <Link
            className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main"
            to="/signup"
          >
            Appointment Now <i className="ps-1 fas fa-angle-double-right"></i>
          </Link>
        </div>
        <div className="mx-auto col-lg-6 col-10 order-lg-3 p-5">
          <img className="w-100 p-3" src={heroImgC} alt="banner img" />
        </div>
        <div className="col-lg-6 order-lg-4 ps-4">
          <p className="mb-2 text-second ">WE ARE JUST ONE CLICK AWAY</p>
          <h1 className="mb-3">
            Improving The <span className="text-main">Quality </span> Of Your
            Life Through Better Health.
          </h1>
          <small className="mb-2 d-block text-secondary">
            Anytime. From Anywhere. As Treatement As You Want!
          </small>
          <Link
            className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main"
            to="/404"
          >
            Explore <i className="ps-1 fas fa-angle-double-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
