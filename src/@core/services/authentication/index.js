import axios from 'axios';

const jwtAxios = axios.create({
  baseURL: 'https://api.coingecko.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// jwtAxios.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response && err.response.data.msg === 'Token is not valid') {
//       console.log('Need to logout user');
//     }
//     return Promise.reject(err);
//   }
// );

// export const setAuthToken = (token) => {
//   if (token) {
//     jwtAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
//     localStorage.setItem('token', token);
//   } else {
//     delete jwtAxios.defaults.headers.common['Authorization'];
//     localStorage.removeItem('token');
//   }
// };

export default jwtAxios;
