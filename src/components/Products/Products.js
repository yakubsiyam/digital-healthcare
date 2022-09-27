import React from "react";
import useProducts from "../../hooks/useProducts";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setProducts] = useProducts();

  return (
    <div className="container">
      <div className="container text-center mt-4">
        <h1 className="mb-3">
          Quickly Get <span className="text-main">Everything </span> Your
          <br /> Treatement Needs From One Place
        </h1>
        <small className="mb-2 d-block text-secondary">
          Anytime. From Anywhere. As Much As You Want!
        </small>
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
                <ProductItem key={product._id} product={product}></ProductItem>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
