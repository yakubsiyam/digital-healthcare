import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashNav = () => {
    const [authUser] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(authUser);

    const handleSignout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    if (adminLoading) {
        return (
            <div className="mx-5 spinner-border text-dark" role="status">
                <span className="visually-hidden"> Loading...</span>
            </div>
        );
    } else {
        return (
            <div className="col-lg-3">
                <div className="my-3 shadow-lg bg-dark-pro rounded-10 p-4">
                    <Link className="btn btn-main text-start d-lg-block mt-2 mb-4 me-4" to="/dashboard">My Profile</Link>
                    {
                        admin ?
                            (
                                <span className='d-block'>
                                    <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/editprofile">Edit Profile</Link>
                                    <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/manageorders">Manage Orders</Link>
                                    <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/manageproducts">Manage Products</Link>
                                    <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/addproduct">Add Product</Link>
                                    <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/mkadmin">Make Admin</Link>
                                </span>
                            )
                            :
                            (
                                <span>
                                    <Link className="btn btn-main text-start d-lg-block mt-2 mb-3 me-4" to="/dashboard/editprofile">Edit Profile</Link>
                                    <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/myorders">My Orders</Link>
                                    <Link className="btn btn-main text-start d-lg-block my-3 me-4" to="/dashboard/addreview">Add Review</Link>
                                </span>
                            )
                    }
                    <Link className="btn btn-outline-main text-start d-lg-block my-4 me-4" to="/" onClick={handleSignout}>Sign Out</Link>
                </div>
            </div>
        );
    }
};

export default DashNav;