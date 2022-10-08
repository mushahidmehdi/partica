import React from 'react';
import PropTypes from 'prop-types';
import AlertProvider from './alert/AlertProvider';
import CoingeckoProvider from './coingecko/CoingeckoProvider';

const AppAPIProvider = ({ children }) => {
  return (
    <AlertProvider>
      <CoingeckoProvider>{children}</CoingeckoProvider>
    </AlertProvider>
  );
};

export default AppAPIProvider;

AppAPIProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
