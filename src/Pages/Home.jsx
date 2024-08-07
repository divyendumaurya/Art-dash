import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function getUser() {
  const userString = localStorage.getItem('user');

  if (userString === null || userString === 'undefined') {
    return null;
  }

  try {
    return JSON.parse(userString);
  } catch (error) {
    console.log('Error parsing user data:', error);
    return null;
  }
}

const Home = () => {
  const [user, setUser] = useState(getUser());

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <>
      

      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Admin panel for your Organization!
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Register
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Login
              </Link>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://static.tildacdn.com/tild3530-3830-4638-a665-373735636232/admin_panel.png" alt="mockup" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';

// function getUser() {
//   const userString = Cookies.get('user');
  
//   if (!userString) {
//     return null;
//   }
  
//   try {
//     return JSON.parse(userString);
//   } catch (error) {
//     console.log('Error parsing user data:', error);
//     return null;
//   }
// }

// const Home = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     setUser(getUser());
//   }, []);

//   const handleLogout = () => {
//     Cookies.remove('user');
//     Cookies.remove('session');
//     // Attempt to clear the HttpOnly cookie by setting its expiration to a past date
//     document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
//     setUser(null);
//   };

//   return (
//     <>
//       <div>
//         <section className="bg-white dark:bg-gray-900">
//           <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
//             <div className="mr-auto place-self-center lg:col-span-7">
//               <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
//                 Admin panel for your Organization!
//               </h1>
//               <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
//                 From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
//               </p>
//               {user ? (
//                 <button
//                   onClick={handleLogout}
//                   className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <>
//                   <Link
//                     to="/signup"
//                     className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
//                   >
//                     Register
//                     <svg
//                       className="w-5 h-5 ml-2 -mr-1"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                         clipRule="evenodd"
//                       ></path>
//                     </svg>
//                   </Link>
//                   <Link
//                     to="/login"
//                     className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
//                   >
//                     Login
//                   </Link>
//                 </>
//               )}
//             </div>
//             <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
//               <img src="https://static.tildacdn.com/tild3530-3830-4638-a665-373735636232/admin_panel.png" alt="mockup" />
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Home;