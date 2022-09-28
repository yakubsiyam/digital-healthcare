import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import { auth } from "../../../firebase.init";
import DashNav from "../DashNav";
import useUser from "../../../hooks/useUser";
import { useForm } from "react-hook-form";
import axios from "axios";

const MakeDoctor = () => {
  const [authUser] = useAuthState(auth);
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newAdmin = {
      email: data.email,
      role: "doctor",
    };
    //console.log(newAdmin);
    axios
      .put("https://digital-healthcare.onrender.com/users", newAdmin)
      .then((res) => {
        //console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Doctor is added.");
        }
        navigate("/dashboard");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <DashNav></DashNav>
        <div className="col-lg-9">
          <div className="my-3 py-2 bg-dark-pro container rounded-10 text-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-main"
            >
              <h3 className="mt-4 mb-0 text-main">Add A Doctor</h3>
              <small className="mb-3 text-second d-block">
                Please provide a feedback to improve our service.
              </small>
              <div className="my-4 d-block">
                <label htmlFor="email" className="form-label">
                  {" "}
                  New Doctor Email
                </label>
                <input
                  className="form-control"
                  type="email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-white pt-1 d-block">
                    This field is required
                  </span>
                )}
              </div>
              <input
                className="btn btn-main box d-inline-block"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeDoctor;
