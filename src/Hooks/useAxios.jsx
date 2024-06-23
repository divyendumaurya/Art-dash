import axios from 'axios';


const BASE_URL ='https://test.solz.me/api/v1/'

const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL // Replace with your base URL
  });

  // Add interceptors for request and response if needed
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxios;