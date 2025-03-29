import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../login/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/tasks" />;
};

export default ProtectedRoute;
