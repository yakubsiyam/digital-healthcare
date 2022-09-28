import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const {
    _id,
    title,
    imgSrc,
    doctorname,
    speciality,
    degree,
    officeLocation,
  } = product;
  let navigate = useNavigate();

  const handleProductDetails = (id) => {
    navigate(`/doctors/${id}`);
  };

  return (
    <div className="col-xl-4 col-md-6 text-start mx-auto">
      <div className="p-2 h-100">
        <div className="d-flex flex-column box justify-content-between bg-white h-100 rounded-10 shadow shadow-hover">
          <div className="">
            <img
              className="mb-3 w-100 d-block rounded-10 shadow"
              src={imgSrc}
            />
            <div className="px-3">
              <h5 className="fw-bolder">{doctorname}</h5>
              <small className="d-flex justify-content-between text-secondary">
                <span className="d-block">{title}</span>
                <span className="d-block fw-bolder text-dark">${degree}</span>
              </small>
            </div>
            <div className="pt-2 px-3">
              <small className="text-secondary text-ss">
                {speciality}
                <span
                  onClick={() => handleProductDetails(_id)}
                  className="fw-bolder cursor-pointer btn btn-danger mb-2"
                >
                  Make Appointment
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
