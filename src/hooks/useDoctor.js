import axios from "axios";
import { useEffect, useState } from "react";

const useProduct = (id) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://digital-healthcare.onrender.com/doctors/${id}`)
      .then((res) => {
        setProduct(res.data);
      });
  }, [id]);
  return [product, setProduct];
};

export default useProduct;
