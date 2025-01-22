import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";

interface ProtectedRouteProps {
    children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const email = useSelector((state: RootState) => state.auth.email);

    if (!email) {
        console.log('Please enter a valid email')
        return <Navigate to="/sign-in" replace />;
    }

    return children;
};

export default ProtectedRoute;
