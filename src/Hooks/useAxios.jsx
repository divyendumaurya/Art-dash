import axios from 'axios';


const BASE_URL ='https://test.solz.me/api/v1/'

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL // Replace with your base URL
  });

  // Add interceptors for request and response if needed

  // Request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      // Modify the request config if needed
      return config;
    },
    (error) => {
      // Handle request error if needed
      return Promise.reject(error);
    }
  );

  // Response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      // Modify the response if needed
      return response;
    },
    (error) => {
      // Handle response error if needed
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;