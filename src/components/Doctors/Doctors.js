import React from "react";
import useDoctors from "../../hooks/useDoctors";
import DoctorItem from "./DoctorItem";

const Doctors = () => {
  const [products, setProducts] = useDoctors();

  return (
    <div className="container">
      <div className="container text-center mt-4">
        <h1 className="mb-3">
          Meet Our<span className="text-main">Doctors </span>
        </h1>
      </div>
      <div className="container my-5 px-4">
        <div className="container px-5 py-5 rounded-10 bg-light-pro">
          <div className="row g-4 pt-5">
            {products.length === 0 ? (
              <div className="d-flex justify-content-center text-main">
                <h1>Loading.....</h1>
                <div className="mt-2 ms-2 spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              products.map((product) => (
                <DoctorItem key={product._id} product={product}></DoctorItem>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
