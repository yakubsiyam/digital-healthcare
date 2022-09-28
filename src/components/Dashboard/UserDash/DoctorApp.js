import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../../api/axiosPrivate";
import { auth } from "../../../firebase.init";
import DashNav from "../DashNav";

const DoctorApp = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const getMyApps = async () => {
    const { data } = await axios.get(
      "https://digital-healthcare.onrender.com/apps"
    );
    const apps = data?.filter((ap) => ap?.demail === user?.email);
    setOrders(apps);
  };

  useEffect(() => {
    getMyApps();
  }, [user]);

  return (
    <div className="container">
      <div className="row">
        <DashNav></DashNav>
        <div className="col-lg-9">
          <div className="my-3 py-2 bg-dark-pro rounded-10 text-white">
            <h3 className="text-center text-main mt-4">My Orders</h3>
            <div className="row mx-3">
              {orders.map((order) => (
                <div className="col-md-6 col-lg-4 p-3" key={order._id}>
                  <div className="bg-light text-dark p-3 rounded-10 h-100 d-flex flex-column justify-content-between">
                    <h5 className="fw-bolder">{order?.name}</h5>
                    <p>
                      Total: <span className="text-main">{order?.date}</span>
                    </p>
                    <p>
                      Status: <span className="text-main">{order?.time}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorApp;
