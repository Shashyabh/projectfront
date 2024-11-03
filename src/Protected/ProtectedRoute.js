import React from "react";
import { Navigate } from "react-router-dom";

const getTokenFromLocalStorage = () => {
	const data = JSON.parse(localStorage.getItem("userData")); // Adjust the key if necessary
	return data ? data.token : null;
};

const isTokenValid = (token) => {
	if (!token) return false;

	const payload = token.split(".")[1];
	if (!payload) return false;

	const decodedPayload = JSON.parse(atob(payload));
	return decodedPayload.exp * 1000 > Date.now();
};

const ProtectedRoute = ({ element }) => {
	const token = getTokenFromLocalStorage();

	return isTokenValid(token) ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
