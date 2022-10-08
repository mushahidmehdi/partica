import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAlertMethod } from '@core/utility/useAlert';
import PropTypes from 'prop-types';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

const JWTAuthAuthProvider = ({ children }) => {
  const [jwtAuthData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      const { role } = jwt_decode(localStorage.getItem('token'));
      if (role) {
        setJWTAuthData({
          user: role,
          isAuthenticated: true,
          isLoading: false,
        });
      }
    }
  }, [token]);

  const { triggerAlert } = useAlertMethod();

  const SignInUser = async (params) => {
    setJWTAuthData((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      const resp = await axios.post(
        'https://interview.paratica.com/auth',
        params
      );
      console.log(resp);
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token);
        setJWTAuthData({
          ...jwtAuthData,
          isAuthenticated: false,
          isLoading: false,
        });
      } else {
        triggerAlert('Password or Email is not correct');
        setJWTAuthData({
          ...jwtAuthData,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    } catch (error) {
      triggerAlert('Password or Email is not correct');
      setJWTAuthData({
        ...jwtAuthData,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  };

  const Logout = async () => {
    localStorage.removeItem('token');
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  return (
    <JWTAuthContext.Provider value={{ ...jwtAuthData }}>
      <JWTAuthActionsContext.Provider
        value={{
          SignInUser,
          Logout,
        }}
      >
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
