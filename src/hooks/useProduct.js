import axios from "axios";
import { useEffect, useState } from "react";


const useProduct = (id) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`https://wood-peckers.herokuapp.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
    }, [id]);
    return [product, setProduct]
};

export default useProduct;