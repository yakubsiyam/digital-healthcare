import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../../firebase.init';

const PrivateRoute = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return (
            <div className="mx-5 spinner-border text-dark" role="status">
                <span className="visually-hidden"> Loading...</span>
            </div>
        )
    }

    if (user) {
        return children;
    } else {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;