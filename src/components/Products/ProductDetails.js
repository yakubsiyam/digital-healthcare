import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../api/axiosPrivate';
import { auth } from '../../firebase.init';
import useProduct from '../../hooks/useProduct';
import useUser from '../../hooks/useUser';

const ProductDetails = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [authUser] = useAuthState(auth);
    const [user] = useUser(authUser.email);

    let [product] = useProduct(productId);

    const [qunatityError, setQunatityError] = useState(false);

    const handleMinOrder = (e) => {
        const currentOrder = e.target.value;
        if (currentOrder < product.minOrder) {
            setQunatityError(true);
        } else {
            setQunatityError(false);
        }
    }

    const handleOrder = (e) => {
        e.preventDefault();
        const orderQuantity = parseInt(e.target.quantity.value);
        const price = orderQuantity * parseFloat(product.price);
        let newOrder = {
            pid: product._id,
            title: product.name,
            quantity: orderQuantity,
            total: parseInt(price),
            pstatus: "Pending",
            dstatus: "Pending",
            email: user.email,
            name: user.name,
            phone: e.target.phone.value,
            location: e.target.location.value,
            txtid: "",
        };

        axios.post("https://wood-peckers.herokuapp.com/orders", newOrder)
            .then(res => {
                //console.log(res.data);
                toast.success("Your order has been placed.");
            });

        const updatedQuantity = parseInt(product.stock) - orderQuantity;
        const updatedProduct = {
            id: product._id,
            stock: updatedQuantity
        };
        //console.log(updatedProduct);
        axiosPrivate.put("https://wood-peckers.herokuapp.com/products", updatedProduct)
            .then(res => {
                //console.log(res.data);
            });
        navigate('/dashboard/myorders');
    }

    return (
        <div className='container'>
            <div className='my-5'>
                <div className='row justify-content-between align-items-center '>
                    <div className='col-md-5'>
                        <img className='d-block w-75 mx-auto rounded-20 shadow' src={product.img}></img>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='my-3 fw-bolder'>{product.name}</h1>
                        <p>{product.text}</p>
                        <p className='fs-5'><span className='fw-bolder'>Price: </span>${product.price}</p>
                        <div className='py-1'>
                            <h5>Available Quantity: <span className='fw-bolder text-main'>{product.stock}</span></h5>
                            <h5>Minimum Order Quantity: <span className='fw-bolder text-main'>{product.minOrder}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center align-items-center p-md-5 pt-md-0'>
                <div className='col-lg-6 p-5 pt-0 rounded-20 shadow bg-light-pro mb-5'>
                    <h4 className='mt-5'>Place Your Order</h4>
                    <form onSubmit={handleOrder} className="mt-3">
                        <div className="my-4">
                            <label htmlFor="quantity" className="form-label">Order Quantity</label>
                            <input onChange={handleMinOrder} type="number" min={product?.minOrder} max={product?.stock} className="form-control" name="quantity" defaultValue={product?.minOrder} required />
                            {
                                qunatityError && <small className='text-danger text-ss'>Less than minimum order quantity.</small>
                            }
                        </div>
                        <div className="my-4">
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" name="name" defaultValue={user.name} disabled />
                        </div>
                        <div className="my-4">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="text" className="form-control" name="email" defaultValue={user.email} disabled />
                        </div>
                        <div className="my-4">
                            <label htmlFor="phone" className="form-label">Your Phone</label>
                            <input type="text" className="form-control" name="phone" defaultValue={user.phone} required />
                        </div>
                        <div className="my-4">
                            <label htmlFor="location" className="form-label">Delivery Address</label>
                            <input type="text" className="form-control" name="location" defaultValue={user.location} required />
                        </div>
                        <button type='submit' className='mt-3 btn btn-dark d-inline-block' disabled={qunatityError}>Place Order <i className="ps-1 fas fa-angle-double-right"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;