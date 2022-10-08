import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';

const AlertContext = createContext();
const AlertAction = createContext();

const AlertProvider = ({children}) => {
  const [alert, setAlert] = useState([]);

  const triggerAlert = (alertMessage, alertType, timeOut = 5000) => {
    const id = uuidv4();
    const oldAlert = [...alert];
    oldAlert[alert.length] = {
      alertType: alertType,
      alertMessage: alertMessage,
      id: id,
    };
    setAlert(oldAlert);
    setTimeout(() => removeAlert(id), timeOut);
  };

  const removeAlert = (rmAlert) => {
    const newState = alert.filter((alt) => alt.id !== rmAlert);
    setAlert(newState);
  };

  return (
    <AlertContext.Provider value={{alert}}>
      <AlertAction.Provider value={{triggerAlert, removeAlert}}>
        {children}
      </AlertAction.Provider>
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);

export const useAlertActions = () => useContext(AlertAction);

export default AlertProvider;

AlertProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
