import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faMapLocationDot,
  faThumbsUp,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Summery = () => {
  return (
    <div className="container text-center mt-5 summery pt-5">
      <h1 className="text-main">Millions of Patients Trust Us</h1>
      <p>We Try To Understand Patients Expectations</p>
      <div className="row align-items-center justify-content-between my-5">
        <div className="col-md-3 col-6 mx-auto my-3">
          <h1 className="text-main my-2">
            <FontAwesomeIcon icon={faMapLocationDot} />
          </h1>
          <h1 className="fw-bolder">47</h1>
          <p className="text-main my-2">Countries</p>
        </div>
        <div className="col-md-3 col-6 mx-auto my-3">
          <h1 className="text-main my-2">
            <FontAwesomeIcon icon={faTruck} />
          </h1>
          <h1 className="fw-bolder">935+</h1>
          <p className="text-main my-2">Orders Delivered</p>
        </div>
        <div className="col-md-3 col-6 mx-auto my-3">
          <h1 className="text-main my-2">
            <FontAwesomeIcon icon={faUsers} />
          </h1>
          <h1 className="fw-bolder">374+</h1>
          <p className="text-main my-2">Happy Clients</p>
        </div>
        <div className="col-md-3 col-6 mx-auto my-3">
          <h1 className="text-main my-2">
            <FontAwesomeIcon icon={faThumbsUp} />
          </h1>
          <h1 className="fw-bolder">687+</h1>
          <p className="text-main my-2">Feedbacks</p>
        </div>
      </div>
    </div>
  );
};

export default Summery;
