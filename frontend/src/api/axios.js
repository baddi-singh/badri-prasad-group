// frontend/src/api/axios.js
import axios from 'axios';

const api = axios.create({
  // Vite ka environment variable use karo
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  withCredentials: true, // 🔥 Cookie aur Auth headers ke liye zaroori hai
});

// Request Interceptor: Har request se pehle chalta hai
api.interceptors.request.use(
  (config) => {
    // LocalStorage se token uthao
    const token = localStorage.getItem('token'); 
    if (token) {
      // Agar token hai, toh header mein daal do
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Agar 401 aaye toh login page pe bhej do
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('isAuthenticated');
      // Agar tum React Router use kar rahe ho toh yahan navigate('/admin') kar sakte ho
      // window.location.href = '/admin'; 
    }
    return Promise.reject(error);
  }
);

export default api;








// import axios from 'axios';

// const api = axios.create({
//   baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
// });

// // Yeh interceptor har request mein token add karega
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token'); // Ya jo bhi key tum use karte ho
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default api;