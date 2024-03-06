import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { getAccessToken } from './utils/storage'; 


const PrivateRoute = ({ element }) => {
    const isAuthenticated = !!getAccessToken()
  
    if (!isAuthenticated) {
      return <Navigate to="/logIn" />;
    }
  
    return element;
  };

export default PrivateRoute