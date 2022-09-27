import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import axiosPrivate from "../../../api/axiosPrivate";
import { auth } from "../../../firebase.init";
import useUser from "../../../hooks/useUser";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe('pk_test_51L4jsRGidBLpUFgqGsbeY9pyo6AKlsFtqx8qLa9St5txn9AbCMrS19lN427h7QVVLw9YaBNGHN3i4ePiIUt1kNDp00TiDWSzk7');

const Payment = () => {
    const { id } = useParams();

    const url = `https://wood-peckers.herokuapp.com/orders`;

    const [authUser] = useAuthState(auth);
    const [user, setUser] = useUser(authUser);

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(url)
            .then(res => {
                setOrders(res.data);
            })
    }, [user]);

    let order = orders.find(x => x._id === id);

    if (order === undefined) {
        return (
            <div className="mx-5 spinner-border text-dark" role="status">
                <span className="visually-hidden"> Loading...</span>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="col-md-8 col-10 shadow rounded-10 my-4 mx-auto">
                    <div className="p-3">
                        <p className="">Hello, {order.name}</p>
                        <h4 className="">Please Pay for <span className="fw-bold">{order.title}</span></h4>
                        <p>Product Quantity: <span className='text-orange-700'>{order.quantity}</span></p>
                        <p>Please pay: <span className="text-main fw-bold">${parseInt(order.total)}</span></p>
                    </div>
                </div>
                <div className="col-md-8 col-10 shadow rounded-10 my-4 mx-auto">
                    <div className="p-3">
                        <Elements stripe={stripePromise}>
                            <CheckOutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        );
    }

};

export default Payment;