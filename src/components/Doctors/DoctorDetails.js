import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";
import { auth } from "../../firebase.init";
import useDoctor from "../../hooks/useDoctor";
import useUser from "../../hooks/useUser";

const DoctorDetails = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [authUser] = useAuthState(auth);
  const [user] = useUser(authUser?.email);

  const [product] = useDoctor(doctorId);
  //console.log(product);

  const [qunatityError, setQunatityError] = useState(false);

  const handleMinOrder = (e) => {
    const currentOrder = e.target.value;
    if (currentOrder < product.minOrder) {
      setQunatityError(true);
    } else {
      setQunatityError(false);
    }
  };

  const handleOrder = (e) => {
    e.preventDefault();
    let newApp = {
      id: product?._id,
      dname: product?.doctorname,
      demail: product?.email,
      name: user?.name,
      email: user?.email,
      date: e.target.date.value,
      time: e.target.time.value,
    };

    console.log(newApp);

    axios
      .post("https://digital-healthcare.onrender.com/apps", newApp)
      .then((res) => {
        //console.log(res.data);
        toast.success("Your request has been placed.");
      });
    navigate("/dashboard/myappointments");
  };

  return (
    <div className="container">
      <div className="my-5">
        <div className="row justify-content-between align-items-center ">
          <div className="col-md-5">
            <img
              className="d-block w-75 mx-auto rounded-20 shadow"
              src={product.imgSrc}
            ></img>
          </div>
          <div className="col-md-6">
            <h1 className="my-3 fw-bolder">{product.doctorname}</h1>
            <p>{product?.description}</p>
            <p className="fs-5">
              <span className="fw-bolder"></span>
              {product.degree}
            </p>
            <div className="py-1">
              <h5>
                <span className="fw-bolder text-main">
                  {product?.officeLocation}
                </span>
              </h5>
              <h5>
                Available Time:{" "}
                <span className="fw-bolder text-main">
                  {product.OpeningHours}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center align-items-center p-md-5 pt-md-0">
        <div className="col-lg-6 p-5 pt-0 rounded-20 shadow bg-light-pro mb-5">
          <h4 className="mt-5">Book Appointment</h4>
          <form onSubmit={handleOrder} className="mt-3">
            <div className="my-4">
              <label htmlFor="date" className="form-label">
                Pick A Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="form-control"
                required
              />
            </div>
            <div className="my-4">
              <label htmlFor="time" className="form-label">
                Pick A Date
              </label>
              <select name="time" id="time" className="form-control">
                <option value="09:00 AM">09:00 AM</option>
                <option value="05:00 PM">05:00 PM</option>
              </select>
            </div>
            <button type="submit" className="mt-3 btn btn-dark d-inline-block">
              Book Appointment{" "}
              <i className="ps-1 fas fa-angle-double-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
