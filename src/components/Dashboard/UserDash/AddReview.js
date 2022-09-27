import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import { auth } from "../../../firebase.init";
import useReviews from "../../../hooks/useReviews";
import useUser from "../../../hooks/useUser";
import DashNav from "../DashNav";

const AddReview = () => {
  const [authUser, loading] = useAuthState(auth);
  const [user, setUser] = useUser(authUser.email);
  let navigate = useNavigate();

  const [reviews, setReviews] = useReviews();
  const totalReviews = reviews.length;

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const newReview = {
      id: totalReviews,
      name: user.name,
      email: user.email,
      location: user.location,
      img: user.img,
      rating: parseInt(e.target.rating.value),
      title: e.target.title.value,
      text: e.target.text.value,
    };
    //console.log(newReview);

    axiosPrivate
      .post("https://digital-healthcare.onrender.com/reviews", newReview)
      .then((res) => {
        //console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Feedback is recorded.");
        }
        navigate("/dashboard");
      });
  };

  return (
    <div className="container">
      <div className="row">
        <DashNav></DashNav>
        {loading ? (
          <div className="mx-5 spinner-border text-dark" role="status">
            <span className="visually-hidden"> Loading...</span>
          </div>
        ) : (
          <div className="col-lg-9">
            <div className="my-3 py-2 bg-dark-pro container rounded-10 text-white">
              <form
                onSubmit={handleUpdateProfile}
                className="px-5 pt-3 pb-5 bg-dark-pro rounded-10 shadow-lg text-main"
              >
                <h3 className="mt-4 mb-0 text-main">Add A Review</h3>
                <small className="mb-3 text-second d-block">
                  Please provide a feedback to improve our service.
                </small>
                <div className="my-4">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    defaultValue={user.name}
                    disabled
                  />
                </div>
                <div className="my-4 d-block">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    defaultValue={user.email}
                    disabled
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="rating" className="form-label">
                    Rate Our Service{" "}
                    <span className="text-ss text-white">( Out of 5 )</span>
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    className="form-control"
                    name="rating"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="title" className="form-label">
                    Feedback Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="text" className="form-label">
                    Your Feedback
                  </label>
                  <textarea
                    type="text"
                    rows="5"
                    className="form-control"
                    name="text"
                    required
                  />
                </div>
                <button type="submit" className="mt-4 btn btn-main box">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddReview;
