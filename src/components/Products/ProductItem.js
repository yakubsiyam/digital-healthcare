import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { id, title, img, description } = product;
  let navigate = useNavigate();

  const handleProductDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div className="col-xl-4 col-md-6 text-start mx-auto">
      <div className="p-2 h-100">
        <div className="d-flex flex-column box justify-content-between bg-white h-100 rounded-10 shadow shadow-hover">
          <div className="">
            <img
              className="mb-3 w-50 mx-auto mt-2 d-block rounded-10 shadow"
              src={img}
            />
            <div className="px-3">
              <h5 className="fw-bolder">{title}</h5>
              <p className="fw-bolder">{description}</p>
            </div>
          </div>
          <div className="pb-3 text-center">
            <button
              onClick={() => handleProductDetails(id)}
              className="btn btn-dark shadow"
              to="/productdetails"
            >
              View More <FontAwesomeIcon className="ps-2" icon={faCaretRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
