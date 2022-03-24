import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { authenticated } = useContext(AuthContext);

  return authenticated ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
