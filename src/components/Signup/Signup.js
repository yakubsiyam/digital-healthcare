import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogo from "../../media/google.svg";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import logo from "../../media/logo.png";
import axios from "axios";

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    location: "Dhaka, Bangladesh",
    img: "https://i.ibb.co/5sQ7jQp/demouser-01.png",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    hookError,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [
    signInWithGoogle,
    googleUser,
    loadingGoogle,
    googleError,
  ] = useSignInWithGoogle(auth);

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleEmailChange = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);

    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setUserData({ ...userData, email: e.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({ ...errors, email: "Invalid email" });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(e.target.value);

    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({ ...errors, password: "Minimum 6 characters!" });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleAddUser = async (newUser) => {
    await axios
      .put("https://digital-healthcare.onrender.com/users", newUser)
      .then((res) => {
        //console.log(res.data);
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password);
    handleAddUser(userData);
  };

  const handleGoogle = () => {
    signInWithGoogle();
  };

  useEffect(() => {
    const newUser = {
      name: googleUser?.user?.displayName,
      email: googleUser?.user?.email,
      location: "Dhaka, Bangldesh",
      img: googleUser?.user?.photoURL,
    };
    if (newUser.name !== "") {
      handleAddUser(newUser);
      //console.log(newUser);
    }
  }, [googleUser]);

  useEffect(() => {
    const error = hookError || googleError;
    if (error) {
      //console.log(error?.code);
      switch (error?.code) {
        case "auth/email-already-in-use":
          toast.error("Email is already registered.");
          break;
        case "auth/popup-closed-by-user":
          toast.error("Popup closed before login.");
          break;
        default:
          toast.error("Something went wrong.");
      }
    }
  }, [hookError, googleError]);

  const getToken = async (admin) => {
    const email = admin?.user?.email;
    if (email) {
      const { data } = await axios.post(
        "https://digital-healthcare.onrender.com/signin",
        {
          email,
        }
      );
      localStorage.setItem("accessToken", data.accessToken);
    }
  };

  if (googleUser || user) {
    const admin = googleUser || user;
    getToken(admin);
  }

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  useEffect(() => {
    if (user || googleUser) {
      navigate(from, { replace: true });
    }
  }, [user, googleUser]);

  return (
    <div className="container my-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-lg-6 mx-auto p-5 shadow-lg rounded-10">
          <div className="mx-auto">
            <Link
              className="navbar-brand d-flex flex-column align-items-center justify-content-center"
              to="/home"
            >
              <img className="d-block" width="100" src={logo} alt="main logo" />
              <p className="ms-1 fs-3 fw-bolder logo-f text-dark">
                Digital Healthcare
              </p>
            </Link>
          </div>
          <div>
            <form onSubmit={handleSignup}>
              <div className="mb-2 mt-2">
                <label htmlFor="name">Full Name</label>
                <div className="">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                    onBlur={handleNameChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-2 mt-2">
                <label htmlFor="email">Email</label>
                <div className="">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    onBlur={handleEmailChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <div className="">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    id="password"
                    onBlur={handlePasswordChange}
                    required
                  />
                </div>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input bg-dark"
                  type="checkbox"
                  id="gridCheck"
                  required
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Agree to Digital Healthcare's terms and conditions
                </label>
              </div>
              <button type="submit" className="btn btn-dark d-block w-100">
                Sign Up
              </button>
            </form>
            {(loading || loadingGoogle) && (
              <button className="btn btn-dark mt-2" type="button">
                <span
                  className="me-2 spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            )}
            <p className="mt-4">
              Already have an account?
              <Link className="d-block btn btn-outline-dark" to="/signin">
                Log In
              </Link>
            </p>
            <div className="row justify-content-between align-items-center py-3 px-3">
              <hr className="col-5 text-secondary" />
              <p className="col-1 text-secondary">or</p>
              <hr className="col-5 text-secondary" />
            </div>
            <div className="">
              <button
                onClick={handleGoogle}
                className="px-5 mb-3 btn btn-outline-dark d-flex justify-content-center align-items-center w-100"
              >
                <img className="d-block" src={GoogleLogo} alt="" />
                <p className="mt-3 fs-5 ms-3"> Google Sign Up </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
