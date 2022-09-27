import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";
import newsImg from "../../media/newsletter.png";

const Newsletter = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    e.target.email.value = "";
    e.target.alert.checked = false;
    e.target.bttn.disabled = true;
    const resolveAfter1Sec = new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );
    toast.promise(resolveAfter1Sec, {
      pending: "Processing... Please wait.",
      success: "Newsletter Subscription Successful!",
    });
  };

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

  return (
    <div className="container mb-4">
      <div className="row justify-content-between align-items-center">
        <div className="mx-auto col-lg-6 col-10">
          <img className="w-100 p-3" src={newsImg} alt="banner img" />
        </div>
        <div className="col-lg-6 ps-5">
          <p className="mb-2 text-second ">GET DISCOUNT ALERTS REGULARLY</p>
          <h3 className="mb-4">
            Subcribe To <span className="text-main">Our Newsletter</span>
          </h3>
          <form onSubmit={handleNewsletter} className="col-10">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email Address"
              defaultValue={user.email}
              aria-label="Email Address"
              disabled={user.email}
              required
            />
            <div className="form-check my-2">
              <input
                className="form-check-input bg-dark"
                type="checkbox"
                id="gridCheck"
                defaultChecked
                name="alert"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Get Offers & Discount Alerts
              </label>
            </div>
            <button className="mt-3 btn btn-main" type="submit" name="bttn">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
