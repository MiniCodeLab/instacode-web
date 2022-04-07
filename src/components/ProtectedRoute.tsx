import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { authenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <h3>Cargando...</h3>;
  }

  return authenticated ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute;
