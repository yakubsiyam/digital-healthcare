import React from "react";
import { Link } from "react-router-dom";
import logo from "../../media/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark-pro">
      <div className="container px-4">
        <div className="py-4 row justify-content-between text-start">
          <div className="mt-4 mx-auto col-lg-4 col-sm-12 order-lg-1 order-xs-3">
            <div className="pb-2">
              <Link className="navbar-brand" to="/home">
                <img width="50" src={logo} alt="main logo" />
                <span className="ms-1 fs-3 fw-bolder logo-f text-white">
                  Digital Healthcare
                </span>
              </Link>
            </div>
            <small className="text-second d-block mt-4 mb-3">
              <span className="text-white">Digital Healthcare, Inc.</span> The
              health and well-being of our patients and their health care team
              will always be our priority, so we follow the best practices for
              cleanliness.
            </small>
            <small className="text-second">
              Copyright &copy; 2022.{" "}
              <span className="text-light">Riad, Faruk & Shahin</span>
            </small>
            <div>
              <Link
                to="/desclaimer"
                className="text-decoration-none text-main foo-hover"
              >
                <small>Desclaimer.</small>
              </Link>
              <Link
                to="/tnc"
                className="px-2 text-decoration-none text-main foo-hover"
              >
                <small>Terms & Conditions.</small>
              </Link>
              <Link
                to="/privacy"
                className="text-decoration-none text-main foo-hover"
              >
                <small>Privacy Policy.</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
