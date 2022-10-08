import React from 'react';
import AppLoader from '@core/loader';
import PropTypes from 'prop-types';
import { useAuthUser } from './authHook';

const AuthLoading = ({ children }) => {
  const { isLoading } = useAuthUser();
  return isLoading ? <AppLoader /> : <>{children}</>;
};

export default AuthLoading;

AuthLoading.propTypes = {
  children: PropTypes.node.isRequired,
};
