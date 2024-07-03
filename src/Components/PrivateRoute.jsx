import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;



// import Cookies from 'js-cookie';

// const PrivateRoute = () => {
//   // Check for the presence of a session cookie
//   const isLoggedIn = !!Cookies.get('session');

//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


