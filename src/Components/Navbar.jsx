import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import useAxios from '../Hooks/useAxios';

const Navbar = () => {
  const navigate = useNavigate();
//   const axios = useAxios();
  const isLoggedIn = !!localStorage.getItem('token');


// UserLoggedIn 
// const isLoggedIn = !!Cookies.get('session');


  const handleLogout = () => {
    localStorage.removeItem('token');
     navigate('/');
  };

// const handleLogout = () => {
    
//     Cookies.remove('session'); // Clear the session cookie

//     document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Clear the HttpOnly cookie to expire

//     //  remove the Authorization header
//     axios.defaults.headers.common['Authorization'] = null;

//     navigate('/');
//   };


  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-blue-800 text-white border-gray-200  shadow-md">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/user/artist" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://www.svgrepo.com/show/66249/soundcloud.svg"
            className="h-8"
            alt="Artist App Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Artist Dashboard</span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link to="/user/artist" className="text-white  hover:bg-gray-50 hover:text-blue-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
            Home
          </Link>
          <button disabled className="text-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2">
            About
          </button>
          <button disabled className="text-gray-400 cursor-not-allowed font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2">
            Contact
          </button>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              type="button"
              className="text-blue-700 bg-white hover:bg-cyan-50 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;