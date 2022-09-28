import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import useUser from "../../hooks/useUser";

const Profile = () => {
  const [authUser] = useAuthState(auth);
  const [user] = useUser(authUser.email);
  //console.log(user);
  return (
    <div className="col-lg-9">
      <div className="my-3 py-2 bg-dark-pro container rounded-10 text-white">
        <p className="text-main text-center mt-5">You are now logged in as</p>
        {user.email ? (
          <div className="row mx-2 my-5 align-items-center justify-content-center">
            <div className="col-4 col-md-3 d-flex align-items-center justify-content-center">
              <img
                className="d-block w-100 rounded-circle"
                src={user.img}
                alt={user.name}
              />
            </div>
            <div className="col-7 col-md-5">
              <h3 className="m-0 p-0">{user.name}</h3>
              <small className="text-main text-capitalize">{user?.role}</small>
            </div>
            {user.bio && (
              <div>
                <h4 className="text-center mt-5 text-main">About Me</h4>
                <p>{user.bio}</p>
              </div>
            )}
            <h4 className="text-center mt-5 text-main">Contact</h4>
            <p>
              <span className="text-main fw-bolder pe-2">Email:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="text-main fw-bolder pe-2">Address:</span>{" "}
              {user.location}
            </p>
            {user.phone && (
              <p>
                <span className="text-main fw-bolder pe-2">Phone:</span>{" "}
                {user.phone}
              </p>
            )}
            {user.linkedIn && (
              <p>
                <span className="text-main fw-bolder pe-2">LinkedIn:</span>{" "}
                <a className="text-white" href={user.linkedIn} target="_blank">
                  {user.linkedIn}
                </a>
              </p>
            )}
            <div className="text-center mt-4">
              <Link
                className="btn btn-outline-main text-start my-3 me-4"
                to="/dashboard/editprofile"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        ) : (
          <div className="d-flex my-5 text-main justify-content-center">
            <div className="me-4 spinner-border" role="status">
              <span className="visually-hidden"> Loading...</span>
            </div>
            <h3>Loading...</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
