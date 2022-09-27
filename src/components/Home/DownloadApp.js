import React from "react";
import { Link } from "react-router-dom";
import androidApp from "../../media/mobileApp.png";

const DownloadApp = () => {
  return (
    <div className="container my-4">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 col-10 order-lg-1">
          <img className="w-100 p-3" src={androidApp} alt="banner img" />
        </div>
        <div className="col-lg-6 pe-4 order-lg-0">
          <p className="mb-2 text-second ">Download Our App Now</p>
          <h1 className="mb-3">
            We Are <span className="text-main">Just One Tap Away.</span> <br />
            Acess Everything Anytime, <br />
            From <span className="text-main">Anywhere.</span>
          </h1>
          <small className="d-block text-secondary">
            Get the best quality in the market for the lowest price. Acess
            anywhere from your phone by getting our mobile app from play store.
          </small>
          <Link className="mt-5 fw-bolder " to="/playstore">
            <img
              className="d-inline-block mt-4"
              height="50"
              src={androidApp}
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
