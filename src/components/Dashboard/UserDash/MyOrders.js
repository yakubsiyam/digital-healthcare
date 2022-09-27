import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosPrivate from '../../../api/axiosPrivate';
import { auth } from '../../../firebase.init';
import DashNav from '../DashNav';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const getMyOrders = async () => {
        const email = user?.email;
        const { data } = await axiosPrivate.get(`https://wood-peckers.herokuapp.com/myorders?user=${email}`);
        setOrders(data);
    }

    useEffect(() => {
        getMyOrders();
    }, [user]);

    const handlePayment = (id) => {
        navigate(`/dashboard/payment/${id}`);
    }

    let confirmation = false;
    let deleteId = "";

    const handleConfirmation = (id) => {
        deleteId = id;
        confirmation = true;
        //console.log(confirmation);
    }

    const handleCancelOrder = () => {
        if (confirmation) {
            axiosPrivate.delete(`https://wood-peckers.herokuapp.com/orders/${deleteId}`)
                .then(res => {
                    if (res.data.deletedCount) {
                        toast.warn("Order is Cancelled.");
                        const remainingorders = orders.filter(order => order._id !== deleteId);
                        setOrders(remainingorders);
                    }
                })
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <DashNav></DashNav>
                <div className="col-lg-9">
                    <div className="my-3 py-2 bg-dark-pro rounded-10 text-white">
                        <h3 className='text-center text-main mt-4'>My Orders</h3>
                        <div className="row mx-3">
                            {
                                orders.map((order) => (
                                    <div className='col-md-6 col-lg-4 p-3' key={order._id}>
                                        <div className='bg-light text-dark p-3 rounded-10 h-100 d-flex flex-column justify-content-between'>
                                            <h5 className='fw-bolder'>{order.title}</h5>
                                            <p>Total: <span className='text-main'>${parseInt(order.total)}</span></p>
                                            <p>Status: <span className='text-main'>{order.dstatus}</span></p>
                                            {
                                                order.pstatus === "Pending" ? (
                                                    <p>Payment: <span className='text-danger fw-bold'>{order.pstatus}</span></p>
                                                ) : (
                                                    <p>Payment: <span className='text-success fw-bold'>{order.pstatus}</span></p>
                                                )
                                            }
                                            {
                                                order.txtid !== "" ? (
                                                    <p>Transaction Id: <span className='text-warning fw-bold text-ss of-x-h'>{order.txtid}</span></p>
                                                ) : (
                                                    <span></span>
                                                )
                                            }
                                            {
                                                (order.pstatus === "Paid") ? (
                                                    <button className="btn btn-secondary disabled d-block w-100">Cancel</button>
                                                ) : (
                                                    <span className='d-block'>
                                                        <button onClick={() => handlePayment(order._id)} className="btn btn-warning d-block w-100 mb-2">Pay Now</button>
                                                        <button onClick={() => handleConfirmation(order._id)} className="btn btn-main d-block w-100" data-bs-toggle="modal" data-bs-target="#confirmationModal">Cancel</button>
                                                    </span>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            <div className="modal fade" id="confirmationModal" tabindex="-1" aria-labelledby="confirmationModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h4 className="modal-title fw-bolder text-main" id="confirmationModalLabel">Please Confirm</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body text-dark">
                                            <h5>Are you sure, you want to cancel this order?</h5>
                                        </div>
                                        <div className="modal-footer">
                                            <button onClick={() => handleCancelOrder()} type="button" className="btn btn-main" data-bs-dismiss="modal">Cancel Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;