import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../Products/ProductItem";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container py-4">
      <div className="mx-3 p-5 pb-3 text-center bg-light-pro rounded-10">
        <h2 className="mb-3">Top Trending Services</h2>
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
              <ProductItem key={product.id} product={product}></ProductItem>
            ))
          )}
        </div>
        <div className="my-5 text-center">
          <Link
            className="mt-4 px-4 border-2 fw-bolder btn btn-outline-main shadow"
            to="/services"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
