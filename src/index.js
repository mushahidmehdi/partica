import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from 'styles/Global';

import { ThemeProvider } from 'styled-components';
import AuthProvider from '@core/services/authentication/JWTAuthProvider';
import AppAPIProvider from '@core/services';
import theme from 'styles/Theme';
import Loading from '@core/utility/authLoading';
import 'styles/global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppAPIProvider>
        <AuthProvider>
          <Loading>
            <App />
          </Loading>
        </AuthProvider>
      </AppAPIProvider>
    </ThemeProvider>
  </React.StrictMode>
);
