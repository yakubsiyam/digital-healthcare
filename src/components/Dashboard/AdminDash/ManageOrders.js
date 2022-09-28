import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import { auth } from "../../../firebase.init";
import DashNav from "../DashNav";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  const getOrders = async () => {
    const { data } = await axios.get(
      `https://digital-healthcare.onrender.com/apps`
    );
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, [user]);

  const handleDelete = (deleteId) => {
    axios
      .delete(`https://digital-healthcare.onrender.com/apps/${deleteId}`)
      .then((res) => {
        if (res.data.deletedCount) {
          toast.warn("Appointment is Cancelled.");
          const remainingorders = orders.filter(
            (order) => order._id !== deleteId
          );
          setOrders(remainingorders);
        }
      });
  };

  return (
    <div className="container">
      <div className="row">
        <DashNav></DashNav>
        <div className="col-lg-9">
          <div className="my-3 py-2 bg-dark-pro rounded-10 text-white">
            <h3 className="text-center text-main mt-4">Manage Appointments</h3>

            <div className="pt-2 table-responsive">
              {orders.length === 0 ? (
                <button className="btn fs-5 text-white pb-2" type="button">
                  <span
                    className="me-4 spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <table className="table text-light">
                  <thead className="text-main">
                    <tr>
                      <th>Doctor</th>
                      <th>Patient</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order?._id}>
                        <td>{order?.dname}</td>
                        <td>{order?.name}</td>
                        <td>{order?.date}</td>
                        <td>{order?.time}</td>
                        <td onClick={handleDelete(order?._id)}>Delete</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
