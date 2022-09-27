import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import logo from "../../media/logo.png";

const Navbar = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="container navbar navbar-expand-lg navbar-light pt-3">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img width="120" src={logo} alt="main logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item me-2">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" to="/products">
                Services
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link" to="/portfolio">
                Doctors
              </Link>
            </li>
            {user?.uid && (
              <li className="nav-item me-2">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
            {user?.uid ? (
              <li className="ms-2 nav-item">
                <Link
                  onClick={handleSignout}
                  className="btn btn-outline-main"
                  to="/home"
                >
                  Sign Out <i className="fas fa-sign-in-alt"></i>
                </Link>
              </li>
            ) : (
              <li className="ms-2 nav-item">
                <Link className="btn btn-outline-main" to="/signin">
                  Sign In <i className="fas fa-sign-in-alt"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
