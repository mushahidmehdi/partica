import {
  useAlertActions,
  useAlertContext,
} from '@core/services/alert/AlertProvider';

export const useAlert = () => {
  const { alert } = useAlertContext();
  return { alert };
};

export const useAlertMethod = () => {
  const { triggerAlert, removeAlert } = useAlertActions();
  return { triggerAlert, removeAlert };
};
