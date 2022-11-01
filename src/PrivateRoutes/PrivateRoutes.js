import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../contexs/UserContex';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    if (loading) {
        return <div>
            Loading...
        </div>
    }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;