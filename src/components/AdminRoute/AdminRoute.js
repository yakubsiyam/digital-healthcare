import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading || adminLoading) {
        return (
            <div className="mx-5 spinner-border text-dark" role="status">
                <span className="visually-hidden"> Loading...</span>
            </div>
        )
    }

    if (!user || !admin) {
        signOut(auth);
        return <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default AdminRoute;