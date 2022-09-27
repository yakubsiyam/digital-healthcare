import { useEffect, useState } from "react";

const useDoctors = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://digital-healthcare.onrender.com/doctors")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return [products, setProducts];
};

export default useDoctors;
